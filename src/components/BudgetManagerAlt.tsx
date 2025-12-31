import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface BudgetItem {
  id: number;
  category: string;
  budgeted: string;
  spent: string;
}

export function BudgetManagerAlt() {
  const [totalBudget, setTotalBudget] = useState('100000');
  const [items, setItems] = useState<BudgetItem[]>([
    { id: 1, category: 'אולם', budgeted: '50000', spent: '48000' },
    { id: 2, category: 'צילום', budgeted: '8000', spent: '0' },
    { id: 3, category: 'שמלה', budgeted: '12000', spent: '11500' },
    { id: 4, category: 'מוזיקה', budgeted: '10000', spent: '0' },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now(), category: '', budgeted: '', spent: '' },
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

  const totalBudgeted = items.reduce(
    (sum, item) => sum + (parseFloat(item.budgeted) || 0),
    0
  );
  const totalSpent = items.reduce(
    (sum, item) => sum + (parseFloat(item.spent) || 0),
    0
  );
  const remaining = parseFloat(totalBudget || '0') - totalSpent;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="border-4 border-black p-6 mb-6 bg-black text-white text-center">
          <h1>ניהול תקציב - גרסה חלופית</h1>
        </div>

        {/* Total Budget Input */}
        <div className="border-4 border-black p-6 mb-6">
          <div className="flex items-center gap-4">
            <label htmlFor="total" className="whitespace-nowrap">
              תקציב כולל (₪):
            </label>
            <input
              type="number"
              id="total"
              value={totalBudget}
              onChange={(e) => setTotalBudget(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-black focus:outline-none focus:border-4"
            />
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="border-4 border-black p-6 bg-white">
            <div className="text-sm text-gray-600 mb-2 text-center">תוקצב</div>
            <div className="text-center text-2xl">₪{totalBudgeted.toLocaleString()}</div>
          </div>
          <div className="border-4 border-black p-6 bg-gray-100">
            <div className="text-sm text-gray-600 mb-2 text-center">הוצאות</div>
            <div className="text-center text-2xl">₪{totalSpent.toLocaleString()}</div>
          </div>
          <div className="border-4 border-black p-6 bg-white">
            <div className="text-sm text-gray-600 mb-2 text-center">יתרה</div>
            <div className="text-center text-2xl">₪{remaining.toLocaleString()}</div>
          </div>
        </div>

        {/* Items List */}
        <div className="border-4 border-black mb-6">
          <div className="bg-gray-200 p-4 border-b-2 border-black">
            <h2>פירוט קטגוריות</h2>
          </div>
          
          <div className="divide-y-2 divide-black">
            {items.map((item, index) => {
              const budgeted = parseFloat(item.budgeted) || 0;
              const spent = parseFloat(item.spent) || 0;
              const itemRemaining = budgeted - spent;

              return (
                <div key={item.id} className="p-4 bg-white">
                  <div className="grid grid-cols-12 gap-4 items-center mb-3">
                    {/* Category */}
                    <div className="col-span-4">
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

                    {/* Budgeted */}
                    <div className="col-span-3">
                      <div className="text-xs text-gray-600 mb-1">תוקצב</div>
                      <input
                        type="number"
                        value={item.budgeted}
                        onChange={(e) =>
                          updateItem(item.id, 'budgeted', e.target.value)
                        }
                        className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:border-4"
                        placeholder="0"
                      />
                    </div>

                    {/* Spent */}
                    <div className="col-span-3">
                      <div className="text-xs text-gray-600 mb-1">הוצאות</div>
                      <input
                        type="number"
                        value={item.spent}
                        onChange={(e) =>
                          updateItem(item.id, 'spent', e.target.value)
                        }
                        className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:border-4"
                        placeholder="0"
                      />
                    </div>

                    {/* Remove Button */}
                    <div className="col-span-2 text-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="px-3 py-2 border-2 border-black hover:bg-black hover:text-white transition-all"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Item Summary */}
                  <div className="text-sm text-gray-600">
                    יתרה בקטגוריה: ₪{itemRemaining.toLocaleString()}
                    {itemRemaining < 0 && ' (חריגה)'}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add Button */}
          <div className="p-4 border-t-2 border-black bg-gray-50">
            <button
              onClick={addItem}
              className="flex items-center gap-2 px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-all"
            >
              <Plus className="w-5 h-5" />
              הוסף קטגוריה
            </button>
          </div>
        </div>

        {/* Progress Visualization */}
        <div className="border-4 border-black p-6">
          <div className="mb-4">
            <h2 className="mb-2">התקדמות תקציב</h2>
            <div className="text-sm text-gray-600">
              {totalBudget ? `${((totalSpent / parseFloat(totalBudget)) * 100).toFixed(1)}%` : '0%'} מהתקציב הכולל
            </div>
          </div>
          
          <div className="w-full h-12 border-4 border-black bg-white overflow-hidden">
            <div
              className="h-full bg-black transition-all"
              style={{
                width: totalBudget
                  ? `${Math.min((totalSpent / parseFloat(totalBudget)) * 100, 100)}%`
                  : '0%',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
