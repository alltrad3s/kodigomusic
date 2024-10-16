import React, { useState } from 'react';
import { LoginForm } from './session/components/LoginForm';
import { RegisterForm } from './session/components/RegisterForm';

export function Session({ initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);

  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500">
      <div className="w-1/2 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Kodigo Music</h1>
          <div className="bg-white bg-opacity-10 p-10 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">
              {mode === 'login' ? 'Log in to Kodigo Music' : 'Sign up for Kodigo Music'}
            </h2>
            {mode === 'login' ? <LoginForm /> : <RegisterForm />}
            <div className="mt-6 text-center">
              <button
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="text-white hover:text-orange-300 underline"
              >
                {mode === 'login' ? 'Don\'t have an account? Sign up' : 'Already have an account? Log in'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img 
          src="https://picsum.photos/seed/music/1200/900" 
          alt="Music representation" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
