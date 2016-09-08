import React from 'react';
import {render} from 'react-dom';
import {Logo, NavigationList, NavigationItem, StickyOnScrollUpHeader} from "react-header";


const header = (
  <StickyOnScrollUpHeader>
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
  </StickyOnScrollUpHeader>
);

render(header, document.getElementById('header'));

