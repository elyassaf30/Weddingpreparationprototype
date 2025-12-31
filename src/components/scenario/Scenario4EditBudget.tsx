import React, { useState } from 'react';
import { ArrowRight, Save } from 'lucide-react';

export function Scenario4EditBudget() {
  const [plannedAmount, setPlannedAmount] = useState('12000');
  const actualAmount = 12000;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Scenario Label */}
        <div className="border-4 border-black bg-black text-white p-3 mb-6 text-center">
          תרחיש 4: עריכת סכום התקציב (Edit)
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
        <div className="border-4 border-black p-6 mb-6">
          <h2 className="mb-6 pb-4 border-b-2 border-black">עדכון תקציב מתוכנן</h2>

          <div className="space-y-6">
            {/* Amount Input */}
            <div>
              <label htmlFor="planned" className="block mb-3">
                סכום תקציב חדש (₪)
              </label>
              <input
                type="number"
                id="planned"
                value={plannedAmount}
                onChange={(e) => setPlannedAmount(e.target.value)}
                className="w-full px-6 py-4 border-4 border-black focus:outline-none text-2xl"
                placeholder="0"
                min="0"
              />
              <div className="mt-2 text-sm text-gray-600">
                הזן את הסכום שאתה מוכן להקצות לקטגוריה זו
              </div>
            </div>

            {/* Comparison */}
            <div className="border-2 border-black p-4 bg-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span>תקציב חדש:</span>
                <span className="text-xl">₪{parseFloat(plannedAmount || '0').toLocaleString()}</span>
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

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block mb-3">
                הערות (אופציונלי)
              </label>
              <textarea
                id="notes"
                rows={4}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
                placeholder="הוסף הערות לגבי השינוי בתקציב..."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="px-6 py-4 border-2 border-black hover:bg-black hover:text-white transition-all">
            ביטול
          </button>
          <button className="px-6 py-4 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
            <Save className="w-5 h-5" />
            שמור שינויים
          </button>
        </div>

        {/* Helper Note */}
        <div className="mt-6 border-2 border-black p-4 bg-gray-50 text-sm text-center">
          💡 טיפ: וודא שהתקציב החדש מכסה את ההוצאות שכבר שולמו
        </div>
      </div>
    </div>
  );
}