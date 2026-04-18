export default function AdminVisiMisi() {
  return (
    <>
      <header className="h-16 bg-white shadow-sm flex items-center px-8 shrink-0">
        <h1 className="text-xl font-bold text-gray-800">Pengaturan Visi & Misi</h1>
      </header>

      <div className="p-8 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Visi Klinik</label>
              <textarea 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" 
                rows="4" 
                defaultValue="Menjadi klinik kesehatan rujukan utama yang memberikan pelayanan profesional, terjangkau, dan paripurna bagi masyarakat."
              ></textarea>
              <p className="mt-2 text-sm text-gray-500">Visi adalah tujuan utama atau cita-cita jangka panjang klinik.</p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-2">Misi Klinik</label>
              <p className="mb-3 text-sm text-gray-500">Tuliskan misi klinik. Gunakan tombol Enter (baris baru) untuk memisahkan setiap poin misi.</p>
              <textarea 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" 
                rows="6" 
                defaultValue={`Memberikan pelayanan medis yang cepat, tepat, dan ramah.
Menyediakan fasilitas kesehatan yang bersih, nyaman, dan modern.
Meningkatkan kompetensi tenaga medis secara berkelanjutan.
Mengutamakan keselamatan dan kepuasan pasien dalam setiap tindakan.`}
              ></textarea>
            </div>

            <div className="pt-6 flex justify-end">
              <button type="button" className="px-6 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700">
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}