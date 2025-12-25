import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface BudgetItem {
  id: number;
  category: string;
  planned: string;
  actual: string;
  notes: string;
}

export function BudgetManager() {
  const [totalBudget, setTotalBudget] = useState('');
  const [items, setItems] = useState<BudgetItem[]>([
    { id: 1, category: 'אולם', planned: '50000', actual: '48000', notes: 'הזמנה אושרה' },
    { id: 2, category: 'צלם', planned: '8000', actual: '', notes: '' },
    { id: 3, category: 'שמלה', planned: '12000', actual: '11500', notes: '' },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now(), category: '', planned: '', actual: '', notes: '' },
    ]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id: number, field: keyof BudgetItem, value: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const totalPlanned = items.reduce(
    (sum, item) => sum + (parseFloat(item.planned) || 0),
    0
  );
  const totalActual = items.reduce(
    (sum, item) => sum + (parseFloat(item.actual) || 0),
    0
  );

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="border-4 border-black p-6 mb-6">
          <h1 className="mb-4">ניהול תקציב החתונה</h1>
          
          <div className="flex items-center gap-4">
            <label htmlFor="totalBudget" className="whitespace-nowrap">
              תקציב כולל:
            </label>
            <input
              type="number"
              id="totalBudget"
              value={totalBudget}
              onChange={(e) => setTotalBudget(e.target.value)}
              className="px-4 py-2 border-2 border-black focus:outline-none focus:border-4 w-64"
              placeholder="0"
            />
            <span>₪</span>
          </div>
        </div>

        {/* Summary Box */}
        <div className="border-4 border-black p-6 mb-6 bg-gray-100">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-gray-600 mb-2">תקציב מתוכנן</div>
              <div className="text-2xl">{totalPlanned.toLocaleString()} ₪</div>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-gray-600 mb-2">הוצאות בפועל</div>
              <div className="text-2xl">{totalActual.toLocaleString()} ₪</div>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-gray-600 mb-2">יתרה</div>
              <div className="text-2xl">
                {(parseFloat(totalBudget) - totalActual || 0).toLocaleString()} ₪
              </div>
            </div>
          </div>
        </div>

        {/* Budget Table */}
        <div className="border-4 border-black">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b-2 border-black bg-gray-200">
            <div className="col-span-3">קטגוריה</div>
            <div className="col-span-2">מתוכנן (₪)</div>
            <div className="col-span-2">בפועל (₪)</div>
            <div className="col-span-4">הערות</div>
            <div className="col-span-1"></div>
          </div>

          {/* Table Rows */}
          <div className="divide-y-2 divide-gray-300">
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-4 p-4 items-center">
                <div className="col-span-3">
                  <input
                    type="text"
                    value={item.category}
                    onChange={(e) =>
                      updateItem(item.id, 'category', e.target.value)
                    }
                    className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:border-4"
                    placeholder="שם קטגוריה"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    value={item.planned}
                    onChange={(e) =>
                      updateItem(item.id, 'planned', e.target.value)
                    }
                    className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:border-4"
                    placeholder="0"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    value={item.actual}
                    onChange={(e) =>
                      updateItem(item.id, 'actual', e.target.value)
                    }
                    className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:border-4"
                    placeholder="0"
                  />
                </div>
                <div className="col-span-4">
                  <input
                    type="text"
                    value={item.notes}
                    onChange={(e) =>
                      updateItem(item.id, 'notes', e.target.value)
                    }
                    className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:border-4"
                    placeholder="הערות..."
                  />
                </div>
                <div className="col-span-1 flex justify-center">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Button */}
          <div className="p-4 border-t-2 border-black">
            <button
              onClick={addItem}
              className="flex items-center gap-2 px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-all"
            >
              <Plus className="w-5 h-5" />
              הוסף קטגוריה
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="border-4 border-black p-6 mt-6">
          <div className="mb-2 flex justify-between">
            <span>התקדמות תקציב</span>
            <span>
              {totalBudget
                ? `${((totalActual / parseFloat(totalBudget)) * 100).toFixed(1)}%`
                : '0%'}
            </span>
          </div>
          <div className="w-full h-8 border-2 border-black bg-white">
            <div
              className="h-full bg-black transition-all"
              style={{
                width: totalBudget
                  ? `${Math.min((totalActual / parseFloat(totalBudget)) * 100, 100)}%`
                  : '0%',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
