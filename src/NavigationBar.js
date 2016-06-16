import React from 'react';

export default (props) => {
  const {subMenu, children} = props;
  return (
    <ul className={`site-navigation__list ${subMenu ? 'site-navigation__list--subList': ''}`}>
      {children}
    </ul>
  );
}