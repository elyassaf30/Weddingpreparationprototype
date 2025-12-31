import React, { useState } from 'react';
import { ArrowRight, Save, XCircle } from 'lucide-react';

export function Scenario5Error() {
  const [plannedAmount, setPlannedAmount] = useState('10000');
  const actualAmount = 12000;
  const showError = parseFloat(plannedAmount || '0') < actualAmount;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Scenario Label */}
        <div className="border-4 border-black bg-black text-white p-3 mb-6 text-center">
          תרחיש 5: הצגת שגיאה - סכום נמוך ממה שכבר שולם (Error)
        </div>

        {/* Header */}
        <div className="border-4 border-black p-6 mb-6">
          <div className="flex items-center gap-4">
            <button className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all">
              <ArrowRight className="w-6 h-6" />
            </button>
            <div>
              <h1 className="mb-1">עריכת תקציב - מוזיקה</h1>
              <p className="text-gray-600 text-sm">התאם את התקציב המתוכנן</p>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {showError && (
          <div className="border-4 border-black bg-black text-white p-6 mb-6">
            <div className="flex items-start gap-4">
              <XCircle className="w-12 h-12 flex-shrink-0" />
              <div>
                <h2 className="mb-2 text-white">❌ שגיאה: סכום לא תקין</h2>
                <p className="mb-4">
                  התקציב המתוכנן (₪{parseFloat(plannedAmount || '0').toLocaleString()}) נמוך מהסכום שכבר שולם (₪{actualAmount.toLocaleString()})
                </p>
                <p className="text-sm">
                  אנא הזן סכום גבוה יותר או שווה ל-₪{actualAmount.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Current Status */}
        <div className="border-4 border-black p-6 mb-6 bg-gray-100">
          <h2 className="mb-4 pb-4 border-b-2 border-black">מצב נוכחי</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-gray-600 mb-2">תקציב מתוכנן (נוכחי)</div>
              <div className="text-3xl">₪0</div>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-gray-600 mb-2">הוצאות בפועל</div>
              <div className="text-3xl">₪{actualAmount.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className={`border-4 ${showError ? 'border-black bg-gray-200' : 'border-black'} p-6 mb-6`}>
          <h2 className="mb-6 pb-4 border-b-2 border-black">עדכון תקציב מתוכנן</h2>

          <div className="space-y-6">
            {/* Amount Input with Error State */}
            <div>
              <label htmlFor="planned" className="block mb-3">
                סכום תקציב חדש (₪)
              </label>
              <input
                type="number"
                id="planned"
                value={plannedAmount}
                onChange={(e) => setPlannedAmount(e.target.value)}
                className={`w-full px-6 py-4 border-4 focus:outline-none text-2xl ${
                  showError ? 'border-black bg-gray-200' : 'border-black'
                }`}
                placeholder="0"
                min="0"
              />
              {showError && (
                <div className="mt-2 text-sm flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  סכום חייב להיות לפחות ₪{actualAmount.toLocaleString()}
                </div>
              )}
            </div>

            {/* Comparison */}
            <div className={`border-2 border-black p-4 ${showError ? 'bg-gray-200' : 'bg-gray-100'}`}>
              <div className="flex items-center justify-between mb-2">
                <span>תקציב חדש:</span>
                <span className="text-xl">
                  ₪{parseFloat(plannedAmount || '0').toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span>כבר שולם:</span>
                <span className="text-xl">₪{actualAmount.toLocaleString()}</span>
              </div>
              <div className="pt-2 border-t-2 border-black flex items-center justify-between">
                <span>יתרה:</span>
                <span className="text-xl">
                  ₪{(parseFloat(plannedAmount || '0') - actualAmount).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="px-6 py-4 border-2 border-black hover:bg-black hover:text-white transition-all">
            ביטול
          </button>
          <button 
            disabled={showError}
            className={`px-6 py-4 border-2 border-black flex items-center justify-center gap-2 ${
              showError 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-black text-white hover:bg-white hover:text-black transition-all'
            }`}
          >
            <Save className="w-5 h-5" />
            שמור שינויים
          </button>
        </div>

        {/* Helper Note */}
        <div className="mt-6 border-2 border-black p-4 bg-gray-100 text-sm">
          <div className="mb-2">🔄 דוגמה לתיקון:</div>
          <ul className="list-disc list-inside space-y-1">
            <li>הזן סכום של ₪12,000 או יותר כדי לאזן את התקציב</li>
            <li>לחלופין, בדוק אם ניתן להקטין את ההוצאות בפועל</li>
          </ul>
        </div>
      </div>
    </div>
  );
}