import React from 'react';

export default class NavigationItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isActive: false};
    this.toggleActiveStatus = this.toggleActiveStatus.bind(this);
  }

  toggleActiveStatus() {
    this.setState({isActive: !this.state.isActive});
  }

  render() {
    const {link, text, children} = this.props;
    const navigationLink = <a className={`nav-bar__item-link ${children ? 'nav-bar__link-sub' : ''}`} href={link}>{text}</a>;
    const isActiveClass = this.state.isActive ? 'nav-bar__item--active' : '';
    return (
      <li onClick={this.toggleActiveStatus} className={`nav-bar__item ${isActiveClass}`}>
        {navigationLink}
        {children}
      </li>
    );
  }
};