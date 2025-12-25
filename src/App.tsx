import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { SignupScreen } from './components/SignupScreen';
import { BudgetManager } from './components/BudgetManager';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'signup' | 'budget'>('login');

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Screen Selector - for demo purposes */}
      <div className="fixed top-4 left-4 flex gap-2 z-50">
        <button
          onClick={() => setCurrentScreen('login')}
          className="px-4 py-2 border-2 border-black bg-white hover:bg-gray-100"
        >
          מסך כניסה
        </button>
        <button
          onClick={() => setCurrentScreen('signup')}
          className="px-4 py-2 border-2 border-black bg-white hover:bg-gray-100"
        >
          מסך הרשמה
        </button>
        <button
          onClick={() => setCurrentScreen('budget')}
          className="px-4 py-2 border-2 border-black bg-white hover:bg-gray-100"
        >
          ניהול תקציב
        </button>
      </div>

      {/* Render Current Screen */}
      {currentScreen === 'login' && <LoginForm />}
      {currentScreen === 'signup' && <SignupScreen />}
      {currentScreen === 'budget' && <BudgetManager />}
    </div>
  );
}