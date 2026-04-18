"use client";

import { useState } from 'react';
import { Plus, Edit, Trash2, X } from 'lucide-react';

export default function AdminServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('tambah'); // 'tambah' atau 'edit'

  const services = [
    { id: 1, nama: "Poli Umum", deskripsi: "Pemeriksaan dan pengobatan penyakit umum" },
    { id: 2, nama: "Poli Gigi", deskripsi: "Perawatan kesehatan gigi dan mulut" },
    { id: 3, nama: "KIA & KB", deskripsi: "Kesehatan ibu, anak, dan keluarga berencana" },
    { id: 4, nama: "UGD 24 Jam", deskripsi: "Penanganan kasus gawat darurat ringan-sedang" },
  ];

  const openModal = (mode) => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 shrink-0">
        <h1 className="text-xl font-bold text-gray-800">Manajemen Layanan Klinik</h1>
        <button 
          onClick={() => openModal('tambah')}
          className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 font-medium transition-colors"
        >
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
                  <button 
                    onClick={() => openModal('edit')}
                    className="p-1.5 text-sky-600 hover:bg-sky-50 rounded-md transition" 
                    title="Edit"
                  >
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

      {/* Modal Tambah/Edit Layanan */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-800">
                {modalMode === 'edit' ? 'Edit Layanan' : 'Tambah Layanan Baru'}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-6">
              <form className="space-y-5">
                
                {/* Nama Layanan */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Layanan</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Poli Mata"
                    defaultValue={modalMode === 'edit' ? "Poli Umum" : ""}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 outline-none"
                  />
                </div>

                {/* Deskripsi */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi Layanan</label>
                  <textarea 
                    rows="3"
                    placeholder="Contoh: Pelayanan pemeriksaan kesehatan mata paripurna..."
                    defaultValue={modalMode === 'edit' ? "Pemeriksaan dan pengobatan penyakit umum" : ""}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 outline-none"
                  ></textarea>
                </div>

                {/* Ikon Layanan (Opsional) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ikon Layanan (Emoji / Kode)</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: 🩺"
                    defaultValue={modalMode === 'edit' ? "🩺" : ""}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">Kamu bisa menggunakan emoji standar sebagai ikon.</p>
                </div>

              </form>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end space-x-3">
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
