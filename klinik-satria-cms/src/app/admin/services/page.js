import { Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminServices() {
  const services = [
    { id: 1, nama: "Poli Umum", deskripsi: "Pemeriksaan dan pengobatan penyakit umum" },
    { id: 2, nama: "Poli Gigi", deskripsi: "Perawatan kesehatan gigi dan mulut" },
    { id: 3, nama: "KIA & KB", deskripsi: "Kesehatan ibu, anak, dan keluarga berencana" },
    { id: 4, nama: "UGD 24 Jam", deskripsi: "Penanganan kasus gawat darurat ringan-sedang" },
  ];

  return (
    <>
      <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 shrink-0">
        <h1 className="text-xl font-bold text-gray-800">Manajemen Layanan Klinik</h1>
        <button className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 font-medium">
          <Plus className="w-4 h-4 mr-2" /> Tambah Layanan
        </button>
      </header>

      <div className="p-8 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div key={srv.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-gray-800">{srv.nama}</h3>
                <div className="flex space-x-1">
                  <button className="p-1.5 text-sky-600 hover:bg-sky-50 rounded-md transition" title="Edit">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-md transition" title="Hapus">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{srv.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
