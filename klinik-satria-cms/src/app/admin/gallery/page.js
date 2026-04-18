"use client";

import { useState } from 'react';
import { Plus, Edit, Trash2, Image as ImageIcon, X, UploadCloud } from 'lucide-react';

export default function AdminGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 font-medium transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" /> Upload Foto Baru
        </button>
      </header>

      <div className="p-8 overflow-y-auto">
        {/* Grid Galeri (Tetap sama) */}
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

      {/* Modal Upload Foto */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-800">Upload Foto Galeri Baru</h2>
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
                {/* 1. File Upload (Image) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Foto</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-sky-400 transition-colors cursor-pointer bg-gray-50">
                    <div className="space-y-1 text-center">
                      <UploadCloud className="mx-auto h-10 w-10 text-gray-400" />
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label className="relative cursor-pointer rounded-md font-medium text-sky-600 hover:text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                          <span>Klik untuk upload file</span>
                          <input type="file" className="sr-only" accept="image/png, image/jpeg, image/webp" />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, WEBP hingga 5MB</p>
                    </div>
                  </div>
                </div>

                {/* 2. Judul Foto (Title) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Judul / Deskripsi Singkat</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Gedung Perawatan Utama"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 outline-none"
                  />
                </div>

                {/* 3. Kategori (Category) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kategori Foto</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 outline-none bg-white">
                    <option value="">-- Pilih Kategori --</option>
                    <option value="Fasilitas">Fasilitas Klinik</option>
                    <option value="Kegiatan">Kegiatan & Acara</option>
                    <option value="Layanan">Dokumentasi Layanan</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
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
                Upload Foto
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
