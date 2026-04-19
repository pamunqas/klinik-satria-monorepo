"use client";

import useSWR from 'swr';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Save } from 'lucide-react';

const fetcher = url => fetch(url).then(res => res.json());

export default function AdminDashboard() {
  const { data: profile, mutate } = useSWR('/api/profile', fetcher);
  const [formData, setFormData] = useState({
    nama: '',
    tagline: '',
    telepon: '',
    email: '',
    alamat: '',
    jamSeninJumat: '',
    jamSabtu: '',
    jamMinggu: ''
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (profile) {
      setFormData({
        nama: profile.nama || '',
        tagline: profile.tagline || '',
        telepon: profile.telepon || '',
        email: profile.email || '',
        alamat: profile.alamat || '',
        jamSeninJumat: profile.jamSeninJumat || '',
        jamSabtu: profile.jamSabtu || '',
        jamMinggu: profile.jamMinggu || ''
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error("Gagal menyimpan");
      
      mutate();
      toast.success("Pengaturan Beranda & Profil berhasil diperbarui!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  if (!profile) return <div className="p-8 text-center text-gray-500">Memuat data...</div>;

  return (
    <>
      <header className="h-16 bg-white shadow-sm flex items-center px-8 shrink-0">
        <h1 className="text-xl font-bold text-gray-800">Pengaturan Beranda & Profil</h1>
      </header>

      <div className="p-8 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl">
          <form onSubmit={handleSave} className="space-y-6">
            <h2 className="text-lg font-semibold mb-6">Informasi Utama</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Klinik</label>
                <input 
                  type="text" 
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tagline (Slogan)</label>
                <input 
                  type="text" 
                  name="tagline"
                  value={formData.tagline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kontak Telepon</label>
                <input 
                  type="text" 
                  name="telepon"
                  value={formData.telepon}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Klinik</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" 
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Alamat Lengkap</label>
              <textarea 
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" 
                required
              ></textarea>
            </div>

            <h2 className="text-lg font-semibold mt-8 mb-4 border-t pt-6">Jam Operasional</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Senin - Jumat</label>
                <input 
                  type="text" 
                  name="jamSeninJumat"
                  value={formData.jamSeninJumat}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sabtu</label>
                <input 
                  type="text" 
                  name="jamSabtu"
                  value={formData.jamSabtu}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Minggu</label>
                <input 
                  type="text" 
                  name="jamMinggu"
                  value={formData.jamMinggu}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" 
                />
              </div>
            </div>

            <div className="pt-8 flex justify-end">
              <button 
                type="submit" 
                disabled={isSaving}
                className="flex items-center px-6 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 disabled:opacity-70"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
