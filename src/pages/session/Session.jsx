import { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';

export default function Session() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <button
        className="mt-4 text-sm text-blue-500 hover:underline"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
      </button>
    </div>
  );
}
