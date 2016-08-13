import Header from './Header.js';
import {render} from 'react-dom';
import React from 'react';
import Logo from './Logo.js';
import NavigationList from './navigation/NavigationList';
import NavigationItem from './navigation/NavigationItem';

// import StickyHeader from './StickyHeader.js';
// import StickyOnScrollUpHeader from './StickyOnScrollUpHeader.js'

const header = (
  <Header>
    <Logo title="My Logo" link="http://testing.com" />
    <NavigationList>
      <NavigationItem link="#home" text="Home"/>
      <NavigationItem text="Team">
        <NavigationList>
          <NavigationItem link="#local" text="Local"/>
          <NavigationItem link="#" text="Remote"/>
          <NavigationItem link="#" text="Desktop"/>
          <NavigationItem link="#" text="Train"/>
        </NavigationList>
      </NavigationItem>
      <NavigationItem link="#contact" text="Contact"/>
      <NavigationItem link="#" text="About Us"/>
    </NavigationList>
    <input type="search" placeholder="Search..."/>
  </Header>
);

render(header, document.getElementById('header'));

