import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Scenario2_3ApproveEvent() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Scenario Label */}
        <div className="border-4 border-black bg-black text-white p-3 mb-6 text-center">
          תרחיש 2.3: לחיצה על 'אשר פרטי אירוע' (Approve)
        </div>

        {/* Header */}
        <div className="border-4 border-black p-6 mb-6">
          <div className="flex items-center gap-4">
            <button className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all">
              <ArrowRight className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <h1 className="mb-1">אישור פרטי אירוע</h1>
              <p className="text-gray-600 text-sm">יוסי ודנה כהן - 20.6.2025</p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="border-4 border-black bg-white p-8 mb-6">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-24 h-24 mb-4" />
            <h2 className="mb-4">✓ פרטי האירוע אושרו בהצלחה!</h2>
            <p className="text-gray-600 mb-6">
              האירוע של יוסי ודנה כהן אושר ונוסף ליומן שלך.
              כעת תוכל לעבור לניהול כספים ותשלומים.
            </p>
          </div>
        </div>

        {/* Event Summary */}
        <div className="border-4 border-black p-6 mb-6 bg-gray-50">
          <h2 className="mb-4 pb-4 border-b-2 border-black text-center">סיכום האירוע</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-black p-4 bg-white text-center">
              <div className="text-sm text-gray-600 mb-2">תאריך ושעה</div>
              <div>20.6.2025 | 19:00</div>
            </div>
            <div className="border-2 border-black p-4 bg-white text-center">
              <div className="text-sm text-gray-600 mb-2">מספר מוזמנים</div>
              <div>200 אנשים</div>
            </div>
            <div className="border-2 border-black p-4 bg-white text-center">
              <div className="text-sm text-gray-600 mb-2">עלות כוללת</div>
              <div className="text-xl">₪50,000</div>
            </div>
            <div className="border-2 border-black p-4 bg-white text-center">
              <div className="text-sm text-gray-600 mb-2">סטטוס</div>
              <div>✓ מאושר</div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="border-4 border-black p-6 mb-6">
          <h2 className="mb-4 pb-4 border-b-2 border-black">שלבים הבאים</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-black bg-black text-white flex items-center justify-center">
                1
              </div>
              <div>מעבר ללשונית כספים ותשלומים</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-black bg-white flex items-center justify-center">
                2
              </div>
              <div>בדיקת סטטוס תשלום מקדמה</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-black bg-white flex items-center justify-center">
                3
              </div>
              <div>עדכון סטטוסים וחשבוניות</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full px-6 py-4 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all">
          עבור לכספים ותשלומים →
        </button>

        {/* Helper Note */}
        <div className="mt-6 border-2 border-black p-4 bg-gray-50 text-sm text-center">
          השלב הבא: בדיקת סטטוס תשלום המקדמה
        </div>
      </div>
    </div>
  );
}