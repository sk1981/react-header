import React from 'react';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setSliderElement = this.setSliderElement.bind(this);
  }

  getHeight() {
    const height = this.sliderElement ? this.sliderElement.scrollHeight: 0;
    this.setState({height: height});
  }

  setSliderElement(sliderElement) {
    this.sliderElement = sliderElement;
    this.getHeight();
  }

  componentWillReceiveProps(newProps) {
    if(newProps.draw !== this.props.draw) {
      this.getHeight();
    }
  }

  render() {
    const sliderTransform = this.props.draw === true ? '0' : '-100%';

    const styles = {
      transform : `translateY(${sliderTransform})`,
    };


    return (
      <div ref={this.setSliderElement} style={styles} className="header-slider">
        {this.props.children}
      </div>
    );
  }
}
