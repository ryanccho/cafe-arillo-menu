import { useEffect, useState } from 'react';
import Menu from './components/Menu';
import './styles/App.css';
import colorSplash from './assets/images/color_splash.jpg';
import colorStars from './assets/images/color_stars.png';
import kobeChaseCup from './assets/images/kobe_chase_cup.png';

const App = () => {
  // setup states

  // set effects
  useEffect(() => { console.log("Hello world") });

  return (
    <>
      <div className='background'>
        <img src={colorSplash} />
        <img src={colorStars} />
      </div>
      <Menu />
      <img className='kobe-chase-cup' src={kobeChaseCup} />
    </>
  );
}

export default App;
