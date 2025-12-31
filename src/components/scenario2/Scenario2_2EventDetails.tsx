import React from 'react';
import { ArrowRight, Calendar, Users, MapPin, DollarSign, Clock, Phone, Mail } from 'lucide-react';

export function Scenario2_2EventDetails() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Scenario Label */}
        <div className="border-4 border-black bg-black text-white p-3 mb-6 text-center">
          תרחיש 2.2: בדיקה - האם פרטי האירוע נכונים? (Dec1)
        </div>

        {/* Header */}
        <div className="border-4 border-black p-6 mb-6">
          <div className="flex items-center gap-4">
            <button className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all">
              <ArrowRight className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <h1 className="mb-1">פרטי אירוע - יוסי ודנה כהן</h1>
              <p className="text-gray-600 text-sm">אנא בדוק את כל הפרטים בקפידה</p>
            </div>
            <div className="border-2 border-black px-4 py-2 bg-gray-100">
              ממתין לאישור
            </div>
          </div>
        </div>

        {/* Question/Decision Section */}
        <div className="border-4 border-black bg-gray-100 p-6 mb-6">
          <h2 className="mb-4 text-center">❓ האם כל הפרטים נכונים ומדויקים?</h2>
          <p className="text-center text-sm text-gray-600">
            בדוק תאריך, שעה, מספר מוזמנים, ופרטי התקשרות לפני אישור
          </p>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Basic Details */}
          <div className="border-4 border-black p-6">
            <h2 className="mb-4 pb-4 border-b-2 border-black">פרטי האירוע</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">תאריך</div>
                  <div className="text-xl">20.6.2025 (יום שישי)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">שעת התחלה</div>
                  <div className="text-xl">19:00</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">מספר מוזמנים</div>
                  <div className="text-xl">200 אנשים</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">מיקום</div>
                  <div>אולם דיימונד - אולם ראשי</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Financial Details */}
          <div className="border-4 border-black p-6">
            <h2 className="mb-4 pb-4 border-b-2 border-black">פרטי התקשרות וכספים</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">טלפון</div>
                  <div>050-1234567</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">אימייל</div>
                  <div>yossi.cohen@example.com</div>
                </div>
              </div>

              <div className="border-t-2 border-gray-300 pt-4 mt-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">עלות כוללת</div>
                    <div className="text-2xl">₪50,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="border-4 border-black p-6 mb-6">
          <h2 className="mb-4 pb-4 border-b-2 border-black">הערות מיוחדות</h2>
          <div className="bg-gray-50 p-4 border-2 border-gray-300">
            <p>הזוג ביקש הגדלת במה לריקודים וסידור מיוחד של שולחנות בצורת U.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="px-6 py-4 border-2 border-black hover:bg-black hover:text-white transition-all">
            ❌ דווח על טעות לזוג
          </button>
          <button className="px-6 py-4 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all">
            ✓ הפרטים נכונים - המשך
          </button>
        </div>

        {/* Helper Note */}
        <div className="mt-6 border-2 border-black p-4 bg-gray-50 text-sm text-center">
          אם הפרטים נכונים, לחץ "הפרטים נכונים - המשך" כדי לאשר את האירוע
        </div>
      </div>
    </div>
  );
}