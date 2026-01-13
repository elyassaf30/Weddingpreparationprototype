import React, { useState } from 'react';
import { AlertTriangle, DollarSign, TrendingUp, X } from 'lucide-react';

export function Scenario2HomeWithAlert() {
  const [showAlert, setShowAlert] = useState(true);
  const totalBudget = 100000;
  const budgetUsed = 112000;
  const overspend = budgetUsed - totalBudget;

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Scenario Label */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-2xl text-center shadow-lg mb-6">
          <div className="text-sm opacity-90 mb-1">תרחיש 1.2</div>
          <div className="font-semibold">מסך בית + התראת חריגת תקציב (Alert)</div>
        </div>

        {/* Critical Budget Alert - Conditional Display */}
        {showAlert && (
          <div className="mb-6 animate-pulse">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl shadow-2xl overflow-hidden border-4 border-red-600">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">⚠️ אזהרה: חריגת תקציב!</h2>
                        <p className="text-red-100 text-lg">התקציב שלכם חרג מהמתוכנן</p>
                      </div>
                      <button
                        onClick={() => setShowAlert(false)}
                        className="p-2 hover:bg-white/20 rounded-lg transition-all"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 mb-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-sm opacity-90 mb-1">תקציב מתוכנן</div>
                          <div className="text-2xl font-bold">₪{totalBudget.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm opacity-90 mb-1">הוצאות בפועל</div>
                          <div className="text-2xl font-bold">₪{budgetUsed.toLocaleString()}</div>
                        </div>
                        <div className="bg-red-600/50 rounded-lg p-3">
                          <div className="text-sm opacity-90 mb-1">חריגה</div>
                          <div className="text-3xl font-bold">₪{overspend.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 px-6 py-3 bg-white text-red-600 rounded-xl font-semibold hover:bg-red-50 transition-all shadow-lg">
                        צפה בפירוט התקציב
                      </button>
                      <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 rounded-xl font-semibold hover:bg-white/30 transition-all">
                        פתור עכשיו
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Budget Overview Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800">תקציב מתוכנן</h3>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ₪{totalBudget.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500">תקציב ראשוני</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800">הוצאות בפועל</h3>
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">
              ₪{budgetUsed.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500">סה"כ שולם עד כה</p>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-2xl shadow-lg p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold">חריגה</h3>
            </div>
            <div className="text-3xl font-bold mb-2">
              ₪{overspend.toLocaleString()}
            </div>
            <p className="text-sm opacity-90">מעבר לתקציב</p>
          </div>
        </div>

        {/* Budget Categories - Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">קטגוריות תקציב</h2>
          <div className="space-y-3">
            {[
              { name: 'מוזיקה', planned: 10000, actual: 12000, status: 'over' },
              { name: 'אולם', planned: 50000, actual: 48000, status: 'ok' },
              { name: 'צילום', planned: 8000, actual: 8000, status: 'ok' },
            ].map((category, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 mb-1">{category.name}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      ₪{category.actual.toLocaleString()} / ₪{category.planned.toLocaleString()}
                    </span>
                    {category.status === 'over' && (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
                        חריגה
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-32">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        category.status === 'over' ? 'bg-red-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${Math.min((category.actual / category.planned) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Helper Note */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-sm text-blue-800">
          <div className="font-semibold mb-2">📊 הבא: צפייה בגרף תקציב מפורט</div>
          <div>לחצו על "צפה בפירוט התקציב" כדי לעבור למסך הבא</div>
        </div>
      </div>
    </div>
  );
}