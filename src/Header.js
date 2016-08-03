import React from 'react';
import HeaderMobileTopBar from './HeaderMobileTopBar';
import Logo from './Logo';
import NavigationToggle from './NavigationToggle';
import NavigationBar from './NavigationBar';

import VerticalSlider from './Slider';
import HorizontalSlider from './HorizontalSlider';


function getMode() {
  let value = 'mobile';
  const headerElement = document.querySelector('.site-header');
  if(headerElement !== null) {
    value = window.getComputedStyle(headerElement, ':before').getPropertyValue('content').replace(/\"/g, '');
  }
  return value;
}

/**
 * Top level header element which styles a basic header
 */
export default class Header extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {displayMenu: false};
    this.displayMenu = this.displayMenu.bind(this);
    this.setDisplayMode = this.setDisplayMode.bind(this);
  }

  setDisplayMode() {
    const mode = getMode();
    if(this.state.mode !== mode) {
      this.setState({mode: mode});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.setDisplayMode);
    this.setDisplayMode();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setDisplayMode);
  }

  displayMenu() {
    this.setState({displayMenu : !this.state.displayMenu});
  }

  getMainNav(navigationChild) {
    return <nav className="site-navigation">{React.cloneElement(navigationChild, {isMainMenu: true})}</nav>
  }

  /**
   *
   * Populates the two top level components in mobile view
   *
   * @param children
   * @param mobileHeaderTopBarChildren
   * @param sliderChildren
   */
  populateMobileComponents(children, mobileHeaderTopBarChildren, sliderChildren) {
    children.forEach((child) => {
      if(child.type === Logo) {
        mobileHeaderTopBarChildren.push(child);
      } else if(child.type === NavigationBar) {
        sliderChildren.push(this.getMainNav(child));
      } else {
        sliderChildren.push(child);
      }
    });
    mobileHeaderTopBarChildren.push(
      <NavigationToggle displayMenu={this.state.displayMenu} onMenuToggle={this.displayMenu}>
      </NavigationToggle>
    );
  }

  /**
   * Organizes the child is mobile version so that the header components align more
   * closely with how the element looks on mobile.
   *
   * The first component would be the top header bar displaying the brand logo
   * and icon to close expand the navigation menu.
   *
   * Next component would be the slider element which slides open or close the header components.
   * @param children original array of children
   * @param horizontal Should the slider be horizontal or vertical
   * @returns {Array} final arranged array
   */
  organizeMobileChildren(children, horizontal = false) {
    const Slider = horizontal === true ? HorizontalSlider : VerticalSlider;
    const newChildren = [];
    const mobileHeaderTopBarChildren = [];
    const sliderChildren = [];
    this.populateMobileComponents(children, mobileHeaderTopBarChildren, sliderChildren);
    const slider = <Slider draw={this.state.displayMenu}>{sliderChildren}</Slider>;
    newChildren.push(<HeaderMobileTopBar>{mobileHeaderTopBarChildren}</HeaderMobileTopBar>);
    newChildren.push(slider);
    return newChildren;
  }

  organizeDesktopChildren(children) {
    const newChildren = [];

    children.forEach((child) => {
      if(child.type === NavigationBar) {
        newChildren.push(this.getMainNav(child));
      } else {
        newChildren.push(child);
      }
    });
    return newChildren;
  }

  render() {
    const isDesktop = this.state.mode === 'desktop';
    return (
      <header className={`site-header ${this.props.horizontal ? 'site-header--hmenu' : 'site-header--vmenu'}`}>
        {isDesktop ? this.organizeDesktopChildren(this.props.children): this.organizeMobileChildren(React.Children.toArray(this.props.children), this.props.horizontal)}
      </header>
    );
  }
}