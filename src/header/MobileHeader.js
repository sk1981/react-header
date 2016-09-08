import React from 'react';
import Logo from '../Logo';
import NavigationList from '../navigation/NavigationList';
import VerticalSlider from '../sliders/VerticalSlider';
import ReactHelper from '../utils/ReactHelper'

/**
 * Gets the child components for Mobile Menu
 *
 * It iterates over all child, filters out the logo component (as Logo needs to be displayed on top)
 * and adds them to the menu
 *
 * @param childArray
 * @param sizeProps
 * @returns {*}
 */
function getChildComponents(childArray, sizeProps) {
  return childArray.filter(child => child.type !== Logo)
    .map((child, index) => child.type === NavigationList ?
                                 ReactHelper.getMainNav(child, sizeProps) :
                                 React.cloneElement(child, {key: index}));
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
 * Header element for smaller screens, usually found on mobile devices
 */
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

MobileHeader.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array
  ]),
  windowWidth: React.PropTypes.number,
  windowHeight: React.PropTypes.number,
  headerHeight: React.PropTypes.number,
  mode: React.PropTypes.oneOf(['desktop', 'mobile'])
};

export default MobileHeader
