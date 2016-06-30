import React from 'react';
import Header from './Header.js';
import throttle from './utils/Throttle.js';

export default class StickyOnScrollUpHeader extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
    this.setupScrollListener = throttle(this.setupScrollListener.bind(this), 100);
    this.setHeader = this.setHeader.bind(this);
  }

  setHeader(header) {
    this.header = header;
  }

  setupScrollListener() {
    // const currentScrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
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
    window.addEventListener('scroll', this.setupScrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setupScrollListener);
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
        <Header {...this.props}></Header>
      </div>
    );
  }
}
