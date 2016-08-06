import React from 'react';
import DropdownSlider from '../sliders/DropdownSlider';
import VerticalSlider from '../sliders/VerticalSlider';

function getSubMenuElement(children, props) {
  if(props. mode === 'mobile') {
    return <VerticalSlider windowWidth={props.windowWidth}
                           windowHeight={props.windowHeight}
                           mode={props.mode}
                           headerHeight={props.headerHeight}
                           isSubSlider={true}
                           title={props.text}>{children}</VerticalSlider>;
  } else {
    return (<DropdownSlider title={props.text}>{children}</DropdownSlider>);
  }
}

const NavigationItem = (props) => {

  /**
   * Renders the item of each menu
   * Each menu item would be either one of these two:-
   * 1. Link to the navigation item
   * 2. Act as a link to open the dropdown/submenu
   */
  const {link, text, children} = props;
  const navigationLink = <a className={`site-nav__item-link`} href={link}>{text}</a>;
  const itemChild = children ? getSubMenuElement(children, props) : navigationLink;
  return (
    <li className={`site-nav__item`}>
      {itemChild}
    </li>
  );
};

export default NavigationItem;