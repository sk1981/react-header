import React from 'react';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.setHeight = this.setHeight.bind(this);
  }

  setHeight(sliderElement) {
    this.sliderElement = sliderElement;
    this.height = this.sliderElement.scrollHeight;
  }

  componentDidUpdate() {
    this.height = this.sliderElement.scrollHeight;
    // this.sliderElement
  }

  render() {
    console.log("rendering......");
    const drawSlider = this.props.draw ? 'header-slider--drawn' : '';
    const sliderHeight = this.props.draw ? `${this.height}px` : '1px';
    return (
      <div ref={this.setHeight} style={{height: sliderHeight}} className={`header-slider `}>
        {this.props.children}
      </div>
    );
  }
}
