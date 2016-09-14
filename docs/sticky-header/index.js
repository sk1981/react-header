import React from 'react';
import {render} from 'react-dom';
import {Logo, NavigationList, NavigationItem, StickyOnScrollUpHeader} from "react-header";


const header = (
  <StickyOnScrollUpHeader>
    <Logo title="React Header" link="https://github.com/sk1981/react-header" />
    <NavigationList>
      <NavigationItem link="#home" text="Home"/>
      <NavigationItem text="Examples">
        <NavigationList>
          <NavigationItem link="../basic/" text="Basic Header"/>
          <NavigationItem link="../styling/" text="Styling"/>
          <NavigationItem link="#dummy" text="Dummy"/>
          <NavigationItem link="#" text="Self"/>
        </NavigationList>
      </NavigationItem>
      <NavigationItem link="#dummy" text="Dummy"/>
      <NavigationItem link=".." text="Documentation"/>
    </NavigationList>
  </StickyOnScrollUpHeader>
);

render(header, document.getElementById('header'));

