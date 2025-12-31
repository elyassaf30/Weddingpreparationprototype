import React from 'react';
import { Calendar, DollarSign, Users, MessageSquare, TrendingUp, Star } from 'lucide-react';

export function VendorHome() {
  const pendingRequests = 8;
  const confirmedBookings = 12;
  const monthlyRevenue = 45000;
  const averageRating = 4.8;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-4 border-black p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2">שלום, אולמי דיימונד! 👋</h1>
              <p className="text-gray-600">סוג עסק: אולמות אירועים</p>
            </div>
            <div className="flex items-center gap-2 border-2 border-black p-4 bg-gray-100">
              <Star className="w-6 h-6" />
              <div>
                <div className="text-2xl">{averageRating}</div>
                <div className="text-sm text-gray-600">דירוג ממוצע</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Pending Requests */}
          <div className="border-4 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8" />
              <h2>פניות</h2>
            </div>
            <div className="text-4xl mb-2">{pendingRequests}</div>
            <p className="text-gray-600">ממתינות לתשובה</p>
          </div>

          {/* Confirmed Bookings */}
          <div className="border-4 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8" />
              <h2>הזמנות</h2>
            </div>
            <div className="text-4xl mb-2">{confirmedBookings}</div>
            <p className="text-gray-600">מאושרות החודש</p>
          </div>

          {/* Revenue */}
          <div className="border-4 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8" />
              <h2>הכנסות</h2>
            </div>
            <div className="text-4xl mb-2">₪{monthlyRevenue.toLocaleString()}</div>
            <p className="text-gray-600">החודש</p>
          </div>

          {/* Total Clients */}
          <div className="border-4 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8" />
              <h2>לקוחות</h2>
            </div>
            <div className="text-4xl mb-2">156</div>
            <p className="text-gray-600">סה"כ פעילים</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border-4 border-black p-6 mb-6">
          <h2 className="mb-4 pb-4 border-b-2 border-black">פעולות מהירות</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-6 border-2 border-black hover:bg-black hover:text-white transition-all">
              <MessageSquare className="w-8 h-8 mx-auto mb-2" />
              <div>פניות חדשות</div>
            </button>
            <button className="p-6 border-2 border-black hover:bg-black hover:text-white transition-all">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <div>לוח שנה</div>
            </button>
            <button className="p-6 border-2 border-black hover:bg-black hover:text-white transition-all">
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <div>חשבוניות</div>
            </button>
            <button className="p-6 border-2 border-black hover:bg-black hover:text-white transition-all">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div>דוחות</div>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pending Requests List */}
          <div className="border-4 border-black p-6">
            <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-black">
              <h2>פניות חדשות</h2>
              <span className="px-3 py-1 border-2 border-black bg-black text-white">
                {pendingRequests}
              </span>
            </div>
            <div className="space-y-3">
              <div className="border-2 border-black p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>יוסי ודנה כהן</div>
                  <div className="text-sm text-gray-600">לפני שעה</div>
                </div>
                <div className="text-sm text-gray-600 mb-3">תאריך: 20.6.2025 | 200 מוזמנים</div>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all">
                    אשר
                  </button>
                  <button className="flex-1 px-3 py-2 border-2 border-black hover:bg-black hover:text-white transition-all">
                    פרטים
                  </button>
                </div>
              </div>

              <div className="border-2 border-black p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>שרה ומשה לוי</div>
                  <div className="text-sm text-gray-600">לפני 3 שעות</div>
                </div>
                <div className="text-sm text-gray-600 mb-3">תאריך: 15.8.2025 | 150 מוזמנים</div>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all">
                    אשר
                  </button>
                  <button className="flex-1 px-3 py-2 border-2 border-black hover:bg-black hover:text-white transition-all">
                    פרטים
                  </button>
                </div>
              </div>

              <div className="border-2 border-black p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>רונית ואורי אבני</div>
                  <div className="text-sm text-gray-600">אתמול</div>
                </div>
                <div className="text-sm text-gray-600 mb-3">תאריך: 10.9.2025 | 180 מוזמנים</div>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all">
                    אשר
                  </button>
                  <button className="flex-1 px-3 py-2 border-2 border-black hover:bg-black hover:text-white transition-all">
                    פרטים
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Calendar */}
          <div className="border-4 border-black p-6">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b-2 border-black">
              <Calendar className="w-6 h-6" />
              <h2>אירועים קרובים</h2>
            </div>
            <div className="space-y-3">
              <div className="border-2 border-black p-4 bg-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <div>חתונת אלון ומיכל</div>
                  <div className="px-2 py-1 border-2 border-black bg-white text-xs">
                    מחר
                  </div>
                </div>
                <div className="text-sm text-gray-600">שעה: 19:00 | 220 מוזמנים</div>
              </div>

              <div className="border-2 border-black p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>חתונת דוד ורחל</div>
                  <div className="text-sm text-gray-600">5.1.2025</div>
                </div>
                <div className="text-sm text-gray-600">שעה: 18:30 | 180 מוזמנים</div>
              </div>

              <div className="border-2 border-black p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>חתונת נועה ויונתן</div>
                  <div className="text-sm text-gray-600">12.1.2025</div>
                </div>
                <div className="text-sm text-gray-600">שעה: 19:30 | 250 מוזמנים</div>
              </div>

              <div className="border-2 border-black p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>חתונת תמר ואבי</div>
                  <div className="text-sm text-gray-600">20.1.2025</div>
                </div>
                <div className="text-sm text-gray-600">שעה: 18:00 | 200 מוזמנים</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
