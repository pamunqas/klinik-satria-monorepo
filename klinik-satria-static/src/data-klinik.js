export const klinikData = {
  nama: "Klinik Pratama Satria Gadingan",
  buka: "Buka 24 Jam",
  tagline: "Ekosistem Layanan Kesehatan Primer Terpadu & Faskes BPJS",
  alamat: "Jl. Kaliurang KM 10,9, Desa Gadingan RT 1 RW 7, Kel. Sinduharjo, Kec. Ngaglik, Kab. Sleman, DIY",
  kontak: {
    telepon: "0274-123456",
    email: "info@klinik-satria.com",
    socialMedia: {
      instagram: "https://instagram.com/kliniksatriagadingan",
      facebook: "https://facebook.com/kliniksatriagadingan"
    }
  },
  visimisi: {
    visi: "Menjadi pusat pelayanan fasilitas kesehatan primer pilihan utama yang memberikan pelayanan berkualitas dan secara menyeluruh.",
    misi: [
      "Memberikan pelayanan medis berkualitas dengan kemudahan akses dan profesionalisme.",
      "Menyediakan layanan terintegrasi Rekam Medis Elektronik (RME) yang cepat dan akurat.",
      "Mengutamakan keselamatan dan kepuasan pasien dari berbagai kalangan masyarakat.",
      "Mendukung program pemerintah sebagai fasilitas kesehatan tingkat pertama BPJS Kesehatan."
    ]
  },
  dokter: [
    { id: 1, nama: "5 Dokter Umum", spesialisasi: "Pelayanan Medik Dasar", jadwal: "Sistem Rotasi/Shift 24 Jam", foto: "https://ui-avatars.com/api/?name=Dokter+Umum&background=0D8ABC&color=fff&size=150" },
    { id: 2, nama: "2 Dokter Gigi", spesialisasi: "Spesialisasi Gigi Primer", jadwal: "Sesuai Jadwal Poli Gigi", foto: "https://ui-avatars.com/api/?name=Dokter+Gigi&background=10b981&color=fff&size=150" },
    { id: 3, nama: "2 Bidan & Perawat", spesialisasi: "KIA, KB & Asuhan Keperawatan", jadwal: "Setiap Hari", foto: "https://ui-avatars.com/api/?name=Bidan+Perawat&background=f43f5e&color=fff&size=150" },
  ],
  layanan: [
    { id: 1, nama: "Poli Umum", deskripsi: "Pemeriksaan dan pengobatan penyakit umum oleh tim 5 dokter profesional.", icon: "Stethoscope" },
    { id: 2, nama: "Poli Gigi", deskripsi: "Perawatan kesehatan gigi dan mulut primer.", icon: "Smile" },
    { id: 3, nama: "KIA & KB", deskripsi: "Kesehatan ibu, anak, dan keluarga berencana.", icon: "Baby" },
    { id: 4, nama: "UGD 24 Jam", deskripsi: "Penanganan kasus gawat darurat ringan-sedang.", icon: "Activity" },
    { id: 5, nama: "Farmasi Terpadu", deskripsi: "Dikelola oleh Apoteker dan Asisten Apoteker berdedikasi.", icon: "Pill" },
    { id: 6, nama: "Rekam Medis Elektronik", deskripsi: "Integrasi data kesehatan pasien yang aman dan berkesinambungan.", icon: "TestTube" },
  ],
  alurPendaftaran: [
    { id: 1, langkah: "Pilih Jalur", detail: "Pilih antara Mobile JKN atau Datang Langsung" },
    { id: 2, langkah: "Siapkan Berkas", detail: "Bawa KTP asli dan Kartu BPJS (bagi pasien BPJS)" },
    { id: 3, langkah: "Registrasi Digital", detail: "Pendaftaran terintegrasi sistem Rekam Medis Elektronik (RME)" },
    { id: 4, langkah: "Pemeriksaan", detail: "Diperiksa oleh tim dokter/tenaga kesehatan" },
    { id: 5, langkah: "Farmasi", detail: "Pengambilan obat dengan resep dokter" }
  ],
  mobileJKN: {
    judul: "Mudahnya Daftar via Aplikasi Mobile JKN",
    deskripsi: "Sebagai mitra resmi BPJS Kesehatan, Anda dapat mengambil nomor antrean dari rumah tanpa perlu menunggu lama di klinik. Cukup gunakan aplikasi Mobile JKN di smartphone Anda.",
    catatan: "*Perhatian: Pendaftaran via Mobile JKN ini KHUSUS untuk pasien BPJS Kesehatan yang faskes pertamanya terdaftar di Klinik Satria Gadingan.",
    langkah: [
      { id: 1, title: "Buka Aplikasi", desc: "Buka aplikasi Mobile JKN dan pastikan Anda sudah login menggunakan NIK atau nomor kartu BPJS." },
      { id: 2, title: "Pilih Pendaftaran", desc: "Ketuk menu 'Pendaftaran Pelayanan' (Antrean) di layar utama aplikasi." },
      { id: 3, title: "Pilih Faskes & Poli", desc: "Pilih Klinik Satria Gadingan, lalu tentukan Poli (Umum/Gigi/KIA) dan tanggal/jam kunjungan." },
      { id: 4, title: "Dapatkan Antrean", desc: "Selesai! Anda akan mendapat nomor antrean digital beserta estimasi waktu pelayanan." }
    ]
  },
  galeri: [
    { id: 1, url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Gedung Klinik", kategori: "Halaman Depan" },
    { id: 2, url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Ruang Periksa Umum", kategori: "Ruang Tindakan" },
    { id: 3, url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Ruang Tunggu Nyaman", kategori: "Fasilitas Umum" },
    { id: 4, url: "https://images.unsplash.com/photo-1551076805-e18690c5e53b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Edukasi Kesehatan", kategori: "Kegiatan" },
    { id: 5, url: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Ruang Periksa Gigi", kategori: "Ruang Tindakan" },
    { id: 6, url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Instalasi Farmasi", kategori: "Farmasi" },
  ]
};