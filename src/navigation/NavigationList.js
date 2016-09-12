import React from 'react';
import ReactHelper from '../utils/ReactHelper';
import {getListHelper} from './NavigationListHelper';

/**
 * Represents a lit of Navigation Items which are displayed
 * as a part of menu
 *
 */
class NavigationList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activeIndex: -1};
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
  }

  handleKeyEvent(keyEvent, index) {
    const listHelper = getListHelper(this.props.isMainMenu);
    return this.handleKeyNavigation(listHelper, keyEvent, index);
  }

  /**
   * Handles Key navigation
   *
   * Handles the code used to navigate around
   *
   * @param listHelper
   * @param keyEvent
   * @param index
   * @returns {boolean}
   */
  handleKeyNavigation(listHelper, keyEvent, index) {
    const keyCode = keyEvent.which;

    let handledEvent = false;
    if (listHelper.canHandleEvent(keyCode)) {
      const newActiveIndex = index + listHelper.getChange(keyCode);
      if (newActiveIndex >= -1 && newActiveIndex < this.props.children.length) {
        this.setState({
          activeIndex: newActiveIndex
        });
        // prevent default so that the default behaviour like down key
        // shifting the page down does not happens
        keyEvent.preventDefault();
      }
      // If no child element is active, this means call any close event handler, if defined.
      if(newActiveIndex === -1 && this.props.handleCloseEvent) {
        this.props.handleCloseEvent();
      }
      handledEvent = true;
    }
    return handledEvent;
  }

  componentWillReceiveProps (nextProps) {
    // If menu is being closed Add the current fullHeight to state
    if(nextProps.childFocus === true)  {
      this.setState({
        activeIndex: 0
      });
    }
  }

  render() {
    const {isMainMenu, children, windowWidth, windowHeight, mode, headerHeight} = this.props;
    const listHelper = getListHelper(isMainMenu);
    const activeIndex = this.state.activeIndex;
    const childProps = {windowWidth, windowHeight, activeIndex, mode, headerHeight, onKeyEvent: this.handleKeyEvent};
    return (
      <ul className={`site-nav__list ${listHelper.className}`}>
        {ReactHelper.addPropsToChildren(children, childProps, true)}
      </ul>
    );
  }
}

NavigationList.propTypes = {
  isMainMenu: React.PropTypes.bool,
  children: React.PropTypes.array.isRequired,
  windowWidth: React.PropTypes.number,
  windowHeight: React.PropTypes.number,
  headerHeight: React.PropTypes.number,
  handleCloseEvent: React.PropTypes.func,
  mode: React.PropTypes.oneOf(['desktop', 'mobile'])
};

export default NavigationList;