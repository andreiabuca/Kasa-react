import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AppRouter from './AppRouter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRouter/>
      <Footer/>
    </div>
  );
}


export default App;
