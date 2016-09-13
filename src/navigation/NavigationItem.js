import React from 'react';
import DropdownSlider from '../sliders/DropdownSlider';
import VerticalSlider from '../sliders/VerticalSlider';
import KeyEvents from '../events/KeyEvents';

// Get the open close key events
const CLOSE_KEY_EVENTS = [KeyEvents.CODE.ESCAPE, KeyEvents.CODE.UP];
const OPEN_KEY_EVENTS = [KeyEvents.CODE.ENTER, KeyEvents.CODE.SPACE, KeyEvents.CODE.DOWN];
const ALL_KEY_EVENTS = [...OPEN_KEY_EVENTS, ...CLOSE_KEY_EVENTS];

class NavigationItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {displayChild: false, activeChildIndex: -1};
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.dropdownClicked = this.dropdownClicked.bind(this);
    this.handleCloseEvent = this.handleCloseEvent.bind(this);
  }

  /**
   * This method is to ensure that we are not handling events propagated
   * to the main menu from the sub menus
   *
   * We will be checking the target element here to complete this check.
   *
   * We don't want to to stop bubbling from child events (as it events may have other uses)
   * and we don't want to stop propagation (as we still want default behaviour in some circumstances)
   *
   */
  isCurrentLevelEvent(keyEvent) {
    // Bubbling can only occur for menus which have sub menus and it can
    // only happen from titleElement of sub menu
    return this.subMenuElement === undefined || this.subMenuElement.titleElement === keyEvent.target;
  }

  /**
   * Handles keydown press for navigation, opening menus etc
    * @param keyEvent
   */
  handleKeyDown(keyEvent) {
    if (!this.isCurrentLevelEvent(keyEvent)) {
      return;
    }
    let eventHandled = false;
    // Pass all events to parent to manage
    if(this.props.onKeyEvent ) {
      eventHandled = this.props.onKeyEvent(keyEvent, this.props.index);
    }
    if(!eventHandled) {
      this.handleSliderKeyEvents(keyEvent);
    }
  }

  /**
   * Handle keys related to the slider elements
   *
   * @param keyEvent
   */
  handleSliderKeyEvents(keyEvent) {
    const keyCode = keyEvent.which;
    if(this.subMenuElement && ALL_KEY_EVENTS.indexOf(keyCode) > -1) {
      const displayChild = OPEN_KEY_EVENTS.indexOf(keyCode) > -1;
      this.handleChildDisplay(displayChild, keyCode);
      keyEvent.preventDefault();
    }
  }

  /**
   * Handles changes in child display
   *
   * Also, if display is disabled,
   *
   * @param displayChild
   * @param parentKeyCode
   */
  handleChildDisplay(displayChild, parentKeyCode) {
    const state = {
      displayChild: displayChild,
      parentKeyCode: parentKeyCode || -1
    };
    this.setState(state)
  }

  /**
   * Handles clicking of dropdown by toggling the display of child
   */
  dropdownClicked() {
    this.handleChildDisplay(!this.state.displayChild)
  }

  handleCloseEvent() {
    this.handleChildDisplay(false);
  }

  /**
   * Gets the sub menu element by wrapping it on a vertical slider
   * (smaller screen) or dropdown slider (larger screen)
   *
   * @param children
   * @param props
   * @returns {XML}
   */
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
                              handleCloseEvent={this.handleCloseEvent}
                              draw={this.state.displayChild}
                              parentKeyCode={this.state.parentKeyCode}
                              ref={(ref) => this.subMenuElement = ref}
                              title={props.text}>{children}</DropdownSlider>);
    }
  }

  handleBlur() {
    this.props.onFocusChange(false, this.props.index);
  }

  handleFocus() {
    this.props.onFocusChange(true, this.props.index);
  }

  /**
   * On component update if the item is active item, just focus it
   *
   * Also ensure that we don't take focus from it's child if they are active
   */
  componentDidUpdate() {
    // not make this nav item focused if child is supposed to be displayed
    if(this.props.activeIndex === this.props.index && !this.state.displayChild) {
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
      <li onFocus={() => this.props.onFocusChange(true, this.props.index)}
          onBlur={() => this.props.onFocusChange(false, this.props.index)}
          ref={(ref) => this.container = ref}  onKeyDown={this.handleKeyDown} className={`site-nav__item`}>
        {itemChild}
      </li>
    );
  }

}

NavigationItem.propTypes = {
  children: React.PropTypes.element,
  onKeyEvent: React.PropTypes.func,
  onFocusChange: React.PropTypes.func,
  index: React.PropTypes.number,
  activeIndex: React.PropTypes.number,
  link: React.PropTypes.string,
  text: React.PropTypes.string
};

export default NavigationItem;