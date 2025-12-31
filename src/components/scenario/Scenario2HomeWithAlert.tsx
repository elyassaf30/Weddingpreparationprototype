import React from 'react';
import { Calendar, DollarSign, Users, CheckSquare, AlertTriangle } from 'lucide-react';

export function Scenario2HomeWithAlert() {
  const daysUntilWedding = 120;
  const tasksCompleted = 15;
  const totalTasks = 45;
  const budgetUsed = 78000;
  const totalBudget = 70000;
  const guestCount = 180;
  const budgetOverage = budgetUsed - totalBudget;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Scenario Label */}
        <div className="border-4 border-black bg-black text-white p-3 mb-6 text-center">
          תרחיש 2: התחלה - קבלת התראה על חריגה מתקציב (Start)
        </div>

        {/* Critical Alert - Budget Overage */}
        <div className="border-4 border-black bg-gray-900 text-white p-6 mb-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-12 h-12 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="mb-2 text-white">⚠️ התראה: חריגה מהתקציב!</h2>
              <p className="mb-4">התקציב שלכם חרג ב-₪{budgetOverage.toLocaleString()}</p>
              <button className="px-6 py-3 border-2 border-white bg-white text-black hover:bg-black hover:text-white hover:border-white transition-all">
                לחץ כאן לצפייה בפירוט →
              </button>
            </div>
          </div>
        </div>

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

          {/* Budget - OVER BUDGET */}
          <div className="border-4 border-black p-6 bg-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8" />
              <h2>תקציב</h2>
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="text-3xl mb-2">₪{budgetUsed.toLocaleString()}</div>
            <div className="w-full h-4 border-2 border-black bg-white mb-2">
              <div
                className="h-full bg-black"
                style={{ width: `${(budgetUsed / totalBudget) * 100}%` }}
              ></div>
            </div>
            <p className="text-gray-600">מתוך ₪{totalBudget.toLocaleString()}</p>
            <p className="mt-2 pt-2 border-t-2 border-black">חריגה: ₪{budgetOverage.toLocaleString()}</p>
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
        <div className="border-4 border-black p-6">
          <h2 className="mb-4 pb-4 border-b-2 border-black">פעולות מהירות</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-6 border-2 border-black hover:bg-black hover:text-white transition-all">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <div>לוח זמנים</div>
            </button>
            <button className="p-6 border-4 border-black bg-black text-white">
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <div>כספים ותקציב</div>
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
      </div>
    </div>
  );
}
