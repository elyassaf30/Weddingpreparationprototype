import React, { useState } from 'react';
import { Calendar, User, Search, Filter } from 'lucide-react';

export function Scenario2_1VendorSelect() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  const events = [
    { 
      id: 1, 
      couple: 'יוסי ודנה כהן', 
      date: '20.6.2025', 
      guests: 200, 
      status: 'ממתין לאישור',
      time: '19:00',
      priority: 'high'
    },
    { 
      id: 2, 
      couple: 'שרה ומשה לוי', 
      date: '15.8.2025', 
      guests: 150, 
      status: 'ממתין לאישור',
      time: '18:30',
      priority: 'medium'
    },
    { 
      id: 3, 
      couple: 'רונית ואורי אבני', 
      date: '10.9.2025', 
      guests: 180, 
      status: 'ממתין לאישור',
      time: '20:00',
      priority: 'medium'
    },
  ];

  const filteredEvents = events.filter(event => 
    event.couple.includes(searchTerm) &&
    (statusFilter === 'all' || event.status === statusFilter)
  );

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Scenario Label */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-2xl text-center shadow-lg mb-6">
          <div className="text-sm opacity-90 mb-1">תרחיש 2.1</div>
          <div className="font-semibold">כניסה למערכת כספק + בחירת אירוע (Start + Select)</div>
        </div>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">אירועים ממתינים לאישור 📋</h1>
              <p className="text-gray-600">אולמי דיימונד - ספק אולמות</p>
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-lg">
              <div className="text-sm opacity-90 mb-1">סה"כ</div>
              <div className="text-5xl font-bold">{events.length}</div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="grid grid-cols-2 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all"
                placeholder="חיפוש לפי שם זוג..."
              />
            </div>

            {/* Status Filter - Dropdown/Select */}
            <div className="relative">
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pr-10 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all bg-white appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'left 12px center'
                }}
              >
                <option value="all">כל הסטטוסים</option>
                <option value="ממתין לאישור">ממתין לאישור</option>
                <option value="מאושר">מאושר</option>
                <option value="נדחה">נדחה</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-3 mb-6 text-center">
          <span className="text-blue-800 font-medium">
            מציג {filteredEvents.length} מתוך {events.length} אירועים
          </span>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all card-hover">
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Event Number with Priority Indicator */}
                <div className="col-span-1">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold text-white ${
                    event.priority === 'high' 
                      ? 'bg-gradient-to-br from-red-500 to-orange-500' 
                      : 'bg-gradient-to-br from-blue-500 to-purple-500'
                  }`}>
                    {event.id}
                  </div>
                </div>

                {/* Couple Names */}
                <div className="col-span-3">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-5 h-5 text-gray-600" />
                    <h3 className="font-bold text-gray-900 text-lg">{event.couple}</h3>
                  </div>
                  <div className="text-sm text-gray-500">בני הזוג</div>
                </div>

                {/* Date & Time */}
                <div className="col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <div className="font-semibold text-gray-900">{event.date}</div>
                  </div>
                  <div className="text-sm text-gray-600">שעה: {event.time}</div>
                </div>

                {/* Guests */}
                <div className="col-span-2 text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-1">{event.guests}</div>
                  <div className="text-sm text-gray-600">מוזמנים</div>
                </div>

                {/* Status Badge */}
                <div className="col-span-2">
                  <div className="inline-flex items-center px-4 py-2 rounded-xl bg-amber-100 border-2 border-amber-300 text-amber-800 font-medium">
                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse ml-2"></span>
                    {event.status}
                  </div>
                </div>

                {/* Action Button */}
                <div className="col-span-2">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                    בחר →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no results) */}
        {filteredEvents.length === 0 && (
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-12 text-center">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">לא נמצאו תוצאות</h3>
            <p className="text-gray-500">נסה לשנות את הפילטרים או את מונח החיפוש</p>
          </div>
        )}

        {/* Helper Note */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-sm text-blue-800">
          <div className="font-semibold mb-2">💡 טיפ: השתמש בחיפוש ובפילטרים</div>
          <div>לחץ על "בחר" כדי לעבור לבדיקת פרטי האירוע המלאים</div>
        </div>
      </div>
    </div>
  );
}