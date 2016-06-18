import React from 'react';
import ReactDOMServer from 'react-dom/server';

import NavigationBar from './NavigationBar';

const isSubMenu = (children) => {
  const { count, only } = React.Children;
  return count(children) === 1 && only(children).type === NavigationBar;
};

export default (props) => {
  const navigationLink = <a className="nav-bar__item-link" href={props.link}>{props.text}</a>;


  return (
    <li className="nav-bar__item">
      {navigationLink}
      {isSubMenu(props.children) ? React.cloneElement(props.children, {subMenu: true}): undefined}
    </li>
  );
};