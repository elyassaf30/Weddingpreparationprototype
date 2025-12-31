import React from 'react';
import { ArrowRight, DollarSign, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

export function Scenario2_4PaymentTab() {
  const payments = [
    { id: 1, name: 'מקדמה', amount: 15000, status: 'שולם', date: '15.3.2025' },
    { id: 2, name: 'תשלום ביניים', amount: 20000, status: 'ממתין', date: '15.5.2025' },
    { id: 3, name: 'תשלום סופי', amount: 15000, status: 'ממתין', date: '10.6.2025' },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Scenario Label */}
        <div className="border-4 border-black bg-black text-white p-3 mb-6 text-center">
          תרחיש 2.4: מעבר ללשונית כספים ותשלומים + בדיקה האם מקדמה שולמה? (Tab + Dec2)
        </div>

        {/* Header */}
        <div className="border-4 border-black p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <button className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all">
              <ArrowRight className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <h1 className="mb-1">כספים ותשלומים</h1>
              <p className="text-gray-600 text-sm">יוסי ודנה כהן - 20.6.2025</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 border-t-2 border-black pt-4">
            <button className="px-6 py-3 border-2 border-gray-400 bg-white hover:bg-gray-100">
              פרטי אירוע
            </button>
            <button className="px-6 py-3 border-2 border-black bg-black text-white">
              כספים ותשלומים
            </button>
            <button className="px-6 py-3 border-2 border-gray-400 bg-white hover:bg-gray-100">
              תיעוד
            </button>
          </div>
        </div>

        {/* Decision Section - Is Deposit Paid? */}
        <div className="border-4 border-black bg-gray-100 p-6 mb-6">
          <h2 className="mb-4 text-center">❓ בדיקה: האם סטטוס מקדמה = שולם?</h2>
          <div className="flex items-center justify-center gap-8">
            <div className="border-4 border-black bg-gray-100 p-6 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-2" />
              <div className="text-xl">✓ כן - שולם</div>
              <div className="text-sm text-gray-600 mt-2">ניתן להמשיך</div>
            </div>
            <div className="text-3xl">או</div>
            <div className="border-2 border-gray-400 bg-white p-6 text-center opacity-50">
              <AlertCircle className="w-12 h-12 mx-auto mb-2" />
              <div className="text-xl">✗ לא שולם</div>
              <div className="text-sm text-gray-600 mt-2">נדרשת תזכורת</div>
            </div>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="border-4 border-black p-6 bg-white text-center">
            <div className="text-gray-600 mb-2">סה"כ לתשלום</div>
            <div className="text-3xl">₪50,000</div>
          </div>
          <div className="border-4 border-black p-6 bg-gray-100 text-center">
            <div className="text-gray-600 mb-2">שולם</div>
            <div className="text-3xl">₪15,000</div>
          </div>
          <div className="border-4 border-black p-6 bg-gray-100 text-center">
            <div className="text-gray-600 mb-2">יתרה</div>
            <div className="text-3xl">₪35,000</div>
          </div>
        </div>

        {/* Payments Table */}
        <div className="border-4 border-black mb-6">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b-2 border-black bg-gray-200">
            <div className="col-span-3">סוג תשלום</div>
            <div className="col-span-3">סכום</div>
            <div className="col-span-3">תאריך יעד</div>
            <div className="col-span-3">סטטוס</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y-2 divide-gray-300">
            {payments.map((payment) => (
              <div key={payment.id} className={`grid grid-cols-12 gap-4 p-4 items-center ${
                payment.status === 'שולם' ? 'bg-gray-100' : 'bg-white'
              }`}>
                <div className="col-span-3 flex items-center gap-2">
                  {payment.name === 'מקדמה' && <DollarSign className="w-5 h-5" />}
                  {payment.name}
                </div>
                <div className="col-span-3">₪{payment.amount.toLocaleString()}</div>
                <div className="col-span-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {payment.date}
                </div>
                <div className="col-span-3">
                  {payment.status === 'שולם' ? (
                    <div className="border-2 border-black px-3 py-2 bg-gray-100 text-center flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      שולם ✓
                    </div>
                  ) : (
                    <div className="border-2 border-black px-3 py-2 bg-white text-center">
                      ממתין לתשלום
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Details - Deposit */}
        <div className="border-4 border-black p-6 bg-gray-100 mb-6">
          <h2 className="mb-4 pb-4 border-b-2 border-black flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            פרטי תשלום מקדמה
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-sm text-gray-600 mb-1">תאריך תשלום</div>
              <div>15.3.2025</div>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-sm text-gray-600 mb-1">אמצעי תשלום</div>
              <div>העברה בנקאית</div>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-sm text-gray-600 mb-1">סכום</div>
              <div className="text-xl">₪15,000</div>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <div className="text-sm text-gray-600 mb-1">מספר אסמכתא</div>
              <div>INV-2025-001234</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full px-6 py-4 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all">
          עדכן סטטוס תשלום →
        </button>

        {/* Helper Note */}
        <div className="mt-6 border-2 border-black p-4 bg-gray-50 text-sm text-center">
          ✓ המקדמה שולמה - ניתן לעדכן סטטוס ידני ולהמשיך
        </div>
      </div>
    </div>
  );
}