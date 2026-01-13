import React from 'react';
import { Calendar, DollarSign, Users, CheckSquare, Clock, Bell, TrendingUp } from 'lucide-react';

export function CoupleHome() {
  const daysUntilWedding = 120;
  const tasksCompleted = 15;
  const totalTasks = 45;
  const budgetUsed = 65000;
  const totalBudget = 100000;
  const guestCount = 180;
  const guestsConfirmed = 95;

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Bar with Gradient */}
        <div className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 mb-8 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl mb-3 text-white">לוח בקרה - תכנון חתונה 💕</h1>
              <p className="text-xl opacity-95">שלום, דני ומיכל!</p>
            </div>
            <div className="text-center bg-white/20 backdrop-blur-md rounded-2xl px-10 py-6 border-2 border-white/30">
              <div className="text-sm mb-2 opacity-90">ספירה לאחור</div>
              <div className="text-6xl font-bold mb-2">{daysUntilWedding}</div>
              <div className="text-lg opacity-90">ימים עד החתונה</div>
              <div className="text-sm opacity-75 mt-2">15.4.2025</div>
            </div>
          </div>
        </div>

        {/* Main Statistics Grid with Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Tasks Progress Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all card-hover border border-gray-100">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-5">
              <div className="flex items-center gap-3 text-white">
                <CheckSquare className="w-8 h-8" />
                <h2 className="text-xl text-white">משימות</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-gray-900 mb-4">
                {tasksCompleted}
                <span className="text-2xl text-gray-400 font-normal">/{totalTasks}</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full mb-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full progress-bar"
                  style={{ width: `${(tasksCompleted / totalTasks) * 100}%` }}
                ></div>
              </div>
              <p className="text-lg text-gray-600">
                {((tasksCompleted / totalTasks) * 100).toFixed(0)}% הושלם
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4" />
                  <span>+3 משימות השבוע</span>
                </div>
              </div>
            </div>
          </div>

          {/* Budget Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all card-hover border border-gray-100">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-5">
              <div className="flex items-center gap-3 text-white">
                <DollarSign className="w-8 h-8" />
                <h2 className="text-xl text-white">תקציב</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-gray-900 mb-4">
                ₪{budgetUsed.toLocaleString()}
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full mb-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full progress-bar"
                  style={{ width: `${(budgetUsed / totalBudget) * 100}%` }}
                ></div>
              </div>
              <p className="text-lg text-gray-600">מתוך ₪{totalBudget.toLocaleString()}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm text-gray-500">יתרה:</span>
                <span className="text-lg font-semibold text-emerald-600">
                  ₪{(totalBudget - budgetUsed).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Guests Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all card-hover border border-gray-100">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-5">
              <div className="flex items-center gap-3 text-white">
                <Users className="w-8 h-8" />
                <h2 className="text-xl text-white">מוזמנים</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-gray-900 mb-4">{guestCount}</div>
              <p className="text-lg text-gray-600 mb-4">אנשים מוזמנים</p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">אישרו הגעה:</span>
                  <span className="text-2xl font-bold text-purple-600">{guestsConfirmed}</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                    style={{ width: `${(guestsConfirmed / guestCount) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {((guestsConfirmed / guestCount) * 100).toFixed(0)}% אישרו
                </p>
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
              <button className="group p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-pink-400 hover:bg-pink-50 transition-all">
                <Calendar className="w-10 h-10 mx-auto mb-3 text-gray-600 group-hover:text-pink-500 transition-colors" />
                <div className="text-lg text-gray-700 group-hover:text-pink-600">לוח זמנים</div>
              </button>
              <button className="group p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-emerald-400 hover:bg-emerald-50 transition-all">
                <DollarSign className="w-10 h-10 mx-auto mb-3 text-gray-600 group-hover:text-emerald-500 transition-colors" />
                <div className="text-lg text-gray-700 group-hover:text-emerald-600">תקציב</div>
              </button>
              <button className="group p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-purple-400 hover:bg-purple-50 transition-all">
                <Users className="w-10 h-10 mx-auto mb-3 text-gray-600 group-hover:text-purple-500 transition-colors" />
                <div className="text-lg text-gray-700 group-hover:text-purple-600">מוזמנים</div>
              </button>
              <button className="group p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 transition-all">
                <CheckSquare className="w-10 h-10 mx-auto mb-3 text-gray-600 group-hover:text-blue-500 transition-colors" />
                <div className="text-lg text-gray-700 group-hover:text-blue-600">משימות</div>
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid - Tasks and Notifications */}
        <div className="grid grid-cols-2 gap-6">
          {/* Upcoming Tasks */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-5">
              <div className="flex items-center gap-3 text-white">
                <Clock className="w-7 h-7" />
                <h2 className="text-xl text-white">משימות קרובות</h2>
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-orange-50 to-white border-r-4 border-orange-400 p-5 rounded-lg hover:shadow-md transition-all card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-gray-800 mb-1">פגישה עם צלם</div>
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        מחר, 15:00
                      </div>
                    </div>
                    <input type="checkbox" className="w-6 h-6" />
                  </div>
                </div>
                <div className="bg-white border-r-4 border-gray-300 p-5 rounded-lg hover:shadow-md transition-all card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-gray-800 mb-1">הזמנת עוגה</div>
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        בעוד 3 ימים
                      </div>
                    </div>
                    <input type="checkbox" className="w-6 h-6" />
                  </div>
                </div>
                <div className="bg-white border-r-4 border-gray-300 p-5 rounded-lg hover:shadow-md transition-all card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-gray-800 mb-1">אישור תפריט עם קייטרינג</div>
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        בעוד שבוע
                      </div>
                    </div>
                    <input type="checkbox" className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-5">
              <div className="flex items-center gap-3 text-white">
                <Bell className="w-7 h-7" />
                <h2 className="text-xl text-white">התראות</h2>
              </div>
            </div>
            <div className="p-5">
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-pink-50 to-white border-r-4 border-pink-400 p-5 rounded-lg hover:shadow-md transition-all card-hover">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-gray-800 mb-2">הצעה חדשה מספק פרחים</div>
                      <div className="text-sm text-gray-500">לפני שעה</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-r-4 border-gray-300 p-5 rounded-lg hover:shadow-md transition-all card-hover">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-gray-800 mb-2">10 מוזמנים חדשים אישרו הגעה</div>
                      <div className="text-sm text-gray-500">לפני 3 שעות</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-r-4 border-gray-300 p-5 rounded-lg hover:shadow-md transition-all card-hover">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-gray-800 mb-2">תזכורת: תשלום ראשון לאולם</div>
                      <div className="text-sm text-gray-500">אתמול</div>
                    </div>
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