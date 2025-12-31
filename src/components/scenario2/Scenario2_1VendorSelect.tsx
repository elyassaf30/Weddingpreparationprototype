import React from 'react';
import { Calendar, User } from 'lucide-react';

export function Scenario2_1VendorSelect() {
  const events = [
    { 
      id: 1, 
      couple: 'יוסי ודנה כהן', 
      date: '20.6.2025', 
      guests: 200, 
      status: 'ממתין לאישור',
      time: '19:00'
    },
    { 
      id: 2, 
      couple: 'שרה ומשה לוי', 
      date: '15.8.2025', 
      guests: 150, 
      status: 'ממתין לאישור',
      time: '18:30'
    },
    { 
      id: 3, 
      couple: 'רונית ואורי אבני', 
      date: '10.9.2025', 
      guests: 180, 
      status: 'ממתין לאישור',
      time: '20:00'
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Scenario Label */}
        <div className="border-4 border-black bg-black text-white p-3 mb-6 text-center">
          תרחיש 2.1: כניסה למערכת כספק + בחירת אירוע מרשימה (Start + Select)
        </div>

        {/* Header */}
        <div className="border-4 border-black p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2">אירועים ממתינים לאישור</h1>
              <p className="text-gray-600">אולמי דיימונד - ספק אולמות</p>
            </div>
            <div className="border-2 border-black px-4 py-2 bg-gray-100">
              <div className="text-sm text-gray-600">סה"כ</div>
              <div className="text-2xl">{events.length}</div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="border-4 border-black bg-gray-100 p-4 mb-6">
          <p className="text-center">
            👇 בחר אירוע מהרשימה כדי לצפות בפרטים ולאשר
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="border-4 border-black p-6 bg-white hover:bg-gray-50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Event Number */}
                <div className="md:col-span-1">
                  <div className="w-12 h-12 border-2 border-black bg-black text-white flex items-center justify-center text-xl">
                    {event.id}
                  </div>
                </div>

                {/* Couple Names */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-5 h-5" />
                    <h3>{event.couple}</h3>
                  </div>
                  <div className="text-sm text-gray-600">בני הזוג</div>
                </div>

                {/* Date & Time */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-5 h-5" />
                    <div>{event.date}</div>
                  </div>
                  <div className="text-sm text-gray-600">שעה: {event.time}</div>
                </div>

                {/* Guests */}
                <div className="md:col-span-2">
                  <div className="text-2xl mb-1">{event.guests}</div>
                  <div className="text-sm text-gray-600">מוזמנים</div>
                </div>

                {/* Status */}
                <div className="md:col-span-2">
                  <div className="border-2 border-black px-3 py-2 bg-gray-100 text-center">
                    {event.status}
                  </div>
                </div>

                {/* Action Button */}
                <div className="md:col-span-2">
                  <button className="w-full px-4 py-3 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all">
                    בחר →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-6 border-2 border-black p-4 bg-gray-50 text-sm text-center">
          💡 לחץ על "בחר" כדי לעבור לבדיקת פרטי האירוע
        </div>
      </div>
    </div>
  );
}