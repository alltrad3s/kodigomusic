import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/hooks/useAuth';
import RootLayout from '@/layouts/RootLayout';
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import { Session } from '@/pages/Session';
import { ProtectedRoute } from '@/components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <RootLayout>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} />
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
