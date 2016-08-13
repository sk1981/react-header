import React from 'react';
import DropdownSlider from '../sliders/DropdownSlider';
import VerticalSlider from '../sliders/VerticalSlider';
import KeyEvents from '../events/KeyEvents';

export default class NavigationItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {displayChild: false};
    this.handleKey = this.handleKey.bind(this);
    this.dropdownClicked = this.dropdownClicked.bind(this);
  }

  handleKey(keyEvent) {
    const keyCode = keyEvent.which;
    const codes = KeyEvents.CODE;
    // handle child keyboard navigation keyevents only if children are present
    if((this.props.children) &&
      (codes.DOWN === keyCode || codes.UP === keyCode || codes.ESCAPE === keyCode)) {
      // Prevent default so page does not moves down
      keyEvent.preventDefault();
      this.setState({
        // do not display if up or escape key is present, display otherwise
        displayChild: !(codes.UP === keyCode || codes.ESCAPE === keyCode)
      });
    } else if(this.props.onKeyEvent ) {
      this.props.onKeyEvent(this.props.index, keyCode);
    }
  }

  dropdownClicked() {
    this.setState({
      displayChild: !this.state.displayChild
    });
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
      return (<DropdownSlider handleClick={this.dropdownClicked} draw={this.state.displayChild} ref={(ref) => this.subMenuElement = ref} title={props.text}>{children}</DropdownSlider>);
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