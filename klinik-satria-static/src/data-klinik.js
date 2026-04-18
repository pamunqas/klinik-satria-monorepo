export const klinikData = {
  nama: "Klinik Satria Gadingan",
  buka: "Buka 24 Jam",
  tagline: "Melayani Pasien Umum & BPJS Kesehatan",
  alamat: "Jl. Kaliurang KM 11, Gadingan, Sinduharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
  kontak: {
    telepon: "0274-123456",
    email: "info@klinik-satria.com",
    socialMedia: {
      instagram: "https://instagram.com/kliniksatriagadingan",
      facebook: "https://facebook.com/kliniksatriagadingan"
    }
  },
  visimisi: {
    visi: "Menjadi klinik kesehatan rujukan utama yang memberikan pelayanan profesional, terjangkau, dan paripurna bagi masyarakat.",
    misi: [
      "Memberikan pelayanan medis dasar dan lanjutan yang berkualitas.",
      "Mengutamakan keselamatan dan kepuasan pasien.",
      "Menyediakan fasilitas kesehatan yang memadai dan buka 24 jam.",
      "Mendukung program pemerintah melalui pelayanan BPJS Kesehatan."
    ]
  },
  dokter: [
    { id: 1, nama: "dr. Andi Wijaya", spesialisasi: "Dokter Umum", jadwal: "Senin - Rabu (08.00 - 14.00)", foto: "https://ui-avatars.com/api/?name=Andi+Wijaya&background=0D8ABC&color=fff&size=150" },
    { id: 2, nama: "drg. Budi Santoso", spesialisasi: "Dokter Gigi", jadwal: "Kamis - Sabtu (16.00 - 20.00)", foto: "https://ui-avatars.com/api/?name=Budi+Santoso&background=10b981&color=fff&size=150" },
    { id: 3, nama: "Bd. Siti Aminah, S.Tr.Keb", spesialisasi: "Bidan (KIA)", jadwal: "Setiap Hari (Sesuai Jadwal Jaga)", foto: "https://ui-avatars.com/api/?name=Siti+Aminah&background=f43f5e&color=fff&size=150" },
  ],
  layanan: [
    { id: 1, nama: "Poli Umum", deskripsi: "Pemeriksaan dan pengobatan penyakit umum", icon: "Stethoscope" },
    { id: 2, nama: "Poli Gigi", deskripsi: "Perawatan kesehatan gigi dan mulut", icon: "Smile" },
    { id: 3, nama: "KIA & KB", deskripsi: "Kesehatan ibu, anak, dan keluarga berencana", icon: "Baby" },
    { id: 4, nama: "UGD 24 Jam", deskripsi: "Penanganan kasus gawat darurat ringan-sedang", icon: "Activity" },
    { id: 5, nama: "Farmasi 24 Jam", deskripsi: "Penyediaan obat-obatan sesuai resep", icon: "Pill" },
    { id: 6, nama: "Laboratorium", deskripsi: "Pemeriksaan darah, urine, dll", icon: "TestTube" },
  ],
  alurPendaftaran: [
    { id: 1, langkah: "Pilih Jalur", detail: "Pilih antara Mobile JKN atau Datang Langsung" },
    { id: 2, langkah: "Siapkan Berkas", detail: "Bawa KTP asli dan Kartu BPJS (bagi pasien BPJS)" },
    { id: 3, langkah: "Registrasi", detail: "Daftar di meja pendaftaran / lewat aplikasi" },
    { id: 4, langkah: "Pemeriksaan", detail: "Diperiksa oleh dokter/tenaga kesehatan" },
    { id: 5, langkah: "Farmasi", detail: "Ambil obat di bagian farmasi" }
  ],
  galeri: [
    { id: 1, url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Gedung Klinik", kategori: "Halaman Depan" },
    { id: 2, url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Ruang Periksa Umum", kategori: "Ruang Tindakan" },
    { id: 3, url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Ruang Tunggu Nyaman", kategori: "Fasilitas Umum" },
    { id: 4, url: "https://images.unsplash.com/photo-1551076805-e18690c5e53b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Kegiatan Senam Minggu", kategori: "Kegiatan" },
    { id: 5, url: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Ruang Periksa Gigi", kategori: "Ruang Tindakan" },
    { id: 6, url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", caption: "Instalasi Farmasi", kategori: "Farmasi" },
  ]
};