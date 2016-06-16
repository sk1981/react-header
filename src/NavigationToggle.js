import React from 'react';

export default class NavigationToggle extends React.Component {

  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.props.onMenuToggle();
  }

  render() {
    const openStateClass = this.props.displayMenu ? 'navbar-toggle--open' : '';
    return (<span onClick={this.toggleMenu} className={`navbar-toggle ${openStateClass}`}></span>);
  }
}
