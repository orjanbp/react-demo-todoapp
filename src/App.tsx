import React from 'react';
import { AppRouting } from '@/components/AppRouting/AppRouting';
import { AppBackground } from '@/components/layout/AppBackground';
import { Header } from './components/shared/Header/Header';

function App() {
  return (
    <AppBackground>
      <Header />
      <AppRouting />
    </AppBackground >
  );
}

export default App;
