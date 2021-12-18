import React from 'react';

import './App.css';
import Routes from './Routes/index';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <Routes />
    </div>
  );
}

export default App;
