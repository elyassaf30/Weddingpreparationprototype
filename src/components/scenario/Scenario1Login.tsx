import React, { useState } from 'react';

export function Scenario1Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('התחברות:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        {/* Scenario Label */}
        <div className="border-4 border-black bg-black text-white p-3 mb-6 text-center">
          תרחיש 1: כניסה לאפליקציה (Login)
        </div>

        <div className="border-4 border-black p-8">
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
                placeholder="dani@example.com"
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 border-2 border-black hover:bg-white hover:text-black transition-all"
            >
              כניסה
            </button>
          </form>

          {/* Note */}
          <div className="mt-6 pt-6 border-t-2 border-gray-300 text-center text-sm text-gray-600">
            משתמש לדוגמה: דני ומיכל
          </div>
        </div>
      </div>
    </div>
  );
}
