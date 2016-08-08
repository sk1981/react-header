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
    let newActiveIndex = -1;
    const currentActiveIndex = this.state.activeIndex;
    if(KeyEvents.CODE.LEFT === keyCode) {
      newActiveIndex = currentActiveIndex - 1;
    } else if (KeyEvents.CODE.RIGHT === keyCode) {
      newActiveIndex = currentActiveIndex + 1;
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
    console.log("new index", this.state.activeIndex);
    const childProps = {windowWidth, windowHeight, activeIndex, mode, headerHeight, onKeyEvent: this.handleKeyEvent};
    return (
      <ul className={`site-nav__list ${!isMainMenu ? 'site-nav__list--sub': ''}`}>
        {ReactHelper.addPropsToChildren(children, childProps, true)}
      </ul>
    );
  }
}