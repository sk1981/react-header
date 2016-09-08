import React from 'react';
import SliderToggle from './SliderToggle';

/**
 * A vertical slide menu which spans full vertical width and slides horizontally
 */
class VerticalSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {draw: false};
    this.drawSlider = this.drawSlider.bind(this);
  }

  /**
   * Gets the top bar if the title component is defined.
   * 
   * If it's not defined, it considers title component to be
   * absent and does not returns any data
   * 
   * @returns {XML}
   */
  getTopBar() {
    const {draw} = this.state;

    if (this.props.titleComponent !== undefined) {
      return (
        <div className="vertical-slider__top">
          {this.props.titleComponent}
          <SliderToggle toggleOpen={draw} onSliderToggle={this.drawSlider}/>
        </div>
      );
    } else {
      return <div aria-label="Sub Menu"
                  aria-haspopup="true"
                  aria-pressed={`${draw}`}
                  aria-expanded={`${draw}`}
                  role="button"
                  className="vertical-slider__title"
                  onClick={this.drawSlider}>
        {this.props.title}
      </div>;
    }
  }

  /**
   * Opens the slider
   */
  drawSlider() {
    this.setState({
      draw: !this.state.draw
    });
  }

  /**
   * Gets the children present in a slider.
   *
   * All it does is adds a "Back" element to the list of children
   * so as to go back to the original slider.
   *
   * @param isSubSlider
   * @param children
   * @returns {*}
   */
  getSliderChild(isSubSlider, children) {
    if(isSubSlider) {
      return [<div key="back" onClick={this.drawSlider} className="vertical-slider__back">Back</div>].concat(children)
    } else {
      return children;
    }
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
   * Should re-visit this later - maybe extract out child and pull all of them in one hierarchy
   *
   * @returns {XML}
   */
  render() {
    const isDrawn = this.state.draw;
    const {isSubSlider, headerHeight, windowWidth, windowHeight} = this.props;
    const drawnClass = isDrawn ? 'vertical-slider--drawn' : '';
    const sliderLevelClass = isSubSlider ? 'vertical-slider--sub': 'vertical-slider--main';
    //TODO : Make props
    const width = Math.floor(windowWidth * 3/4);
    const childStyles = {
      transform: `translateX(${isDrawn ? '0' : `-${width}px`})`,
      height: `${windowHeight - headerHeight}px`,
      width: `${width}px`,
      top: isSubSlider ? 0: `${headerHeight}px` ,
      left: 0,
      position: isSubSlider ? 'absolute' : 'fixed'
    };

    return (
      <div ref={(ref)=> this.sliderElement = ref}
           className={`vertical-slider ${drawnClass} ${sliderLevelClass}`}>
        {this.getTopBar()}
        <div aria-hidden={!isDrawn} style={childStyles}
             className="vertical-slider--children">
              {this.getSliderChild(isSubSlider, this.props.children)}
        </div>
      </div>
    );
  }
}

VerticalSlider.propTypes = {
  titleComponent: React.PropTypes.element,
  title: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array
  ]),
  windowWidth: React.PropTypes.number,
  windowHeight: React.PropTypes.number,
  headerHeight: React.PropTypes.number,
  isSubSlider: React.PropTypes.bool
};

export default VerticalSlider;
