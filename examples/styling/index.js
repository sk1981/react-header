import React from 'react';
import {render} from 'react-dom';
const ReactHeader = require("react-header");
const Logo = ReactHeader.Logo;
const NavigationList = ReactHeader.NavigationList;
const NavigationItem = ReactHeader.NavigationItem;
const Header = ReactHeader.Header;

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
  </Header>
);

render(header, document.getElementById('header'));

