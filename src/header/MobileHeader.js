import React from 'react';
import Logo from '../Logo';
import NavigationList from '../navigation/NavigationList';
import VerticalSlider from '../sliders/VerticalSlider';

/**
 * Top level header element which styles a basic header
 */

function getMainNav(navigationChild, sizeProps) {
  let navListProps;
  if(Object.assign ) {
    navListProps = Object.assign({}, sizeProps, {isMainMenu: true});
  } else {
    // FOR IE
    sizeProps.isMainMenu = true;
    navListProps = sizeProps;
  }
  return <nav key="nav" className="site-navigation">{React.cloneElement(navigationChild, navListProps)}</nav>
}


function getChildComponents(childArray, sizeProps) {
  return childArray.filter(child => child.type !== Logo)
    .map((child, index) => child.type === NavigationList ? getMainNav(child, sizeProps) : React.cloneElement(child, {key: index}));
}

/**
 * Gets the title component that is displayed on the vertical slider
 *
 * In this case we just display the Logo
 *
 */
function getTitleComponent(childArray) {
  const logo = childArray.filter(child => child.type === Logo);
  return logo.length > 0 ? logo[0] : undefined;
}

/**
 *
 **/
const MobileHeader = (props) => {
  const childArray = React.Children.toArray(props.children);
  const titleComponent = getTitleComponent(childArray);
  const sizeProps = {
    windowWidth: props.windowWidth,
    windowHeight: props.windowHeight,
    headerHeight: props.headerHeight,
    mode: props.mode
  };
  const childComponents = getChildComponents(childArray, sizeProps);
  return (
      <VerticalSlider mode={props.mode}
                      {...sizeProps}
                      titleComponent={titleComponent}>
        {childComponents}
      </VerticalSlider>
  );
};

export default MobileHeader
