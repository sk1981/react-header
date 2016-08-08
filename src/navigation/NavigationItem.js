import React from 'react';
import DropdownSlider from '../sliders/DropdownSlider';
import VerticalSlider from '../sliders/VerticalSlider';

export default class NavigationItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(keyEvent) {
    const keyCode = keyEvent.which;
    if(this.props.onKeyEvent ) {
      this.props.onKeyEvent(this.props.index, keyCode);
    }
  }

  getSubMenuElement(children, props) {
    if(props. mode === 'mobile') {
      return <VerticalSlider windowWidth={props.windowWidth}
                             windowHeight={props.windowHeight}
                             mode={props.mode}
                             headerHeight={props.headerHeight}
                             isSubSlider={true}
                             title={props.text}>{children}</VerticalSlider>;
    } else {
      return (<DropdownSlider ref={(ref) => this.subMenuElement = ref} title={props.text}>{children}</DropdownSlider>);
    }
  }

  componentDidUpdate() {
    if(this.props.activeIndex === this.props.index) {
      if(this.linkElement) {
        this.linkElement.focus();
      }
      if(this.subMenuElement) {
        this.subMenuElement.focus();
      }
    }
  }

  render() {
    /**
     * Renders the item of each menu
     * Each menu item would be either one of these two:-
     * 1. Link to the navigation item
     * 2. Act as a link to open the dropdown/submenu
     */
    const {link, text, children} = this.props;
    const navigationLink = <a ref={(ref) => this.linkElement = ref} className={`site-nav__item-link`} href={link}>{text}</a>;
    const itemChild = children ? this.getSubMenuElement(children, this.props) : navigationLink;
    return (
      <li onKeyDown={this.handleKey} className={`site-nav__item`}>
        {itemChild}
      </li>
    );
  }

}