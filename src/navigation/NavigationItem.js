import React from 'react';
import DropdownSlider from '../sliders/DropdownSlider';
import VerticalSlider from '../sliders/VerticalSlider';
import KeyEvents from '../events/KeyEvents';

// Get the open close key events
const NAVIGATION_KEY_EVENTS = [KeyEvents.CODE.DOWN, KeyEvents.CODE.UP];
const CLOSE_KEY_EVENTS = [KeyEvents.CODE.ESCAPE, KeyEvents.CODE.UP];
const OPEN_KEY_EVENTS = [KeyEvents.CODE.ENTER, KeyEvents.CODE.SPACE, KeyEvents.CODE.DOWN];
const ALL_KEY_EVENTS = [...OPEN_KEY_EVENTS, ...CLOSE_KEY_EVENTS];

export default class NavigationItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {displayChild: false, activeChildIndex: -1};
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.dropdownClicked = this.dropdownClicked.bind(this);
    this.handleBlurEvent = this.handleBlurEvent.bind(this);
  }

  handleChildKeyEvents(keyEvent) {
    const keyCode = keyEvent.which;
    const displayChild = OPEN_KEY_EVENTS.indexOf(keyCode) > -1;
    const isNavigationKey = NAVIGATION_KEY_EVENTS.indexOf(keyCode) > -1;
    const isChangeOfDisplay = displayChild !== this.state.displayChild;

    // Ensure that we focus child only when
    // 1. We are displaying child i.e displayChild=true
    // 2. The child was earlier not displayed i.e  isChangeOfDisplay = true
    // 3. Change was trigger by arrow keys i.e. isNavigationKey = true
    const focusChild = (isChangeOfDisplay && isNavigationKey && displayChild);// eslint-disable-line
    const state = {
      displayChild: displayChild,
      focusChild: displayChild
    };

    this.setState(state);
    keyEvent.preventDefault();
  }

  handleKeyDown(keyEvent) {
    if (keyEvent.isDefaultPrevented()) {
      return;
    }
    const keyCode = keyEvent.which;
    // handle child keyboard navigation keyevents only if children are present
    if(this.props.children && ALL_KEY_EVENTS.indexOf(keyCode) > -1) {
      this.handleChildKeyEvents(keyEvent);
    }

    if(this.props.onKeyEvent ) {
      this.props.onKeyEvent(keyEvent, this.props.index, keyCode);
    }
  }

  dropdownClicked() {
    this.setState({
      displayChild: !this.state.displayChild
    });
  }

  handleBlurEvent() {
    //TODO: Hide on blur ??
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
      return (<DropdownSlider handleClick={this.dropdownClicked}
                              focusChild={this.state.focusChild}
                              draw= {this.state.displayChild}
                              ref={(ref) => this.subMenuElement = ref}
                              title={props.text}>{children}</DropdownSlider>);
    }
  }

  componentDidUpdate() {
    // not make this nav item focused if child is supposed to be focused
    if(this.props.activeIndex === this.props.index && !this.state.focusChild) {
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
      <li onBlur={this.handleBlurEvent} onKeyDown={this.handleKeyDown} className={`site-nav__item`}>
        {itemChild}
      </li>
    );
  }

}