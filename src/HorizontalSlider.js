import React from 'react';

export default class HorizontalSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setSliderElement = this.setSliderElement.bind(this);
  }

  getWidth() {
    const width = this.sliderElement ? this.sliderElement.scrollWidth: 0;
    this.setState({width: width});
  }

  setSliderElement(sliderElement) {
    this.sliderElement = sliderElement;
    this.getWidth();
  }

  componentWillReceiveProps(newProps) {
    if(newProps.draw !== this.props.draw) {
      this.getWidth();
    }
  }

  render() {
    const sliderTransform = this.props.draw === true ? '0' : '-100%';

    // const styles = {
    //   transform : `translateX(${sliderTransform})`,
    // };
    const styles = {
      left : sliderTransform,
    };

    return (
      <div ref={this.setSliderElement} style={styles} className="header-slider header-slider--horizontal">
        {this.props.children}
      </div>
    );
  }
}
