import React, { useState } from 'react';
import { ArrowRight, Save, FileText, CheckCircle } from 'lucide-react';

export function Scenario2_5UpdateStatus() {
  const [status, setStatus] = useState('התקבל');
  const [invoiceNumber, setInvoiceNumber] = useState('INV-2025-001234');
  const [notes, setNotes] = useState('');

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Scenario Label */}
        <div className="border-4 border-black bg-black text-white p-3 mb-6 text-center">
          תרחיש 2.5: עדכון סטטוס ידני - התקבל / חשבונית (Update)
        </div>

        {/* Header */}
        <div className="border-4 border-black p-6 mb-6">
          <div className="flex items-center gap-4">
            <button className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all">
              <ArrowRight className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <h1 className="mb-1">עדכון סטטוס תשלום מקדמה</h1>
              <p className="text-gray-600 text-sm">יוסי ודנה כהן - 20.6.2025</p>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="border-4 border-black p-6 mb-6 bg-gray-100">
          <h2 className="mb-4 pb-4 border-b-2 border-black">פרטי התשלום</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-sm text-gray-600 mb-1">סוג תשלום</div>
              <div>מקדמה</div>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-sm text-gray-600 mb-1">סכום</div>
              <div className="text-xl">₪15,000</div>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-sm text-gray-600 mb-1">תאריך תשלום</div>
              <div>15.3.2025</div>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-sm text-gray-600 mb-1">אמצעי תשלום</div>
              <div>העברה בנקאית</div>
            </div>
          </div>
        </div>

        {/* Update Form */}
        <div className="border-4 border-black p-6 mb-6">
          <h2 className="mb-6 pb-4 border-b-2 border-black">עדכן סטטוס</h2>

          <div className="space-y-6">
            {/* Status Selection */}
            <div>
              <label className="block mb-3">
                סטטוס תשלום
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setStatus('התקבל')}
                  className={`p-6 border-4 transition-all ${
                    status === 'התקבל'
                      ? 'border-black bg-black text-white'
                      : 'border-gray-400 bg-white hover:border-black'
                  }`}
                >
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg">התקבל</div>
                  <div className="text-sm opacity-80 mt-1">הכסף התקבל לחשבון</div>
                </button>

                <button
                  type="button"
                  onClick={() => setStatus('חשבונית')}
                  className={`p-6 border-4 transition-all ${
                    status === 'חשבונית'
                      ? 'border-black bg-black text-white'
                      : 'border-gray-400 bg-white hover:border-black'
                  }`}
                >
                  <FileText className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg">חשבונית</div>
                  <div className="text-sm opacity-80 mt-1">צריך להנפיק חשבונית</div>
                </button>
              </div>
            </div>

            {/* Invoice Number */}
            <div>
              <label htmlFor="invoice" className="block mb-3">
                מספר אסמכתא / חשבונית
              </label>
              <input
                type="text"
                id="invoice"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
                placeholder="INV-2025-XXXXX"
              />
            </div>

            {/* Confirmation Checkbox */}
            <div className="border-2 border-black p-4 bg-gray-100">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 mt-1 border-2 border-black"
                  defaultChecked
                />
                <div>
                  <div className="mb-1">אני מאשר שהפרטים נכונים</div>
                  <div className="text-sm text-gray-600">
                    התשלום התקבל לחשבון העסק ונרשם במערכת הנהלת החשבונות
                  </div>
                </div>
              </label>
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block mb-3">
                הערות נוספות (אופציונלי)
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
                placeholder="הוסף הערות על התשלום..."
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
            שמור עדכון
          </button>
        </div>

        {/* Helper Note */}
        <div className="mt-6 border-2 border-black p-4 bg-gray-50 text-sm text-center">
          💡 לאחר השמירה, האירוע יסומן כמאושר לביצוע
        </div>
      </div>
    </div>
  );
}