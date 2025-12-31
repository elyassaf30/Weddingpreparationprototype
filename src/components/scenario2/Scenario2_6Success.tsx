import React from 'react';
import { CheckCircle, Calendar, Users, DollarSign, FileText } from 'lucide-react';

export function Scenario2_6Success() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Scenario Label */}
        <div className="border-4 border-black bg-black text-white p-3 mb-6 text-center">
          תרחיש 2.6: סיום - האירוע מאושר לביצוע ✓ (EndSuccess)
        </div>

        {/* Success Message */}
        <div className="border-4 border-black bg-white p-8 mb-6">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-32 h-32 mb-6" />
            <h1 className="mb-4">✓ האירוע מאושר ומוכן לביצוע!</h1>
            <p className="text-gray-600 mb-2">
              כל הפרטים אושרו והתשלומים עודכנו במערכת.
            </p>
            <p className="text-gray-600">
              האירוע של יוסי ודנה כהן מוכן לביצוע.
            </p>
          </div>
        </div>

        {/* Event Summary Card */}
        <div className="border-4 border-black p-6 mb-6 bg-gray-100">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-black">
            <div className="w-16 h-16 border-2 border-black bg-black text-white flex items-center justify-center text-2xl">
              ✓
            </div>
            <div>
              <h2 className="mb-1">יוסי ודנה כהן</h2>
              <div className="text-sm text-gray-600">אירוע מאושר ופעיל</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border-2 border-black p-4 bg-white text-center">
              <Calendar className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm text-gray-600 mb-1">תאריך</div>
              <div>20.6.2025</div>
              <div className="text-sm">19:00</div>
            </div>

            <div className="border-2 border-black p-4 bg-white text-center">
              <Users className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm text-gray-600 mb-1">מוזמנים</div>
              <div className="text-2xl">200</div>
            </div>

            <div className="border-2 border-black p-4 bg-white text-center">
              <DollarSign className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm text-gray-600 mb-1">סה"כ</div>
              <div className="text-xl">₪50,000</div>
            </div>

            <div className="border-2 border-black p-4 bg-white text-center">
              <FileText className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm text-gray-600 mb-1">אסמכתא</div>
              <div className="text-sm">INV-2025-001234</div>
            </div>
          </div>
        </div>

        {/* Completion Checklist */}
        <div className="border-4 border-black p-6 mb-6">
          <h2 className="mb-6 pb-4 border-b-2 border-black">✓ שלבים שהושלמו</h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 border-2 border-black bg-gray-100">
              <CheckCircle className="w-6 h-6" />
              <div className="flex-1">בחירת אירוע מהרשימה</div>
              <div className="text-sm text-gray-600">✓</div>
            </div>

            <div className="flex items-center gap-3 p-4 border-2 border-black bg-gray-100">
              <CheckCircle className="w-6 h-6" />
              <div className="flex-1">בדיקת פרטי האירוע</div>
              <div className="text-sm text-gray-600">✓</div>
            </div>

            <div className="flex items-center gap-3 p-4 border-2 border-black bg-gray-100">
              <CheckCircle className="w-6 h-6" />
              <div className="flex-1">אישור פרטי האירוע</div>
              <div className="text-sm text-gray-600">✓</div>
            </div>

            <div className="flex items-center gap-3 p-4 border-2 border-black bg-gray-100">
              <CheckCircle className="w-6 h-6" />
              <div className="flex-1">בדיקת סטטוס תשלום מקדמה</div>
              <div className="text-sm text-gray-600">✓ שולם</div>
            </div>

            <div className="flex items-center gap-3 p-4 border-2 border-black bg-gray-100">
              <CheckCircle className="w-6 h-6" />
              <div className="flex-1">עדכון סטטוס וחשבונית</div>
              <div className="text-sm text-gray-600">✓</div>
            </div>
          </div>
        </div>

        {/* Payment Status */}
        <div className="border-4 border-black p-6 mb-6">
          <h2 className="mb-4 pb-4 border-b-2 border-black">סטטוס תשלומים</h2>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border-2 border-black bg-gray-100">
              <div>
                <div>מקדמה</div>
                <div className="text-sm text-gray-600">15.3.2025</div>
              </div>
              <div className="text-left">
                <div>₪15,000</div>
                <div className="text-sm">✓ שולם</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border-2 border-black bg-white">
              <div>
                <div>תשלום ביניים</div>
                <div className="text-sm text-gray-600">15.5.2025</div>
              </div>
              <div className="text-left">
                <div>₪20,000</div>
                <div className="text-sm text-gray-600">ממתין</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border-2 border-black bg-white">
              <div>
                <div>תשלום סופי</div>
                <div className="text-sm text-gray-600">10.6.2025</div>
              </div>
              <div className="text-left">
                <div>₪15,000</div>
                <div className="text-sm text-gray-600">ממתין</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="px-6 py-4 border-2 border-black hover:bg-black hover:text-white transition-all">
            חזור לרשימת אירועים
          </button>
          <button className="px-6 py-4 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all">
            צפה באירוע ביומן
          </button>
        </div>

        {/* Success Note */}
        <div className="mt-6 border-2 border-black p-4 bg-gray-100 text-center">
          <div className="mb-2">🎉 תהליך האישור הושלם בהצלחה!</div>
          <div className="text-sm text-gray-600">
            האירוע נוסף ליומן והלקוח יקבל אישור אוטומטי
          </div>
        </div>
      </div>
    </div>
  );
}