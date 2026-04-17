import { Activity, Menu, X, Clock, Phone, Info, ArrowRight, MapPin, Stethoscope, Smile, Baby, Pill, TestTube } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Activity className="h-8 w-8 text-emerald-500 mr-2" />
              <span className="font-bold text-xl text-sky-600">Klinik Satria (CMS Ver)</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/admin" className="text-white bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md font-medium transition-colors">
                Login Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 bg-gradient-to-br from-sky-50 to-white flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Website Klinik Satria (Versi CMS)
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Ini adalah kerangka versi kedua yang menggunakan Next.js. Versi ini dirancang agar data website bisa diubah melalui Dashboard Admin tanpa menyentuh kode.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admin" className="px-8 py-4 bg-sky-600 text-white font-bold rounded-lg shadow-lg hover:bg-sky-700 transition">
              Buka Dashboard Admin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
