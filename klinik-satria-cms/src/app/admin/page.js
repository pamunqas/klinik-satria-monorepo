export default function AdminDashboard() {
  return (
    <>
      <header className="h-16 bg-white shadow-sm flex items-center px-8 shrink-0">
        <h1 className="text-xl font-bold text-gray-800">Edit Beranda & Visi Misi</h1>
      </header>

      <div className="p-8 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl">
          <h2 className="text-lg font-semibold mb-6">Informasi Utama</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nama Klinik</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" defaultValue="Klinik Satria Gadingan" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tagline (Slogan)</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" defaultValue="Melayani Pasien Umum & BPJS Kesehatan" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Visi Klinik</label>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" rows="3" defaultValue="Menjadi klinik kesehatan rujukan utama yang memberikan pelayanan profesional, terjangkau, dan paripurna bagi masyarakat."></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kontak WhatsApp</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" defaultValue="081234567890" />
            </div>

            <div className="pt-4 flex justify-end">
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
