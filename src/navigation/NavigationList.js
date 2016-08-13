import React from 'react';
import ReactHelper from '../utils/ReactHelper';
import KeyEvents from '../events/KeyEvents';


export default class NavigationList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activeIndex: -1};
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
  }

  handleKeyEvent(index, keyCode) {
    // Note that here were are not taking next index from state but from the argument
    // To use state, we would need to ensure that the state value is tracked properly and
    // our component is notified of any focus/blur events caused due to clicks outside
    let newActiveIndex = -1;
    if(KeyEvents.CODE.LEFT === keyCode) {
      newActiveIndex = index - 1;
    } else if (KeyEvents.CODE.RIGHT === keyCode) {
      newActiveIndex = index + 1;
    }
    if(newActiveIndex > -1 && newActiveIndex < this.props.children.length) {
      this.setState({
        activeIndex: newActiveIndex
      });
    }
  }

  render() {
    const {isMainMenu, children, windowWidth, windowHeight, mode, headerHeight} = this.props;
    const activeIndex = this.state.activeIndex;
    const childProps = {windowWidth, windowHeight, activeIndex, mode, headerHeight, onKeyEvent: this.handleKeyEvent};
    return (
      <ul className={`site-nav__list ${!isMainMenu ? 'site-nav__list--sub': ''}`}>
        {ReactHelper.addPropsToChildren(children, childProps, true)}
      </ul>
    );
  }
}