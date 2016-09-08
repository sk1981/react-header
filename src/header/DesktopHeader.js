import React from 'react';
import NavigationList from '../navigation/NavigationList';
import ReactHelper from '../utils/ReactHelper'

/**
 * Organizes the desktop children by adding key and marking main
 * menu with the main menu flag.
 * 
 * @param children
 * @returns {Array}
 */
function organizeDesktopChildren(children) {
  const newChildren = [];

  children.forEach((child, index) => {
    if(child.type === NavigationList) {
      newChildren.push(ReactHelper.getMainNav(child));
    } else {
      newChildren.push(React.cloneElement(child, {key: index}));
    }
  });
  return newChildren;
}

/**
 * Header element for largers screens, usually found on desktop devices
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const DesktopHeader = (props) => {
  return (
    <div>
      {organizeDesktopChildren(props.children)}
    </div>
  );
};

DesktopHeader.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array
  ])
};

export default DesktopHeader;