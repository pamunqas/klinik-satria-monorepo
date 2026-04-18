"use client";

import { useState } from 'react';
import { Plus, Edit, Trash2, X, UploadCloud, User } from 'lucide-react';

export default function AdminDoctors() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('tambah'); // 'tambah' atau 'edit'

  const doctors = [
    { id: 1, nama: "dr. Andi Wijaya", spesialisasi: "Dokter Umum", jadwal: "Senin - Rabu (08.00 - 14.00)" },
    { id: 2, nama: "drg. Budi Santoso", spesialisasi: "Dokter Gigi", jadwal: "Kamis - Sabtu (16.00 - 20.00)" },
    { id: 3, nama: "Bd. Siti Aminah", spesialisasi: "Bidan (KIA)", jadwal: "Setiap Hari" },
  ];

  const openModal = (mode) => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 shrink-0">
        <h1 className="text-xl font-bold text-gray-800">Manajemen Profil Dokter & Nakes</h1>
        <button 
          onClick={() => openModal('tambah')}
          className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 font-medium transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" /> Tambah Dokter
        </button>
      </header>

      <div className="p-8 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-semibold text-gray-600">Foto</th>
                <th className="p-4 font-semibold text-gray-600">Nama</th>
                <th className="p-4 font-semibold text-gray-600">Spesialisasi</th>
                <th className="p-4 font-semibold text-gray-600">Jadwal</th>
                <th className="p-4 font-semibold text-gray-600 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doc) => (
                <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                  </td>
                  <td className="p-4 text-gray-800 font-medium">{doc.nama}</td>
                  <td className="p-4 text-gray-600">{doc.spesialisasi}</td>
                  <td className="p-4 text-gray-600">{doc.jadwal}</td>
                  <td className="p-4 flex justify-center space-x-2">
                    <button 
                      onClick={() => openModal('edit')}
                      className="p-2 text-sky-600 hover:bg-sky-50 rounded-md transition" 
                      title="Edit"
                    >
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

      {/* Modal Tambah/Edit Dokter */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
              <h2 className="text-lg font-bold text-gray-800">
                {modalMode === 'edit' ? 'Edit Profil Dokter' : 'Tambah Dokter Baru'}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-6 overflow-y-auto">
              <form className="space-y-5">
                
                {/* Upload Foto Dokter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Foto Profil (Opsional)</label>
                  <div className="mt-1 flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 overflow-hidden">
                      <User className="w-8 h-8 text-gray-400" />
                    </div>
                    <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>Ubah Foto</span>
                      <input type="file" className="sr-only" accept="image/png, image/jpeg, image/webp" />
                    </label>
                  </div>
                </div>

                {/* Nama Dokter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap (beserta gelar)</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: dr. Andi Wijaya"
                    defaultValue={modalMode === 'edit' ? "dr. Andi Wijaya" : ""}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 outline-none"
                  />
                </div>

                {/* Spesialisasi */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Spesialisasi / Jabatan</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Dokter Umum"
                    defaultValue={modalMode === 'edit' ? "Dokter Umum" : ""}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 outline-none"
                  />
                </div>

                {/* Jadwal Praktik */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Jadwal Praktik</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Senin - Rabu (08.00 - 14.00)"
                    defaultValue={modalMode === 'edit' ? "Senin - Rabu (08.00 - 14.00)" : ""}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 outline-none"
                  />
                </div>

              </form>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end space-x-3 shrink-0">
              <button 
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors"
              >
                Batal
              </button>
              <button 
                type="button"
                className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 font-medium shadow-sm transition-colors"
              >
                Simpan
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
