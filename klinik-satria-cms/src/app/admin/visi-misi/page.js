"use client";

import useSWR from 'swr';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Save } from 'lucide-react';

const fetcher = url => fetch(url).then(res => res.json());

export default function AdminVisiMisi() {
  const { data: profile, mutate } = useSWR('/api/profile', fetcher);
  const [formData, setFormData] = useState({ visi: '', misi: '' });
  const [isSaving, setIsSaving] = useState(false);

  // Sync state with fetched data
  useEffect(() => {
    if (profile) {
      setFormData({
        visi: profile.visi || '',
        misi: Array.isArray(profile.misi) ? profile.misi.join('\n') : (profile.misi || ''),
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
        body: JSON.stringify({
          visi: formData.visi,
          misi: formData.misi // The API handles splitting this into an array
        })
      });
      
      if (!response.ok) throw new Error("Gagal menyimpan");
      
      mutate(); // Refresh data
      toast.success("Visi & Misi berhasil diperbarui!");
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
        <h1 className="text-xl font-bold text-gray-800">Pengaturan Visi & Misi</h1>
      </header>

      <div className="p-8 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl">
          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Visi Klinik</label>
              <textarea 
                name="visi"
                value={formData.visi}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" 
                rows="4" 
                required
              ></textarea>
              <p className="mt-2 text-sm text-gray-500">Visi adalah tujuan utama atau cita-cita jangka panjang klinik.</p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-2">Misi Klinik</label>
              <p className="mb-3 text-sm text-gray-500">Tuliskan misi klinik. Gunakan tombol Enter (baris baru) untuk memisahkan setiap poin misi.</p>
              <textarea 
                name="misi"
                value={formData.misi}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" 
                rows="8" 
                required
              ></textarea>
            </div>

            <div className="pt-6 flex justify-end">
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