import React from 'react';

const NavigationBar = (props) => {
  const {isMainMenu, children} = props;
  return (
    <ul className={`site-navigation__list ${!isMainMenu ? 'site-navigation__list--sub': ''}`}>
      {children}
    </ul>
  );
};

export default NavigationBar;