import React from 'react';
import ReactHelper from '../utils/ReactHelper';

const NavigationList = (props) => {
  const {isMainMenu, children, windowWidth, windowHeight, mode, headerHeight} = props;

  const childProps = {windowWidth, windowHeight, mode, headerHeight };
  return (
    <ul className={`site-nav__list ${!isMainMenu ? 'site-nav__list--sub': ''}`}>
      {ReactHelper.addPropsToChildren(children, childProps)}
    </ul>
  );
};

export default NavigationList;