import React from 'react';

export default class DropdownSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {draw: false, height: 0};
    this.setSliderElement = this.setSliderElement.bind(this);
    this.drawSlider = this.drawSlider.bind(this);
  }

  focus() {
    this.titleElement.focus();
  }

  getHeight() {
    return this.sliderElement ? this.sliderElement.scrollHeight: 0;
  }

  setSliderElement(sliderElement) {
    this.sliderElement = sliderElement;
  }

  drawSlider() {
    const height = this.getHeight();
    if (this.props.handleClick) {
      this.props.handleClick();
    } else {
      this.setState({
        draw: !this.state.draw,
        height: height
      });
    }
  }

  render() {
    const sliderTransform = this.props.draw === true ? '0' : '-100%';
    const drawnClass = this.props.draw ? 'dropdown-slider--drawn': '';
    const styles = {
      transform : `translateY(${sliderTransform})`
    };

    return (
      <div onClick={this.drawSlider} ref={this.setSliderElement}className={`dropdown-slider ${drawnClass}`}>
        <div ref={(ref) => this.titleElement = ref} tabIndex="0">
          {this.props.title}
          <span className="dropdown-slider--caret"/>
        </div>

        <div  style={styles} className="dropdown-slider--children">{this.props.children}</div>
      </div>
    );
  }
}
