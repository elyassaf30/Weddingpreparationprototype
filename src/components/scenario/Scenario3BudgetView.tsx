import React from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';

export function Scenario3BudgetView() {
  const categories = [
    { name: 'אולם', planned: 50000, actual: 48000, status: 'ok' },
    { name: 'צלם', planned: 8000, actual: 8500, status: 'ok' },
    { name: 'שמלה', planned: 12000, actual: 11500, status: 'ok' },
    { name: 'מוזיקה', planned: 0, actual: 12000, status: 'over' }, // החריגה הראשית
  ];

  const totalPlanned = categories.reduce((sum, cat) => sum + cat.planned, 0);
  const totalActual = categories.reduce((sum, cat) => sum + cat.actual, 0);
  const overage = totalActual - totalPlanned;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Scenario Label */}
        <div className="border-4 border-black bg-black text-white p-3 mb-6 text-center">
          תרחיש 3: לחיצה על 'כספים ותקציב' + צפייה בגרף וזיהוי קטגוריה חורגת (Menu + View)
        </div>

        {/* Header with Back Button */}
        <div className="border-4 border-black p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <button className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all">
              <ArrowRight className="w-6 h-6" />
            </button>
            <h1>ניהול תקציב החתונה</h1>
          </div>

          {/* Alert Banner */}
          <div className="border-4 border-black bg-gray-900 text-white p-4 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            <div>
              <div className="mb-1">חריגה מהתקציב המתוכנן!</div>
              <div className="text-sm">סה"כ חריגה: ₪{overage.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="border-4 border-black p-6 bg-white text-center">
            <div className="text-gray-600 mb-2">תקציב מתוכנן</div>
            <div className="text-3xl">₪{totalPlanned.toLocaleString()}</div>
          </div>
          <div className="border-4 border-black p-6 bg-gray-100 text-center">
            <div className="text-gray-600 mb-2">הוצאות בפועל</div>
            <div className="text-3xl">₪{totalActual.toLocaleString()}</div>
          </div>
          <div className="border-4 border-black p-6 bg-black text-white text-center">
            <div className="mb-2">חריגה</div>
            <div className="text-3xl">+₪{overage.toLocaleString()}</div>
          </div>
        </div>

        {/* Bar Chart Visualization */}
        <div className="border-4 border-black p-6 mb-6">
          <h2 className="mb-6 pb-4 border-b-2 border-black">גרף תקציב לפי קטגוריות</h2>
          
          <div className="space-y-6">
            {categories.map((cat, idx) => {
              const maxAmount = Math.max(...categories.map(c => Math.max(c.planned, c.actual)));
              const plannedWidth = (cat.planned / maxAmount) * 100;
              const actualWidth = (cat.actual / maxAmount) * 100;
              const isOver = cat.actual > cat.planned;

              return (
                <div key={idx} className={`border-2 border-black p-4 ${cat.status === 'over' ? 'bg-gray-900 text-white' : ''}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3>{cat.name}</h3>
                      {cat.status === 'over' && (
                        <div className="flex items-center gap-1">
                          <AlertTriangle className="w-5 h-5" />
                          <span className="text-sm">חריגה!</span>
                        </div>
                      )}
                    </div>
                    <div className="text-sm">
                      {cat.planned === 0 ? 'לא תוכנן' : `מתוכנן: ₪${cat.planned.toLocaleString()}`} | בפועל: ₪{cat.actual.toLocaleString()}
                    </div>
                  </div>

                  {/* Planned Bar */}
                  <div className="mb-2">
                    <div className="text-xs mb-1">מתוכנן:</div>
                    <div className="w-full h-6 border-2 border-black bg-white">
                      <div
                        className="h-full bg-gray-400"
                        style={{ width: `${plannedWidth}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Actual Bar */}
                  <div>
                    <div className="text-xs mb-1">בפועל:</div>
                    <div className="w-full h-6 border-2 border-black bg-white">
                      <div
                        className={`h-full ${isOver ? 'bg-black' : 'bg-gray-600'}`}
                        style={{ width: `${actualWidth}%` }}
                      ></div>
                    </div>
                  </div>

                  {cat.status === 'over' && (
                    <div className="mt-3 pt-3 border-t-2 border-white">
                      <button className="w-full px-4 py-2 border-2 border-white bg-white text-black hover:bg-black hover:text-white hover:border-white transition-all">
                        ערוך תקציב →
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <div className="border-4 border-black bg-gray-100 p-4 text-center text-sm">
          זוהתה חריגה בקטגוריית "מוזיקה" - לא תוכנן תקציב אך הוצאו ₪12,000
        </div>
      </div>
    </div>
  );
}
