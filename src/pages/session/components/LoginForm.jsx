import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 bg-white bg-opacity-20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2 text-white">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 bg-white bg-opacity-20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      {error && <p className="text-red-300 text-sm">{error}</p>}
      <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-full font-bold hover:bg-orange-600 transition duration-300">
        Log In
      </button>
    </form>
  );
}
