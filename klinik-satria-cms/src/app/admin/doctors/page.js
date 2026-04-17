import Link from 'next/link';
import { Activity, Users, Image as ImageIcon, Settings, LogOut, FileText, Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminDoctors() {
  const doctors = [
    { id: 1, nama: "dr. Andi Wijaya", spesialisasi: "Dokter Umum", jadwal: "Senin - Rabu (08.00 - 14.00)" },
    { id: 2, nama: "drg. Budi Santoso", spesialisasi: "Dokter Gigi", jadwal: "Kamis - Sabtu (16.00 - 20.00)" },
    { id: 3, nama: "Bd. Siti Aminah", spesialisasi: "Bidan (KIA)", jadwal: "Setiap Hari" },
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
          <Link href="/admin/doctors" className="flex items-center px-4 py-3 bg-sky-600 rounded-lg text-white">
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
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
          <h1 className="text-xl font-bold text-gray-800">Manajemen Profil Dokter & Nakes</h1>
          <button className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 font-medium">
            <Plus className="w-4 h-4 mr-2" /> Tambah Dokter
          </button>
        </header>

        <div className="p-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold text-gray-600">Nama</th>
                  <th className="p-4 font-semibold text-gray-600">Spesialisasi</th>
                  <th className="p-4 font-semibold text-gray-600">Jadwal</th>
                  <th className="p-4 font-semibold text-gray-600 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doc) => (
                  <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 text-gray-800 font-medium">{doc.nama}</td>
                    <td className="p-4 text-gray-600">{doc.spesialisasi}</td>
                    <td className="p-4 text-gray-600">{doc.jadwal}</td>
                    <td className="p-4 flex justify-center space-x-2">
                      <button className="p-2 text-sky-600 hover:bg-sky-50 rounded-md transition" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-500 hover:bg-red-50 rounded-md transition" title="Hapus">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
