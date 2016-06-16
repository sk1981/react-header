import React from 'react';
import HeaderMobileTopBar from './HeaderMobileTopBar';
import Logo from './Logo';
import NavigationToggle from './NavigationToggle';
import NavigationBar from './NavigationBar';

import Slider from './Slider';


function getMode() {
  let value = 'mobile';
  const headerElement = document.querySelector('.site-header');
  if(headerElement !== null) {
    value = window.getComputedStyle(headerElement, ':before').getPropertyValue('content').replace(/\"/g, '');
  }
  return value;
}

/**
 * Top level header element
 */
export default class Header extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {displayMenu: false};
    this.displayMenu = this.displayMenu.bind(this);
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

  organizeChildren(children) {
    const newChildren = [];
    const mobileHeaderTopBarChildren = [];
    const mobileHeaderTopBar = <HeaderMobileTopBar>{mobileHeaderTopBarChildren}</HeaderMobileTopBar>;
    newChildren.push(mobileHeaderTopBar);

    children.forEach((child) => {
      if(child.type === Logo) {
        mobileHeaderTopBarChildren.push(child);
      } else if(child.type === NavigationBar) {
        //TODO : Issue here as we should push all children inside the slider, Also duplicate code
        newChildren.push(<Slider draw={this.state.displayMenu}><nav className="site-navigation">{child}</nav></Slider>);
      } else {
        newChildren.push(<Slider draw={this.state.displayMenu}>{child}</Slider>);

      }
    });
    mobileHeaderTopBarChildren.push(
      <NavigationToggle displayMenu={this.state.displayMenu} onMenuToggle={this.displayMenu}>        
      </NavigationToggle>
    );
    return newChildren;
  }

  render() {
    const isDesktop = this.state.mode === 'isDesktop';

    return (
      <header className="site-header">
        {this.organizeChildren(this.props.children)}
      </header>
    );
  }
}