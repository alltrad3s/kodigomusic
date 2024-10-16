import React from 'react';
import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAuth } from '@/hooks/useAuth';

const RootLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isSessionPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/session';

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 text-white">
      {!isSessionPage && user && (
        <aside className="w-64 bg-black bg-opacity-30 overflow-y-auto flex-shrink-0">
          <div className="p-6">
            <Link to="/" className="text-2xl font-bold text-white">Kodigo Music</Link>
            <nav className="mt-6">
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/search" className="text-gray-300 hover:text-white">Search</Link></li>
                <li><Link to="/library" className="text-gray-300 hover:text-white">Your Library</Link></li>
              </ul>
            </nav>
            <div className="mt-6">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <span className="text-2xl">+</span>
                <span>Create Playlist</span>
              </button>
            </div>
            <div className="mt-4">
              <Link to="/liked" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <span className="text-2xl">♥</span>
                <span>Liked Songs</span>
              </Link>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-gray-400">
              <li>Vibesss Only</li>
              <li>San Frandisco</li>
              <li>Happyyyy</li>
              <li>Soulful R&B Hits ♥</li>
              <li>Throwback 90s Bangers 🕺🔥</li>
            </ul>
          </div>
        </aside>
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        {!isSessionPage && user && (
          <header className="bg-black bg-opacity-30 p-4 flex justify-between items-center">
            <div className="flex space-x-4">
              <button className="bg-black bg-opacity-50 rounded-full p-1">&lt;</button>
              <button className="bg-black bg-opacity-50 rounded-full p-1">&gt;</button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-orange-500 text-white rounded-full px-4 py-2 font-bold hover:bg-orange-600">Upgrade</button>
              {user && (
                <div className="flex items-center space-x-2">
                  <span>{user.email}</span>
                  <button onClick={handleLogout} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </header>
        )}
        <main className="flex-1 overflow-y-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
