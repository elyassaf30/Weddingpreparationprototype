import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { SignupScreen } from './components/SignupScreen';
import { BudgetManager } from './components/BudgetManager';
import { BudgetManagerAlt } from './components/BudgetManagerAlt';
import { CoupleHome } from './components/CoupleHome';
import { VendorHome } from './components/VendorHome';
import { Scenario1Login } from './components/scenario/Scenario1Login';
import { Scenario2HomeWithAlert } from './components/scenario/Scenario2HomeWithAlert';
import { Scenario3BudgetView } from './components/scenario/Scenario3BudgetView';
import { Scenario4EditBudget } from './components/scenario/Scenario4EditBudget';
import { Scenario5Error } from './components/scenario/Scenario5Error';
import { Scenario6HomeFixed } from './components/scenario/Scenario6HomeFixed';
import { Scenario2_1VendorSelect } from './components/scenario2/Scenario2_1VendorSelect';
import { Scenario2_2EventDetails } from './components/scenario2/Scenario2_2EventDetails';
import { Scenario2_3ApproveEvent } from './components/scenario2/Scenario2_3ApproveEvent';
import { Scenario2_4PaymentTab } from './components/scenario2/Scenario2_4PaymentTab';
import { Scenario2_5UpdateStatus } from './components/scenario2/Scenario2_5UpdateStatus';
import { Scenario2_6Success } from './components/scenario2/Scenario2_6Success';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<
    'login' | 'signup' | 'budget' | 'budgetAlt' | 'coupleHome' | 'vendorHome' |
    'scenario1' | 'scenario2' | 'scenario3' | 'scenario4' | 'scenario5' | 'scenario6' |
    'scenario2_1' | 'scenario2_2' | 'scenario2_3' | 'scenario2_4' | 'scenario2_5' | 'scenario2_6'
  >('login');

  return (
    <div className="min-h-screen bg-white flex" dir="rtl">
      {/* Main Content Area */}
      <div className="flex-1">
        {/* Render Current Screen */}
        {currentScreen === 'login' && <LoginForm />}
        {currentScreen === 'signup' && <SignupScreen />}
        {currentScreen === 'budget' && <BudgetManager />}
        {currentScreen === 'budgetAlt' && <BudgetManagerAlt />}
        {currentScreen === 'coupleHome' && <CoupleHome />}
        {currentScreen === 'vendorHome' && <VendorHome />}
        
        {/* Scenario Screens */}
        {currentScreen === 'scenario1' && <Scenario1Login />}
        {currentScreen === 'scenario2' && <Scenario2HomeWithAlert />}
        {currentScreen === 'scenario3' && <Scenario3BudgetView />}
        {currentScreen === 'scenario4' && <Scenario4EditBudget />}
        {currentScreen === 'scenario5' && <Scenario5Error />}
        {currentScreen === 'scenario6' && <Scenario6HomeFixed />}
        
        {/* Scenario 2 Screens */}
        {currentScreen === 'scenario2_1' && <Scenario2_1VendorSelect />}
        {currentScreen === 'scenario2_2' && <Scenario2_2EventDetails />}
        {currentScreen === 'scenario2_3' && <Scenario2_3ApproveEvent />}
        {currentScreen === 'scenario2_4' && <Scenario2_4PaymentTab />}
        {currentScreen === 'scenario2_5' && <Scenario2_5UpdateStatus />}
        {currentScreen === 'scenario2_6' && <Scenario2_6Success />}
      </div>

      {/* Side Navigation Menu */}
      <div className="w-64 border-l-4 border-black bg-gray-50 p-4 overflow-y-auto flex-shrink-0">
        <div className="mb-6">
          <h3 className="mb-3 pb-2 border-b-2 border-black">דוגמאות כלליות</h3>
          <div className="space-y-2">
            <button
              onClick={() => setCurrentScreen('login')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'login' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              מסך כניסה
            </button>
            <button
              onClick={() => setCurrentScreen('signup')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'signup' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              מסך הרשמה
            </button>
            <button
              onClick={() => setCurrentScreen('coupleHome')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'coupleHome' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              בית - זוג
            </button>
            <button
              onClick={() => setCurrentScreen('vendorHome')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'vendorHome' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              בית - ספק
            </button>
            <button
              onClick={() => setCurrentScreen('budget')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'budget' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              ניהול תקציב
            </button>
            <button
              onClick={() => setCurrentScreen('budgetAlt')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'budgetAlt' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              ניהול תקציב - אלט'
            </button>
          </div>
        </div>

        <div>
          <h3 className="mb-3 pb-2 border-b-2 border-black">תרחיש 1: ניהול חריגה</h3>
          <div className="space-y-2">
            <button
              onClick={() => setCurrentScreen('scenario1')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'scenario1' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              1.1: כניסה
            </button>
            <button
              onClick={() => setCurrentScreen('scenario2')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'scenario2' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              1.2: התראת חריגה
            </button>
            <button
              onClick={() => setCurrentScreen('scenario3')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'scenario3' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              1.3: צפייה בגרף
            </button>
            <button
              onClick={() => setCurrentScreen('scenario4')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'scenario4' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              1.4: עריכת תקציב
            </button>
            <button
              onClick={() => setCurrentScreen('scenario5')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'scenario5' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              1.5: שגיאה
            </button>
            <button
              onClick={() => setCurrentScreen('scenario6')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'scenario6' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              1.6: תקציב מאוזן
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-3 pb-2 border-b-2 border-black">תרחיש 2: אישור אירוע</h3>
          <div className="space-y-2">
            <button
              onClick={() => setCurrentScreen('scenario2_1')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'scenario2_1' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              2.1: בחירת אירוע
            </button>
            <button
              onClick={() => setCurrentScreen('scenario2_2')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'scenario2_2' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              2.2: בדיקת פרטים
            </button>
            <button
              onClick={() => setCurrentScreen('scenario2_3')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'scenario2_3' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              2.3: אישור אירוע
            </button>
            <button
              onClick={() => setCurrentScreen('scenario2_4')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'scenario2_4' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              2.4: כספים ותשלומים
            </button>
            <button
              onClick={() => setCurrentScreen('scenario2_5')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'scenario2_5' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              2.5: עדכון סטטוס
            </button>
            <button
              onClick={() => setCurrentScreen('scenario2_6')}
              className={`w-full px-3 py-2 border-2 border-black text-sm transition-all text-right ${
                currentScreen === 'scenario2_6' ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              2.6: אירוע מאושר
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}