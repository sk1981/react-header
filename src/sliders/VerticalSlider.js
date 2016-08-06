import React from 'react';
import SliderToggle from './SliderToggle';

//TODO : Very similiar to dropdown sldier
export default class VerticalSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {draw: false};
    this.setSliderElement = this.setSliderElement.bind(this);
    this.drawSlider = this.drawSlider.bind(this);
  }

  /**
   * Gets the top bar if the title component is defined.
   * 
   * If it's not defined, it considers titlecomponent to be
   * absent and does not returns any data
   * 
   * @returns {XML}
   */
  getTopBar() {
    if (this.props.titleComponent !== undefined) {
      return (
        <div className="vertical-slider__top">
          {this.props.titleComponent}
          <SliderToggle toggleOpen={this.state.draw} onSliderToggle={this.drawSlider}/>
        </div>
      );
    } else {
      return <div onClick={this.drawSlider}>{this.props.title}</div>;
    }
  }

  setSliderElement(sliderElement) {
    this.sliderElement = sliderElement;
  }

  drawSlider() {
    this.setState({
      draw: !this.state.draw
    });
  }

  /**
   *
   * Renders a vertical slider either as a top level slider or a child level slider.
   *
   * It is a bit fragile approach - it sets the top level slider as fixes and any child level slider as absolute.
   * It also uses the top level fixed slider as a reference, which means all other properties between these
   * should have position relative.
   *
   * Ideal approach should have been to use 'fixed' for both child and parent sliders, but due to issues in
   * render in different browsers, had to take this approach.
   *
   * Should re-visit this later - maybe extract out child and pull all of them in one heirachy
   *
   * @returns {XML}
   */
  render() {
    const isDrawn = this.state.draw;
    const sliderTransform = this.state.draw === true ? '0' : '-100%';
    const drawnClass = this.state.draw ? 'vertical-slider--drawn' : '';
    const width = this.props.windowWidth / 2;
    const childStyles = {
      transform: `translateX(${isDrawn ? '0' : `-${width}px`})`,
      height: `${this.props.windowHeight - this.props.headerHeight}px`,
      width: `${width}px`,
      top: this.props.isSubSlider ? 0: `${this.props.headerHeight}px` ,
      left: 0,
      position: this.props.isSubSlider ? 'absolute' : 'fixed'
    };


    return (
      <div ref={this.setSliderElement} className={`vertical-slider ${drawnClass}`}>
        {this.getTopBar()}
        <div style={childStyles} className="vertical-slider--children">{this.props.children}</div>
      </div>
    );
  }
}
