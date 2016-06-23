import Header from './Header.js';
import StickyHeader from './StickyHeader.js';
import StickyOnScrollUpHeader from './StickyOnScrollUpHeader.js'
import {render} from 'react-dom';
import React from 'react';
import Logo from './Logo.js';
import NavigationBar from './NavigationBar.js';
import NavigationItem from './NavigationItem.js';

const header = (
  <StickyOnScrollUpHeader>
    <Logo title="My Logo" link="http://testing.com"></Logo>
    <NavigationBar>
      <NavigationItem link="#" text="Home"></NavigationItem>
      <NavigationItem text="Team">
        <NavigationBar>
          <NavigationItem link="#" text="Local"></NavigationItem>
          <NavigationItem link="#" text="Remote"></NavigationItem>
          <NavigationItem link="#" text="Desktop"></NavigationItem>
          <NavigationItem link="#" text="Train"></NavigationItem>
        </NavigationBar>
      </NavigationItem>
      <NavigationItem link="#" text="Contact"></NavigationItem>
      <NavigationItem link="#" text="About Us"></NavigationItem>
    </NavigationBar>
  </StickyOnScrollUpHeader>
);

render(header, document.getElementById('header'));

