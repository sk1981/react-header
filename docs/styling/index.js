import React from 'react';
import {render} from 'react-dom';
const ReactHeader = require("react-header");
const Logo = ReactHeader.Logo;
const NavigationList = ReactHeader.NavigationList;
const NavigationItem = ReactHeader.NavigationItem;
const Header = ReactHeader.Header;

const header = (
  <Header>
    <Logo title="React Header" link="https://github.com/sk1981/react-header" />
    <NavigationList>
      <NavigationItem link="#home" text="Home"/>
      <NavigationItem text="Examples">
        <NavigationList>
          <NavigationItem link="../basic/" text="Basic Header"/>
          <NavigationItem link="../sticky-header/" text="Sticky Header"/>
          <NavigationItem link="#dummy" text="Dummy"/>
          <NavigationItem link="#" text="Self"/>
        </NavigationList>
      </NavigationItem>
      <NavigationItem link="#dummy" text="Dummy"/>
      <NavigationItem link=".." text="Documentation"/>
    </NavigationList>
  </Header>
);

render(header, document.getElementById('header'));

