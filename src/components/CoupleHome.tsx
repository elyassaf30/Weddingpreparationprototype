import React from 'react';
import { Calendar, DollarSign, Users, CheckSquare, Clock, Bell } from 'lucide-react';

export function CoupleHome() {
  const daysUntilWedding = 120;
  const tasksCompleted = 15;
  const totalTasks = 45;
  const budgetUsed = 65000;
  const totalBudget = 100000;
  const guestCount = 180;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-4 border-black p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2">שלום, דני ומיכל! 👋</h1>
              <p className="text-gray-600">מוכנים להמשיך לתכנן את החתונה?</p>
            </div>
            <div className="text-left border-2 border-black p-4 bg-gray-100">
              <div className="text-gray-600 mb-1">ספירה לאחור</div>
              <div className="text-3xl">{daysUntilWedding} ימים</div>
              <div className="text-sm text-gray-600">15.4.2025</div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Tasks Progress */}
          <div className="border-4 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckSquare className="w-8 h-8" />
              <h2>משימות</h2>
            </div>
            <div className="text-3xl mb-2">{tasksCompleted}/{totalTasks}</div>
            <div className="w-full h-4 border-2 border-black bg-white mb-2">
              <div
                className="h-full bg-black"
                style={{ width: `${(tasksCompleted / totalTasks) * 100}%` }}
              ></div>
            </div>
            <p className="text-gray-600">{((tasksCompleted / totalTasks) * 100).toFixed(0)}% הושלם</p>
          </div>

          {/* Budget */}
          <div className="border-4 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8" />
              <h2>תקציב</h2>
            </div>
            <div className="text-3xl mb-2">₪{budgetUsed.toLocaleString()}</div>
            <div className="w-full h-4 border-2 border-black bg-white mb-2">
              <div
                className="h-full bg-black"
                style={{ width: `${(budgetUsed / totalBudget) * 100}%` }}
              ></div>
            </div>
            <p className="text-gray-600">מתוך ₪{totalBudget.toLocaleString()}</p>
          </div>

          {/* Guests */}
          <div className="border-4 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8" />
              <h2>מוזמנים</h2>
            </div>
            <div className="text-3xl mb-2">{guestCount}</div>
            <p className="text-gray-600">אנשים מוזמנים</p>
            <div className="mt-2 pt-2 border-t border-gray-300">
              <div className="text-sm">אישרו הגעה: 95</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border-4 border-black p-6 mb-6">
          <h2 className="mb-4 pb-4 border-b-2 border-black">פעולות מהירות</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-6 border-2 border-black hover:bg-black hover:text-white transition-all">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <div>לוח זמנים</div>
            </button>
            <button className="p-6 border-2 border-black hover:bg-black hover:text-white transition-all">
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <div>תקציב</div>
            </button>
            <button className="p-6 border-2 border-black hover:bg-black hover:text-white transition-all">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div>מוזמנים</div>
            </button>
            <button className="p-6 border-2 border-black hover:bg-black hover:text-white transition-all">
              <CheckSquare className="w-8 h-8 mx-auto mb-2" />
              <div>משימות</div>
            </button>
          </div>
        </div>

        {/* Upcoming Tasks & Reminders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Tasks */}
          <div className="border-4 border-black p-6">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b-2 border-black">
              <Clock className="w-6 h-6" />
              <h2>משימות קרובות</h2>
            </div>
            <div className="space-y-3">
              <div className="border-2 border-black p-4 flex items-center justify-between">
                <div>
                  <div>פגישה עם צלם</div>
                  <div className="text-sm text-gray-600">מחר, 15:00</div>
                </div>
                <input type="checkbox" className="w-5 h-5 border-2 border-black" />
              </div>
              <div className="border-2 border-black p-4 flex items-center justify-between">
                <div>
                  <div>הזמנת עוגה</div>
                  <div className="text-sm text-gray-600">בעוד 3 ימים</div>
                </div>
                <input type="checkbox" className="w-5 h-5 border-2 border-black" />
              </div>
              <div className="border-2 border-black p-4 flex items-center justify-between">
                <div>
                  <div>אישור תפריט עם קייטרינג</div>
                  <div className="text-sm text-gray-600">בעוד שבוע</div>
                </div>
                <input type="checkbox" className="w-5 h-5 border-2 border-black" />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="border-4 border-black p-6">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b-2 border-black">
              <Bell className="w-6 h-6" />
              <h2>התראות</h2>
            </div>
            <div className="space-y-3">
              <div className="border-2 border-black p-4">
                <div className="mb-1">הצעה חדשה מספק פרחים</div>
                <div className="text-sm text-gray-600">לפני שעה</div>
              </div>
              <div className="border-2 border-black p-4">
                <div className="mb-1">10 מוזמנים חדשים אישרו הגעה</div>
                <div className="text-sm text-gray-600">לפני 3 שעות</div>
              </div>
              <div className="border-2 border-black p-4">
                <div className="mb-1">תזכורת: תשלום ראשון לאולם</div>
                <div className="text-sm text-gray-600">אתמול</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
