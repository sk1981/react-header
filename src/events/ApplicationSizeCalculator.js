import React from 'react';
import DOMHelper from '../utils/DOMHelper';
import {debounce} from './helper';


export default class ApplicationSizeCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.calculateAppDimensions = debounce(this.calculateAppDimensions.bind(this), 200);
  }

  calculateAppDimensions() {
    const headerHeight = DOMHelper.getElementVisibleHeight('site-header');
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      mode: DOMHelper.getMode(),
      headerHeight: headerHeight
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.calculateAppDimensions);
    window.addEventListener('scroll', this.calculateAppDimensions);

    this.calculateAppDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateAppDimensions);
    window.addEventListener('scroll', this.calculateAppDimensions);

  }

  /**
   * renders the child component along with all the properties
   */
  render() {
    return React.cloneElement(this.props.children, this.state)
  }
}