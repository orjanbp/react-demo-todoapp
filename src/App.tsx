import React from 'react';
import logo from './logo.svg';
import { AppRouting } from '@/components/AppRouting/AppRouting';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppRouting />
      </header>
    </div>
  );
}

export default App;
