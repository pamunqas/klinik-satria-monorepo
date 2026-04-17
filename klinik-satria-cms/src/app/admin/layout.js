"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, Users, Image as ImageIcon, Settings, LogOut, FileText, User } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full z-10">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Activity className="h-6 w-6 text-emerald-400 mr-2" />
          <span className="font-bold text-lg">Admin Klinik</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          <Link 
            href="/admin" 
            className={`flex items-center px-4 py-3 rounded-lg ${pathname === '/admin' ? 'bg-sky-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}
          >
            <FileText className="w-5 h-5 mr-3" /> Beranda & Visi
          </Link>
          <Link 
            href="/admin/doctors" 
            className={`flex items-center px-4 py-3 rounded-lg ${pathname === '/admin/doctors' ? 'bg-sky-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}
          >
            <Users className="w-5 h-5 mr-3" /> Profil Dokter
          </Link>
          <Link 
            href="/admin/services" 
            className={`flex items-center px-4 py-3 rounded-lg ${pathname === '/admin/services' ? 'bg-sky-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}
          >
            <Settings className="w-5 h-5 mr-3" /> Layanan
          </Link>
          <Link 
            href="/admin/gallery" 
            className={`flex items-center px-4 py-3 rounded-lg ${pathname === '/admin/gallery' ? 'bg-sky-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}
          >
            <ImageIcon className="w-5 h-5 mr-3" /> Galeri
          </Link>
        </nav>
        
        {/* User Info & Logout */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center px-4 py-3 mb-2 text-slate-300 text-sm">
            <User className="w-4 h-4 mr-2 text-emerald-400" />
            <span className="truncate">{session?.user?.name || session?.user?.email || 'Loading...'}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 hover:bg-red-900/50 hover:text-red-300 rounded-lg text-slate-300 transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" /> Logout / Keluar
          </button>
        </div>
      </aside>

      {/* Main Content Area (offsetting sidebar) */}
      <div className="flex-1 ml-64 flex flex-col h-screen">
        {children}
      </div>
    </div>
  );
}
