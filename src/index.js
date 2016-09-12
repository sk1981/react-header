// import Header from './header/Header.js';
import {render} from 'react-dom';
import React from 'react';
import Logo from './Logo.js';
import NavigationList from './navigation/NavigationList';
import NavigationItem from './navigation/NavigationItem';

// import StickyHeader from './header/StickyHeader.js';
import StickyOnScrollUpHeader from './header/StickyOnScrollUpHeader.js'

const header = (
  <StickyOnScrollUpHeader>
    <Logo title="My Logo" link="http://testing.com" />
    <NavigationList>
      <NavigationItem link="#home" text="Home"/>
      <NavigationItem text="Team">
        <NavigationList>
          <NavigationItem link="#local" text="Local"/>
          <NavigationItem link="#remote" text="Remote"/>
          <NavigationItem link="#desktop" text="Desktop"/>
          <NavigationItem link="#train" text="Train"/>
        </NavigationList>
      </NavigationItem>
      <NavigationItem link="#contact" text="Contact"/>
      <NavigationItem link="#" text="About Us"/>
    </NavigationList>
    <input type="search" placeholder="Search..."/>
  </StickyOnScrollUpHeader>
);

render(header, document.getElementById('header'));

