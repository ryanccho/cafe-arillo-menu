import { useEffect, useState } from 'react';
import Menu from './components/Menu';
import './styles/App.css';
import colorSplash from './assets/images/color_splash.jpg';
import colorStars from './assets/images/color_stars.png';
import kobeChaseCup from './assets/images/kobe_chase_cup.png';
import menuImage from './assets/images/menu_single_page_mobile.jpg';

const App = () => {
  // set effects
  useEffect(() => { console.log("Hello world") });

  return (<div>
    <img className='menu-image' src={menuImage}/>
  </div>);

  // return (
  //   <>
  //     <div className='background'>
  //       {/* <img src={colorSplash} className='color-splash' /> */}
  //       {/* <img src={colorStars} /> */}
  //     </div>
  //     <div className='page-content'>
  //       <h1>café arillo</h1>
  //       {/* <Menu /> */}
  //       <img className='kobe-chase-cup' src={kobeChaseCup} />
  //     </div>
  //   </>
  // );
}

export default App;
