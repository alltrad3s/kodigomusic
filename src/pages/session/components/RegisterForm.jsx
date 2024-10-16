import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';
import ReCAPTCHA from "react-google-recaptcha";

export function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const recaptchaRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setError("Please complete the reCAPTCHA");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-white">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full px-3 py-2 bg-white bg-opacity-20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6Le5ymIqAAAAAKG-pMOEyjWx797qOAMsdrrDoaxe"
      />
      {error && <p className="text-red-300 text-sm">{error}</p>}
      <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-full font-bold hover:bg-orange-600 transition duration-300">
        Sign Up
      </button>
    </form>
  );
}
