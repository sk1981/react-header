import React from 'react';
import ReactDOMServer from 'react-dom/server';

import NavigationBar from './NavigationBar';

const isSubMenu = (children) => {
  const { count, only } = React.Children;
  return count(children) === 1 && only(children).type === NavigationBar;
};

export default (props) => {
  const children = isSubMenu(props.children) ? React.cloneElement(props.children, {subMenu: true}) :
    <a className="nav-bar__item-link" href={props.link}>{props.text}</a>;

  return (
    <li className="nav-bar__item">
      {children}
    </li>
  );
};