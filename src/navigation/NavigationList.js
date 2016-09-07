import React from 'react';
import ReactHelper from '../utils/ReactHelper';
import {getListHelper} from './NavigationListHelper';


export default class NavigationList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activeIndex: -1};
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
  }

  handleKeyEvent(keyEvent, index, keyCode) {
    const listHelper = getListHelper(this.props.isMainMenu);

    if(listHelper.previousKeyCode !== keyCode && listHelper.nextKeyCode !== keyCode) {
      // IF it does not needs to handle the keyCode, then just return
      return;
    }

    // Note that here were are not taking next index from state but from the argument
    // To use state, we would need to ensure that the state value is tracked properly and
    // our component is notified of any focus/blur events caused due to clicks outside
    let newActiveIndex = -1;

    if(listHelper.previousKeyCode === keyCode) {
      newActiveIndex = index - 1;
    } else if (listHelper.nextKeyCode === keyCode) {
      newActiveIndex = index + 1;
    }
    if(newActiveIndex > -1 && newActiveIndex < this.props.children.length) {
      this.setState({
        activeIndex: newActiveIndex
      });
      keyEvent.preventDefault();
    }
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
      <ul className={`site-nav__list ${listHelper.class}`}>
        {ReactHelper.addPropsToChildren(children, childProps, true)}
      </ul>
    );
  }
}