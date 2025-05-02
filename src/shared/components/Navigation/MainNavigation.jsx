import React from 'react';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import './MainNavigation.css';
import NavLinks from './NavLinks';

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
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
}

export default MainNavigation;
