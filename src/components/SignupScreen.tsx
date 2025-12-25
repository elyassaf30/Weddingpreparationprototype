import React, { useState } from 'react';
import { User, Users, Calendar } from 'lucide-react';

export function SignupScreen() {
  const [formData, setFormData] = useState({
    partner1: '',
    partner2: '',
    email: '',
    password: '',
    weddingDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('הרשמה:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-2xl border-4 border-black p-8">
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-black">
          <h1 className="mb-2">הרשמה למערכת</h1>
          <p className="text-gray-600">צרו את החשבון שלכם</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Partners Section */}
          <div className="border-2 border-black p-6">
            <h2 className="mb-4 pb-2 border-b border-gray-400">פרטי בני הזוג</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="partner1" className="block mb-2">
                  שם בן/בת זוג 1
                </label>
                <input
                  type="text"
                  id="partner1"
                  value={formData.partner1}
                  onChange={(e) => setFormData({ ...formData, partner1: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
                  placeholder="שם מלא"
                  required
                />
              </div>

              <div>
                <label htmlFor="partner2" className="block mb-2">
                  שם בן/בת זוג 2
                </label>
                <input
                  type="text"
                  id="partner2"
                  value={formData.partner2}
                  onChange={(e) => setFormData({ ...formData, partner2: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
                  placeholder="שם מלא"
                  required
                />
              </div>
            </div>
          </div>

          {/* Account Details Section */}
          <div className="border-2 border-black p-6">
            <h2 className="mb-4 pb-2 border-b border-gray-400">פרטי חשבון</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2">
                  אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2">
                  סיסמה
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label htmlFor="weddingDate" className="block mb-2">
                  תאריך החתונה (אופציונלי)
                </label>
                <input
                  type="date"
                  id="weddingDate"
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-4 border-2 border-black hover:bg-white hover:text-black transition-all"
          >
            צור חשבון
          </button>

          {/* Login Link */}
          <div className="text-center pt-4 border-t-2 border-gray-300">
            <p>
              כבר יש לך חשבון?{' '}
              <a href="#" className="underline">
                כניסה
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
