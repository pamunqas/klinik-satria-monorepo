import Link from 'next/link';
import { Activity, Users, Image as ImageIcon, Settings, LogOut, FileText, Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminGallery() {
  const galleries = [
    { id: 1, judul: "Gedung Klinik Depan", kategori: "Fasilitas" },
    { id: 2, judul: "Ruang Tunggu Pasien", kategori: "Fasilitas" },
    { id: 3, judul: "Ruang Periksa Gigi", kategori: "Fasilitas" },
    { id: 4, judul: "Kegiatan Senam Minggu", kategori: "Kegiatan" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Activity className="h-6 w-6 text-emerald-400 mr-2" />
          <span className="font-bold text-lg">Admin Klinik</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/admin" className="flex items-center px-4 py-3 hover:bg-slate-800 rounded-lg text-slate-300">
            <FileText className="w-5 h-5 mr-3" /> Beranda & Visi Misi
          </Link>
          <Link href="/admin/doctors" className="flex items-center px-4 py-3 hover:bg-slate-800 rounded-lg text-slate-300">
            <Users className="w-5 h-5 mr-3" /> Profil Dokter
          </Link>
          <Link href="/admin/services" className="flex items-center px-4 py-3 hover:bg-slate-800 rounded-lg text-slate-300">
            <Settings className="w-5 h-5 mr-3" /> Layanan
          </Link>
          <Link href="/admin/gallery" className="flex items-center px-4 py-3 bg-sky-600 rounded-lg text-white">
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
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
          <h1 className="text-xl font-bold text-gray-800">Manajemen Galeri</h1>
          <button className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 font-medium">
            <Plus className="w-4 h-4 mr-2" /> Upload Foto Baru
          </button>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleries.map((img) => (
              <div key={img.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
                <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                  <ImageIcon className="w-10 h-10 text-gray-400" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                    <button className="p-2 bg-white text-gray-800 rounded-full hover:bg-sky-50 transition" title="Edit Judul">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition" title="Hapus Foto">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-sm truncate">{img.judul}</h3>
                  <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                    {img.kategori}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
