import React from 'react';
import Header from './Header.js';
import {throttle} from '../utils/Throttle.js';

const SCROLL_HEADER_THROTTLE_TIME = 20;

/**
 * Header which is not sticky while scroll down but sticks
 *  to the top when you are scrolling up
 *
 *  It's meant to wrap the header element.
 *
 * Note: It introduces a extra div but planning to remove that
 */
export default class StickyOnScrollUpHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = throttle(this.handleScroll.bind(this), SCROLL_HEADER_THROTTLE_TIME);
    this.setHeader = this.setHeader.bind(this);
  }

  setHeader(header) {
    this.header = header;
  }

  handleScroll() {
    const headerHeight = this.header.clientHeight;
    const currentScrollTop = window.pageYOffset || 0;
    const direction = (currentScrollTop - this.state.scrollTop) > 0 ? 'DOWN': 'UP';
    const isHeaderVisible = headerHeight > currentScrollTop;
    this.setState({
      direction: direction,
      scrollTop: currentScrollTop,
      isHeaderVisible: isHeaderVisible,
      headerHeight: headerHeight
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    // Fire it once for initial setup
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {direction, isHeaderVisible, headerHeight} = this.state;
    const isStickyClass = direction === 'UP' ? 'sticky-header' : '';
    // Header should be moved up when it's not visible, so that it can be animated
    const style = {
      transform: `translateY(-${isHeaderVisible || direction === 'UP' ? '0': headerHeight}px)`
    };
    return (
      <div ref={this.setHeader} style={style} className={`sticky-scrollup-header ${isStickyClass}`}>
        <Header {...this.props}/>
      </div>
    );
  }
}
