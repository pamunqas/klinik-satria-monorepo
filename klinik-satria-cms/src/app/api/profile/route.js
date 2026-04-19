import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

// Handle CORS for all API routes
export async function OPTIONS() {
  return NextResponse.json({}, { headers: getCorsHeaders() });
}

function getCorsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

// GET public data for frontend
export async function GET() {
  try {
    let profile = await prisma.clinicProfile.findUnique({
      where: { id: "default" }
    });

    if (!profile) {
      // Create initial if empty
      profile = await prisma.clinicProfile.create({
        data: { id: "default", misi: [
          "Memberikan pelayanan medis berkualitas dengan kemudahan akses dan profesionalisme.",
          "Menyediakan layanan terintegrasi Rekam Medis Elektronik (RME) yang cepat dan akurat.",
          "Mengutamakan keselamatan dan kepuasan pasien dari berbagai kalangan masyarakat.",
          "Mendukung program pemerintah sebagai fasilitas kesehatan tingkat pertama BPJS Kesehatan."
        ]}
      });
    }

    return NextResponse.json(profile, { headers: getCorsHeaders() });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500, headers: getCorsHeaders() });
  }
}

// PUT to update data (Admin only)
export async function PUT(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: getCorsHeaders() });

    const data = await request.json();
    
    // Ensure misi is properly formatted as array if it comes as string with newlines
    let misiArray = data.misi;
    if (typeof data.misi === 'string') {
      misiArray = data.misi.split('\n').filter(m => m.trim() !== '');
    }

    const updatedProfile = await prisma.clinicProfile.upsert({
      where: { id: "default" },
      update: {
        ...data,
        misi: misiArray || data.misi,
      },
      create: {
        id: "default",
        ...data,
        misi: misiArray || data.misi,
      }
    });

    return NextResponse.json({ success: true, profile: updatedProfile }, { headers: getCorsHeaders() });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500, headers: getCorsHeaders() });
  }
}
