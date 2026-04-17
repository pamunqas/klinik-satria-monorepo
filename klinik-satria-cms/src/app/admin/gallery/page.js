import { Plus, Edit, Trash2, Image as ImageIcon } from 'lucide-react';

export default function AdminGallery() {
  const galleries = [
    { id: 1, judul: "Gedung Klinik Depan", kategori: "Fasilitas" },
    { id: 2, judul: "Ruang Tunggu Pasien", kategori: "Fasilitas" },
    { id: 3, judul: "Ruang Periksa Gigi", kategori: "Fasilitas" },
    { id: 4, judul: "Kegiatan Senam Minggu", kategori: "Kegiatan" },
  ];

  return (
    <>
      <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 shrink-0">
        <h1 className="text-xl font-bold text-gray-800">Manajemen Galeri</h1>
        <button className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 font-medium">
          <Plus className="w-4 h-4 mr-2" /> Upload Foto Baru
        </button>
      </header>

      <div className="p-8 overflow-y-auto">
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
    </>
  );
}
