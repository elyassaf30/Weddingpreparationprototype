import React from 'react';
import { Calendar, DollarSign, Users, CheckSquare, CheckCircle } from 'lucide-react';

export function Scenario6HomeFixed() {
  const daysUntilWedding = 120;
  const tasksCompleted = 15;
  const totalTasks = 45;
  const budgetUsed = 80000;
  const totalBudget = 82000;
  const guestCount = 180;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Scenario Label */}
        <div className="border-4 border-black bg-black text-white p-3 mb-6 text-center">
          תרחיש 6: סיום - התקציב מאוזן ✓ (End)
        </div>

        {/* Success Message - Budget Balanced */}
        <div className="border-4 border-black bg-white p-6 mb-6">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-12 h-12 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="mb-2">✅ מצוין! התקציב מאוזן</h2>
              <p className="text-gray-600 mb-4">
                עדכנת בהצלחה את התקציב בקטגוריית "מוזיקה". כעת אין חריגות תקציביות.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="border-2 border-black px-4 py-2 bg-gray-100">
                  תקציב כולל: ₪{totalBudget.toLocaleString()}
                </div>
                <div className="border-2 border-black px-4 py-2 bg-gray-100">
                  הוצאות: ₪{budgetUsed.toLocaleString()}
                </div>
                <div className="border-2 border-black px-4 py-2 bg-gray-100">
                  יתרה: ₪{(totalBudget - budgetUsed).toLocaleString()}
                </div>
              </div>
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

          {/* Budget - NOW BALANCED */}
          <div className="border-4 border-black p-6 bg-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8" />
              <h2>תקציב</h2>
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="text-3xl mb-2">₪{budgetUsed.toLocaleString()}</div>
            <div className="w-full h-4 border-2 border-black bg-white mb-2">
              <div
                className="h-full bg-black"
                style={{ width: `${(budgetUsed / totalBudget) * 100}%` }}
              ></div>
            </div>
            <p className="text-gray-600">מתוך ₪{totalBudget.toLocaleString()}</p>
            <p className="mt-2 pt-2 border-t-2 border-black">
              יתרה: ₪{(totalBudget - budgetUsed).toLocaleString()}
            </p>
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

        {/* Recent Activity */}
        <div className="border-4 border-black p-6">
          <h2 className="mb-4 pb-4 border-b-2 border-black">פעילות אחרונה</h2>
          <div className="space-y-3">
            <div className="border-2 border-black p-4 bg-gray-100">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <div>עדכון תקציב בקטגוריית "מוזיקה"</div>
                  <div className="text-sm text-gray-600">התקציב המתוכנן עודכן ל-₪12,000 - לפני דקה</div>
                </div>
              </div>
            </div>
            <div className="border-2 border-black p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <div>10 מוזמנים חדשים אישרו הגעה</div>
                  <div className="text-sm text-gray-600">לפני 3 שעות</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}