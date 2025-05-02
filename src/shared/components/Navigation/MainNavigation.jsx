import React from 'react';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './MainNavigation.css';

function MainNavigation() {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="main-navigation__title">
        <Link>PlaceBook</Link>
      </h1>
      <nav>...</nav>
    </MainHeader>
  );
}

export default MainNavigation;
