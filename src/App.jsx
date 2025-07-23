import { useEffect, useState } from 'react';
import Menu from './components/Menu';
import './styles/App.css';

const App = () => {
  // setup states

  // set effects
  useEffect(() => { console.log("Hello world") });

  return (
    <div>
      <p>Menu</p>
      <Menu />
    </div>
  );
}

export default App;
