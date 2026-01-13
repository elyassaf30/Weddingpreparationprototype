import React, { useState } from 'react';
import { BarChart3, Filter, Download, ArrowUpDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

export function Scenario3BudgetView() {
  const [sortBy, setSortBy] = useState('category');
  const [filterStatus, setFilterStatus] = useState('all');

  const budgetData = [
    { category: 'אולם', planned: 50000, actual: 48000, status: 'ok' },
    { category: 'מוזיקה', planned: 10000, actual: 12000, status: 'over' },
    { category: 'צילום', planned: 8000, actual: 8000, status: 'ok' },
    { category: 'שמלה', planned: 12000, actual: 11500, status: 'ok' },
    { category: 'פרחים', planned: 6000, actual: 7500, status: 'over' },
    { category: 'קייטרינג', planned: 14000, actual: 15000, status: 'over' },
  ];

  const chartData = budgetData.map(item => ({
    name: item.category,
    'תקציב מתוכנן': item.planned,
    'הוצאות בפועל': item.actual,
  }));

  const filteredData = filterStatus === 'all' 
    ? budgetData 
    : budgetData.filter(item => item.status === filterStatus);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Scenario Label */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl text-center shadow-lg mb-6">
          <div className="text-sm opacity-90 mb-1">תרחיש 1.3</div>
          <div className="font-semibold">צפייה בגרף תקציב מפורט (View)</div>
        </div>

        {/* Header with Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">ניתוח תקציב מפורט 📊</h1>
              <p className="text-gray-600">השוואה בין תקציב מתוכנן להוצאות בפועל</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg">
              <Download className="w-5 h-5" />
              ייצא דוח
            </button>
          </div>

          {/* Filters and Sorting - Dropdown & Radio Buttons */}
          <div className="grid grid-cols-3 gap-4">
            {/* Filter by Status - Radio Buttons */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <Filter className="w-4 h-4 inline ml-1" />
                סינון לפי סטטוס
              </label>
              <div className="space-y-2">
                <label className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                  filterStatus === 'all' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'
                }`}>
                  <input
                    type="radio"
                    name="filter"
                    value="all"
                    checked={filterStatus === 'all'}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  />
                  <span className="font-medium">הכל ({budgetData.length})</span>
                </label>
                <label className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                  filterStatus === 'over' ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-red-300'
                }`}>
                  <input
                    type="radio"
                    name="filter"
                    value="over"
                    checked={filterStatus === 'over'}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  />
                  <span className="font-medium">חריגות ({budgetData.filter(i => i.status === 'over').length})</span>
                </label>
                <label className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                  filterStatus === 'ok' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300 hover:border-emerald-300'
                }`}>
                  <input
                    type="radio"
                    name="filter"
                    value="ok"
                    checked={filterStatus === 'ok'}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  />
                  <span className="font-medium">תקין ({budgetData.filter(i => i.status === 'ok').length})</span>
                </label>
              </div>
            </div>

            {/* Sort Options - Select/Dropdown */}
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-3">
                <ArrowUpDown className="w-4 h-4 inline ml-1" />
                מיון לפי
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all bg-white"
              >
                <option value="category">שם קטגוריה</option>
                <option value="planned">תקציב מתוכנן</option>
                <option value="actual">הוצאות בפועל</option>
                <option value="difference">גודל חריגה</option>
              </select>
            </div>

            {/* Summary Stats */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-4">
              <div className="text-sm opacity-90 mb-1">סה"כ חריגות</div>
              <div className="text-3xl font-bold mb-1">
                ₪{budgetData.filter(i => i.status === 'over').reduce((sum, i) => sum + (i.actual - i.planned), 0).toLocaleString()}
              </div>
              <div className="text-xs opacity-80">{budgetData.filter(i => i.status === 'over').length} קטגוריות</div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">גרף השוואה</h2>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '2px solid #e5e7eb', 
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                />
                <Legend />
                <Bar dataKey="תקציב מתוכנן" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="הוצאות בפועל" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => {
                    const item = budgetData.find(b => b.category === entry.name);
                    return <Cell key={`cell-${index}`} fill={item?.status === 'over' ? '#ef4444' : '#10b981'} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Table with Sorting */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">פירוט לפי קטגוריה</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="text-right p-4 font-semibold text-gray-700">קטגוריה</th>
                  <th className="text-right p-4 font-semibold text-gray-700">תקציב מתוכנן</th>
                  <th className="text-right p-4 font-semibold text-gray-700">הוצאות בפועל</th>
                  <th className="text-right p-4 font-semibold text-gray-700">הפרש</th>
                  <th className="text-right p-4 font-semibold text-gray-700">סטטוס</th>
                  <th className="text-center p-4 font-semibold text-gray-700">אחוזים</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => {
                  const diff = item.actual - item.planned;
                  const percentage = ((item.actual / item.planned) * 100).toFixed(0);
                  return (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-all">
                      <td className="p-4">
                        <div className="font-semibold text-gray-900">{item.category}</div>
                      </td>
                      <td className="p-4 text-gray-700">₪{item.planned.toLocaleString()}</td>
                      <td className="p-4">
                        <span className={item.status === 'over' ? 'text-red-600 font-semibold' : 'text-gray-700'}>
                          ₪{item.actual.toLocaleString()}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`font-semibold ${diff > 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                          {diff > 0 ? '+' : ''}₪{diff.toLocaleString()}
                        </span>
                      </td>
                      <td className="p-4">
                        {item.status === 'over' ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                            חריגה
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                            תקין
                          </span>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${item.status === 'over' ? 'bg-red-500' : 'bg-emerald-500'}`}
                              style={{ width: `${Math.min(parseInt(percentage), 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-700 w-12">{percentage}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Helper Note */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-sm text-blue-800">
          <div className="font-semibold mb-2">📝 הבא: עריכת תקציב קטגוריה</div>
          <div>זוהתה חריגה בקטגוריית "מוזיקה" - נעבור לעדכן את התקציב</div>
        </div>
      </div>
    </div>
  );
}
