import Link from 'next/link';
import { Activity, Users, Image as ImageIcon, Settings, LogOut, FileText } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Activity className="h-6 w-6 text-emerald-400 mr-2" />
          <span className="font-bold text-lg">Admin Klinik</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/admin" className="flex items-center px-4 py-3 bg-sky-600 rounded-lg text-white">
            <FileText className="w-5 h-5 mr-3" /> Beranda & Visi Misi
          </Link>
          <Link href="/admin/doctors" className="flex items-center px-4 py-3 hover:bg-slate-800 rounded-lg text-slate-300">
            <Users className="w-5 h-5 mr-3" /> Profil Dokter
          </Link>
          <Link href="/admin/services" className="flex items-center px-4 py-3 hover:bg-slate-800 rounded-lg text-slate-300">
            <Settings className="w-5 h-5 mr-3" /> Layanan
          </Link>
          <Link href="/admin/gallery" className="flex items-center px-4 py-3 hover:bg-slate-800 rounded-lg text-slate-300">
            <ImageIcon className="w-5 h-5 mr-3" /> Galeri
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <Link href="/" className="flex items-center px-4 py-3 hover:bg-slate-800 rounded-lg text-slate-300">
            <LogOut className="w-5 h-5 mr-3" /> Kembali ke Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white shadow-sm flex items-center px-8">
          <h1 className="text-xl font-bold text-gray-800">Edit Beranda & Visi Misi</h1>
        </header>

        <div className="p-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl">
            <h2 className="text-lg font-semibold mb-6">Informasi Utama</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Klinik</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" defaultValue="Klinik Satria Gadingan" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tagline (Slogan)</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" defaultValue="Melayani Pasien Umum & BPJS Kesehatan" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Visi Klinik</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" rows="3" defaultValue="Menjadi klinik kesehatan rujukan utama yang memberikan pelayanan profesional, terjangkau, dan paripurna bagi masyarakat."></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kontak WhatsApp</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" defaultValue="081234567890" />
              </div>

              <div className="pt-4 flex justify-end">
                <button type="button" className="px-6 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700">
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
