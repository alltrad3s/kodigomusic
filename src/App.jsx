import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/hooks/useAuth';
import RootLayout from '@/layouts/RootLayout';
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import { Session } from '@/pages/Session';

function App() {
  return (
    <AuthProvider>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/session" element={<Session />} />
          <Route path="/login" element={<Session mode="login" />} />
          <Route path="/register" element={<Session mode="register" />} />
          {/* Add any other routes you have created */}
        </Routes>
      </RootLayout>
    </AuthProvider>
  );
}

export default App;
