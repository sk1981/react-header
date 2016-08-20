import React from 'react';
import NavigationList from '../navigation/NavigationList';


function getMainNav(navigationChild) {
  return <nav  role="navigation" key="nav" className="site-navigation">{React.cloneElement(navigationChild, {isMainMenu: true})}</nav>
}

/**
 *
 * @param children
 * @returns {Array}
 */
function organizeDesktopChildren(children) {
  const newChildren = [];

  children.forEach((child, index) => {
    if(child.type === NavigationList) {
      newChildren.push(getMainNav(child));
    } else {
      newChildren.push(React.cloneElement(child, {key: index}));
    }
  });
  return newChildren;
}

const DesktopHeader = (props) => {
  return (
    <div>
      {organizeDesktopChildren(props.children)}
    </div>
  );
};

export default DesktopHeader;