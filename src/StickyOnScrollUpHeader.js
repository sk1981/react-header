import React from 'react';
import Header from './Header.js';
import throttle from './utils/Throttle.js';

export default class StickyOnScrollUpHeader extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
    this.setupScrollListener = throttle(this.setupScrollListener.bind(this), 100);
  }

  setupScrollListener() {
    // const currentScrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
    const currentScrollTop = window.pageYOffset || 0;
    const direction = (currentScrollTop - this.state.scrollTop) > 0 ? 'DOWN': 'UP';
    this.setState({
      direction: direction,
      scrollTop: currentScrollTop
    })

  }

  componentDidMount() {
    window.addEventListener('scroll', this.setupScrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setupScrollListener);
  }

  render() {
    return (
      <div className="sticky-scrollup-header sticky-header">
        {this.state.direction === 'UP' ? <Header>{this.props.children}</Header>: undefined}
      </div>
    );
  }
}
