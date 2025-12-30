import React, { useState } from 'react';
import { User, Users, Calendar } from 'lucide-react';

export function SignupScreen() {
  const [userType, setUserType] = useState<'couple' | 'vendor'>('couple');
  const [formData, setFormData] = useState({
    partner1: '',
    partner2: '',
    businessName: '',
    businessType: '',
    email: '',
    password: '',
    weddingDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('הרשמה:', { userType, ...formData });
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
          {/* User Type Selection */}
          <div className="border-4 border-black p-6 bg-gray-100">
            <h2 className="mb-4 pb-2 border-b-2 border-black">סוג משתמש</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setUserType('couple')}
                className={`p-6 border-4 transition-all ${
                  userType === 'couple'
                    ? 'border-black bg-black text-white'
                    : 'border-gray-400 bg-white hover:border-black'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <Users className="w-12 h-12" />
                  <span className="text-lg">חתן וכלה</span>
                  <span className="text-sm opacity-80">מתכננים חתונה</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setUserType('vendor')}
                className={`p-6 border-4 transition-all ${
                  userType === 'vendor'
                    ? 'border-black bg-black text-white'
                    : 'border-gray-400 bg-white hover:border-black'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <User className="w-12 h-12" />
                  <span className="text-lg">ספק</span>
                  <span className="text-sm opacity-80">נותן שירותים</span>
                </div>
              </button>
            </div>
          </div>

          {/* Conditional Forms Based on User Type */}
          {userType === 'couple' ? (
            <>
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
            </>
          ) : (
            <>
              {/* Vendor Section */}
              <div className="border-2 border-black p-6">
                <h2 className="mb-4 pb-2 border-b border-gray-400">פרטי עסק</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="businessName" className="block mb-2">
                      שם העסק
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
                      placeholder="שם העסק"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block mb-2">
                      סוג שירות
                    </label>
                    <select
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
                      required
                    >
                      <option value="">בחר סוג שירות</option>
                      <option value="venue">אולמות</option>
                      <option value="photography">צילום</option>
                      <option value="catering">קייטרינג</option>
                      <option value="music">מוזיקה/DJ</option>
                      <option value="flowers">עיצוב פרחים</option>
                      <option value="dress">שמלות כלה</option>
                      <option value="makeup">איפור ושיער</option>
                      <option value="other">אחר</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}

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

              {userType === 'couple' && (
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
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-4 border-2 border-black hover:bg-white hover:text-black transition-all"
          >
            {userType === 'couple' ? 'צור חשבון זוג' : 'צור חשבון ספק'}
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