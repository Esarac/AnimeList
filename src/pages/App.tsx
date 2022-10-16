import React from 'react';
import routes from '../config/routes'
import Header from '../components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <Header/>
      </header>
      <main>
        {routes}
      </main>
    </div>
  );
}

export default App;
