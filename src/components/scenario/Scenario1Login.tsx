import React, { useState } from 'react';
import { Mail, Lock, AlertCircle } from 'lucide-react';

export function Scenario1Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'couple' | 'vendor'>('couple');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
      <div className="max-w-md w-full">
        {/* Scenario Label */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-2xl text-center shadow-lg">
          <div className="text-sm opacity-90 mb-1">תרחיש 1.1</div>
          <div className="font-semibold">כניסה למערכת (Start)</div>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-b-2xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">ברוכים הבאים 💍</h1>
            <p className="text-gray-600">היכנסו לחשבון שלכם</p>
          </div>

          {/* User Type Selection - Radio Buttons */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              סוג משתמש
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                userType === 'couple'
                  ? 'border-pink-500 bg-pink-50'
                  : 'border-gray-300 bg-white hover:border-pink-300'
              }`}>
                <input
                  type="radio"
                  name="userType"
                  value="couple"
                  checked={userType === 'couple'}
                  onChange={(e) => setUserType(e.target.value as 'couple')}
                  className="absolute right-3 top-3"
                />
                <div className="text-center">
                  <div className="text-2xl mb-1">💑</div>
                  <div className="font-medium text-gray-900">זוג</div>
                </div>
              </label>
              <label className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                userType === 'vendor'
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-300 bg-white hover:border-amber-300'
              }`}>
                <input
                  type="radio"
                  name="userType"
                  value="vendor"
                  checked={userType === 'vendor'}
                  onChange={(e) => setUserType(e.target.value as 'vendor')}
                  className="absolute right-3 top-3"
                />
                <div className="text-center">
                  <div className="text-2xl mb-1">🏢</div>
                  <div className="font-medium text-gray-900">ספק</div>
                </div>
              </label>
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              אימייל
            </label>
            <div className="relative">
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pr-10 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              סיסמה
            </label>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-10 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-700">זכור אותי</span>
            </label>
            <a href="#" className="text-sm text-pink-600 hover:text-pink-700 font-medium">
              שכחתי סיסמה
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
            כניסה
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">או</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-600">
              עדיין אין לכם חשבון?{' '}
              <a href="#" className="text-pink-600 hover:text-pink-700 font-semibold">
                הירשמו כעת
              </a>
            </p>
          </div>
        </div>

        {/* Helper Note */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-sm text-blue-800">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              לאחר הכניסה, המשתמש יועבר למסך הבית בו תוצג התראת חריגת תקציב
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}