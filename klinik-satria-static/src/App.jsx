import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Stethoscope, Smile, Baby, Activity, Pill, TestTube, MapPin, Phone, Clock, Info, ArrowRight, Menu, X } from 'lucide-react';
import { klinikData } from './data-klinik';

const iconMap = {
  Stethoscope: <Stethoscope className="w-8 h-8 text-sky-500" />,
  Smile: <Smile className="w-8 h-8 text-sky-500" />,
  Baby: <Baby className="w-8 h-8 text-sky-500" />,
  Activity: <Activity className="w-8 h-8 text-sky-500" />,
  Pill: <Pill className="w-8 h-8 text-sky-500" />,
  TestTube: <TestTube className="w-8 h-8 text-sky-500" />
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filterGaleri, setFilterGaleri] = useState('Semua');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const kategoriGaleri = ['Semua', ...new Set(klinikData.galeri.map(item => item.kategori))];
  
  const filteredGaleri = filterGaleri === 'Semua' 
    ? klinikData.galeri 
    : klinikData.galeri.filter(item => item.kategori === filterGaleri);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Activity className="h-8 w-8 text-emerald-500 mr-2" />
              <span className="font-bold text-xl text-sky-600">Klinik Satria</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Profil', 'Layanan', 'Galeri', 'Kontak'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="text-gray-600 hover:text-sky-500 cursor-pointer font-medium transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-sky-500">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {['Home', 'Profil', 'Layanan', 'Galeri', 'Kontak'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                onClick={toggleMenu}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-500 hover:bg-gray-50 rounded-md"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* HOME SECTION */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 mb-6 text-sm font-semibold">
            <Clock className="w-4 h-4 mr-2" /> {klinikData.buka}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {klinikData.nama}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            {klinikData.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Link to="layanan" smooth={true} duration={500} offset={-80} className="flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-sky-500/30 cursor-pointer">
              Lihat Layanan Kami
            </Link>
            <a href="#kontak" className="flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-sky-200 text-base font-medium rounded-md text-sky-700 bg-sky-50 hover:bg-sky-100 md:py-4 md:text-lg transition-all">
              <Info className="w-5 h-5 mr-2" /> Info Mobile JKN
            </a>
          </div>

          {/* Alur Pendaftaran */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Alur Pendaftaran Pasien</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {klinikData.alurPendaftaran.map((alur, index) => (
                <div key={alur.id} className="relative flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 z-10">
                    {alur.id}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{alur.langkah}</h4>
                  <p className="text-sm text-gray-500">{alur.detail}</p>
                  {index < klinikData.alurPendaftaran.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-[2px] bg-sky-100 -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROFIL SECTION */}
      <section id="profil" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Profil Klinik</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
              <h3 className="text-2xl font-bold text-sky-800 mb-4 flex items-center">
                 Visi
              </h3>
              <p className="text-lg text-gray-700 italic">"{klinikData.visimisi.visi}"</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center">
                 Misi
              </h3>
              <ul className="space-y-3">
                {klinikData.visimisi.misi.map((m, i) => (
                  <li key={i} className="flex text-gray-700">
                    <ArrowRight className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">Tenaga Kesehatan Kami</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {klinikData.dokter.map(dok => (
              <div key={dok.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <img className="w-full h-48 object-cover object-top" src={dok.foto} alt={dok.nama} />
                <div className="p-6 text-center">
                  <h4 className="font-bold text-xl text-gray-900 mb-1">{dok.nama}</h4>
                  <p className="text-sky-600 font-medium mb-3">{dok.spesialisasi}</p>
                  <div className="bg-gray-50 rounded-md p-3 text-sm text-gray-600">
                    <Clock className="w-4 h-4 inline mr-1 text-gray-400" /> {dok.jadwal}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYANAN SECTION */}
      <section id="layanan" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Kami menyediakan berbagai layanan kesehatan dasar dan lanjutan untuk memastikan kesehatan Anda dan keluarga.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {klinikData.layanan.map(layan => (
              <div key={layan.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start">
                <div className="flex-shrink-0 bg-sky-50 p-3 rounded-lg mr-4">
                  {iconMap[layan.icon]}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{layan.nama}</h4>
                  <p className="text-gray-600 text-sm">{layan.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERI SECTION */}
      <section id="galeri" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Galeri & Fasilitas</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded mb-8"></div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {kategoriGaleri.map(kategori => (
                <button
                  key={kategori}
                  onClick={() => setFilterGaleri(kategori)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filterGaleri === kategori
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-500/30'
                      : 'bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-100'
                  }`}
                >
                  {kategori}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredGaleri.map(item => (
              <div key={item.id} className="group relative rounded-xl overflow-hidden aspect-square bg-gray-200">
                <img src={item.url} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-medium p-4">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK SECTION */}
      <section id="kontak" className="py-16 md:py-24 bg-sky-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
              <p className="text-sky-100 mb-8 text-lg">Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin mendaftar berobat.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-sky-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Alamat</h4>
                    <p className="text-sky-100">{klinikData.alamat}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-sky-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Kontak</h4>
                    <p className="text-sky-100">Telepon: {klinikData.kontak.telepon}</p>
                    <p className="text-sky-100">Email: {klinikData.kontak.email || "info@klinik-satria.com"}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-sky-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Jam Operasional</h4>
                    <p className="text-sky-100">{klinikData.buka || "08.00 - 20.00 WIB"}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a href={klinikData.kontak.socialMedia?.instagram || "https://instagram.com/kliniksatriagadingan"} target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-sky-900 bg-white hover:bg-sky-50 transition-colors shadow-sm">
                  Instagram
                </a>
                <a href={klinikData.kontak.socialMedia?.facebook || "https://facebook.com/kliniksatriagadingan"} target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-sky-900 bg-white hover:bg-sky-50 transition-colors shadow-sm">
                  Facebook
                </a>
              </div>
            </div>

            {/* Peta Placeholder */}
            <div className="bg-sky-800 rounded-2xl p-2 h-96 relative flex items-center justify-center border border-sky-700">
               <div className="text-center p-6">
                 <MapPin className="w-16 h-16 text-sky-300 mx-auto mb-4 opacity-50" />
                 <p className="text-sky-200 font-medium">Map / Peta Google akan ditampilkan di sini.</p>
                 <p className="text-sm text-sky-300 mt-2">{klinikData.alamat}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-sky-950 py-8 text-center text-sky-200/60">
        <p>&copy; {new Date().getFullYear()} {klinikData.nama}. Hak cipta dilindungi.</p>
      </footer>
    </div>
  );
}

export default App;
