import React from 'react';
import { Calendar, DollarSign, Users, MessageSquare, TrendingUp, Star } from 'lucide-react';

export function VendorHome() {
  const pendingRequests = 8;
  const confirmedBookings = 12;
  const monthlyRevenue = 45000;
  const averageRating = 4.8;

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Bar with Gradient */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white p-8 mb-8 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl mb-3 text-white">לוח בקרה - ספק מקצועי ⭐</h1>
              <p className="text-xl opacity-95">שלום, אולמי דיימונד!</p>
              <p className="text-base opacity-80 mt-2">סוג עסק: אולמות אירועים</p>
            </div>
            <div className="flex items-center gap-5 bg-white/20 backdrop-blur-md rounded-2xl px-10 py-6 border-2 border-white/30">
              <Star className="w-16 h-16 text-yellow-300" />
              <div>
                <div className="text-6xl font-bold mb-1">{averageRating}</div>
                <div className="text-base opacity-90">דירוג ממוצע</div>
                <div className="text-sm opacity-75 mt-1">מתוך 5.0</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Statistics Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {/* Pending Requests Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all card-hover border border-gray-100">
            <div className="bg-gradient-to-r from-rose-500 to-rose-600 p-5">
              <div className="flex items-center gap-3 text-white">
                <MessageSquare className="w-7 h-7" />
                <h2 className="text-lg text-white">פניות</h2>
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="text-6xl font-bold text-gray-900 mb-3">{pendingRequests}</div>
              <p className="text-gray-600">ממתינות לתשובה</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-flex items-center gap-1 text-sm text-rose-600 font-medium">
                  <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
                  דורש תשומת לב
                </span>
              </div>
            </div>
          </div>

          {/* Confirmed Bookings Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all card-hover border border-gray-100">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-5">
              <div className="flex items-center gap-3 text-white">
                <Calendar className="w-7 h-7" />
                <h2 className="text-lg text-white">הזמנות</h2>
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="text-6xl font-bold text-gray-900 mb-3">{confirmedBookings}</div>
              <p className="text-gray-600">מאושרות החודש</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  <span>+20% מהחודש שעבר</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all card-hover border border-gray-100">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-5">
              <div className="flex items-center gap-3 text-white">
                <DollarSign className="w-7 h-7" />
                <h2 className="text-lg text-white">הכנסות</h2>
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="text-4xl font-bold text-gray-900 mb-3">₪{monthlyRevenue.toLocaleString()}</div>
              <p className="text-gray-600">החודש</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-emerald-600 font-medium">₪12,000 צפוי</span>
              </div>
            </div>
          </div>

          {/* Total Clients Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all card-hover border border-gray-100">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-5">
              <div className="flex items-center gap-3 text-white">
                <Users className="w-7 h-7" />
                <h2 className="text-lg text-white">לקוחות</h2>
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="text-6xl font-bold text-gray-900 mb-3">156</div>
              <p className="text-gray-600">סה"כ פעילים</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">89 לקוחות חוזרים</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">פעולות מהירות</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-4 gap-4">
              <button className="group p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-rose-400 hover:bg-rose-50 transition-all">
                <MessageSquare className="w-10 h-10 mx-auto mb-3 text-gray-600 group-hover:text-rose-500 transition-colors" />
                <div className="text-lg text-gray-700 group-hover:text-rose-600">פניות חדשות</div>
                <span className="mt-2 inline-block px-3 py-1 text-xs bg-rose-100 text-rose-700 rounded-full">8 חדשות</span>
              </button>
              <button className="group p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 transition-all">
                <Calendar className="w-10 h-10 mx-auto mb-3 text-gray-600 group-hover:text-blue-500 transition-colors" />
                <div className="text-lg text-gray-700 group-hover:text-blue-600">לוח שנה</div>
              </button>
              <button className="group p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-emerald-400 hover:bg-emerald-50 transition-all">
                <DollarSign className="w-10 h-10 mx-auto mb-3 text-gray-600 group-hover:text-emerald-500 transition-colors" />
                <div className="text-lg text-gray-700 group-hover:text-emerald-600">חשבוניות</div>
              </button>
              <button className="group p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-purple-400 hover:bg-purple-50 transition-all">
                <TrendingUp className="w-10 h-10 mx-auto mb-3 text-gray-600 group-hover:text-purple-500 transition-colors" />
                <div className="text-lg text-gray-700 group-hover:text-purple-600">דוחות</div>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Pending Requests List */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-rose-500 to-rose-600 p-5">
              <div className="flex items-center justify-between text-white">
                <h2 className="text-xl text-white">פניות חדשות</h2>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-lg font-bold border border-white/30">
                  {pendingRequests}
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-rose-50 to-white border-r-4 border-rose-400 p-6 rounded-lg hover:shadow-lg transition-all card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-semibold text-gray-800">יוסי ודנה כהן</div>
                    <span className="text-xs bg-rose-100 text-rose-700 px-3 py-1 rounded-full">חדש</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      תאריך: 20.6.2025
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      מוזמנים: 200 אנשים
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg hover:from-rose-600 hover:to-rose-700 transition-all font-medium">
                      אשר
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-rose-400 hover:bg-rose-50 transition-all">
                      פרטים
                    </button>
                  </div>
                </div>

                <div className="bg-white border-r-4 border-gray-300 p-6 rounded-lg hover:shadow-lg transition-all card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-semibold text-gray-800">שרה ומשה לוי</div>
                    <span className="text-xs text-gray-500">לפני 3 שעות</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      תאריך: 15.8.2025
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      מוזמנים: 150 אנשים
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg hover:from-rose-600 hover:to-rose-700 transition-all font-medium">
                      אשר
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-rose-400 hover:bg-rose-50 transition-all">
                      פרטים
                    </button>
                  </div>
                </div>

                <div className="bg-white border-r-4 border-gray-300 p-6 rounded-lg hover:shadow-lg transition-all card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-semibold text-gray-800">רונית ואורי אבני</div>
                    <span className="text-xs text-gray-500">אתמול</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      תאריך: 10.9.2025
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      מוזמנים: 180 אנשים
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg hover:from-rose-600 hover:to-rose-700 transition-all font-medium">
                      אשר
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-rose-400 hover:bg-rose-50 transition-all">
                      פרטים
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Calendar */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-5">
              <div className="flex items-center gap-3 text-white">
                <Calendar className="w-7 h-7" />
                <h2 className="text-xl text-white">אירועים קרובים</h2>
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-50 to-white border-r-4 border-blue-400 p-6 rounded-lg hover:shadow-lg transition-all card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-semibold text-gray-800">חתונת אלון ומיכל</div>
                    <span className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm font-medium">
                      מחר
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>⏰ שעה: 19:00</div>
                    <div>👥 מוזמנים: 220 אנשים</div>
                  </div>
                </div>

                <div className="bg-white border-r-4 border-gray-300 p-6 rounded-lg hover:shadow-lg transition-all card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-semibold text-gray-800">חתונת דוד ורחל</div>
                    <span className="text-sm text-gray-500">5.1.2025</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>⏰ שעה: 18:30</div>
                    <div>👥 מוזמנים: 180 אנשים</div>
                  </div>
                </div>

                <div className="bg-white border-r-4 border-gray-300 p-6 rounded-lg hover:shadow-lg transition-all card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-semibold text-gray-800">חתונת נועה ויונתן</div>
                    <span className="text-sm text-gray-500">12.1.2025</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>⏰ שעה: 19:30</div>
                    <div>👥 מוזמנים: 250 אנשים</div>
                  </div>
                </div>

                <div className="bg-white border-r-4 border-gray-300 p-6 rounded-lg hover:shadow-lg transition-all card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-semibold text-gray-800">חתונת תמר ואבי</div>
                    <span className="text-sm text-gray-500">20.1.2025</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>⏰ שעה: 18:00</div>
                    <div>👥 מוזמנים: 200 אנשים</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}