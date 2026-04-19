import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

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

export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(doctors, { headers: getCorsHeaders() });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500, headers: getCorsHeaders() });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: getCorsHeaders() });

    const data = await request.json();
    const doctor = await prisma.doctor.create({
      data: {
        nama: data.nama,
        spesialisasi: data.spesialisasi,
        jadwal: data.jadwal,
        foto: data.foto || null,
      }
    });

    return NextResponse.json({ success: true, doctor }, { headers: getCorsHeaders() });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500, headers: getCorsHeaders() });
  }
}

export async function PUT(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: getCorsHeaders() });

    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) return NextResponse.json({ error: "Doctor ID required" }, { status: 400, headers: getCorsHeaders() });

    const doctor = await prisma.doctor.update({
      where: { id },
      data: updateData
    });

    return NextResponse.json({ success: true, doctor }, { headers: getCorsHeaders() });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500, headers: getCorsHeaders() });
  }
}

export async function DELETE(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: getCorsHeaders() });

    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    
    if (!id) return NextResponse.json({ error: "Doctor ID required" }, { status: 400, headers: getCorsHeaders() });

    await prisma.doctor.delete({
      where: { id }
    });

    return NextResponse.json({ success: true }, { headers: getCorsHeaders() });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500, headers: getCorsHeaders() });
  }
}
