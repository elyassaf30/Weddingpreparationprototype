import React, { useState } from 'react';
import { Heart, Mail, Lock, Calendar } from 'lucide-react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('התחברות:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-md border-4 border-black p-8">
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
              ♥
            </div>
          </div>
          <h1 className="mb-2">כניסה למערכת</h1>
          <p className="text-gray-600">תכנון חתונה</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-2">
              אימייל
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
              placeholder="example@email.com"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block mb-2">
              סיסמה
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-2 border-black"
              />
              <span>זכור אותי</span>
            </label>
            <a href="#" className="underline">
              שכחת סיסמה?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 border-2 border-black hover:bg-white hover:text-black transition-all"
          >
            כניסה
          </button>

          {/* Sign Up Link */}
          <div className="text-center pt-4 border-t-2 border-gray-300">
            <p>
              משתמש חדש?{' '}
              <a href="#" className="underline">
                הרשמה
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}