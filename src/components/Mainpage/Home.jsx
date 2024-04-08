import React from 'react';
import FlashSaleCarousel from '../../pages/Flashcarousel/Flashcarousel';
import Categories from './Categories';
import './Home.css'; 

function Home() {
  return (
    <div className="ecommerce-home-page">
      <div className="row">
        <div className="left-side">
          <Categories/>
        </div>
        <div className="right-side">
          <FlashSaleCarousel/>
        </div>
      </div>
    </div>
  );
}

export default Home;
