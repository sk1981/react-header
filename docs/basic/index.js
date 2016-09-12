import React from 'react';
import {render} from 'react-dom';
import {Logo, NavigationList, NavigationItem, Header} from "react-header";

const header = (
  <Header>
    <Logo title="React Header" link="https://github.com/sk1981/react-header" />
    <NavigationList>
      <NavigationItem link="#home" text="Home"/>
      <NavigationItem text="Examples">
        <NavigationList>
          <NavigationItem link="../styling/" text="Styling"/>
          <NavigationItem link="../sticky-header/" text="Sticky Header"/>
          <NavigationItem link="#dummy" text="Dummy"/>
          <NavigationItem link="#" text="Self"/>
        </NavigationList>
      </NavigationItem>
      <NavigationItem link="#dummy" text="Dummy"/>
      <NavigationItem link="/react-header/docs" text="Documentation"/>
    </NavigationList>
  </Header>
);

render(header, document.getElementById('header'));

