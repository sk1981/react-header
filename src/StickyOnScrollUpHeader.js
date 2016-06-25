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
    console.log("------", header);
  }

  setupScrollListener() {
    // const currentScrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
    const headerHeight = this.header.clientHeight;
    console.log("header height ---" + headerHeight);
    const currentScrollTop = window.pageYOffset || 0;
    const direction = (currentScrollTop - this.state.scrollTop) > 0 ? 'DOWN': 'UP';
    const isHeaderVisible = headerHeight > currentScrollTop;
    this.setState({
      direction: direction,
      scrollTop: currentScrollTop,
      isHeaderVisible: isHeaderVisible
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setupScrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setupScrollListener);
  }

  render() {

    const isSticky = this.state.direction === 'UP';

    return (
      <div ref={this.setHeader} className={`sticky-scrollup-header ${isSticky ? 'sticky-header' : ''}`}>
        <Header {...this.props}>{this.props.children}</Header>
      </div>
    );
  }
}
