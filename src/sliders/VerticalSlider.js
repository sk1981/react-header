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
    this.handleDocumentClickEvent = this.handleDocumentClickEvent.bind(this);
  }

  /**
   * Gets the top bar along with the titleComponent
   *
   * In general title component should be the same as the logo
   *
   * @returns {XML}
   */
  getTopBar(isDrawn) {
    return (
      <div className="vertical-slider__top">
        {this.props.titleComponent}
        <SliderToggle toggleOpen={isDrawn} onSliderToggle={this.drawSlider}/>
      </div>
    );
  }

  /**
   * Gets the sub menu bar which is used for opening the submenu   
   *
   * @param isDrawn
   * @returns {XML}
   */
  getSubMenuBar(isDrawn) {
    return (
      <div aria-label="Sub Menu"
           aria-haspopup="true"
           aria-pressed={`${isDrawn}`}
           aria-expanded={`${isDrawn}`}
           role="button"
           className="vertical-slider__title"
           onClick={this.drawSlider}>
        {this.props.title}
      </div>
    );
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
   * Handles clicks on the document
   *
   * Used for closing the slider if the click happens outside the slider container container
   *
   * @param clickEvent
   */
  handleDocumentClickEvent(clickEvent) {
    const target = clickEvent.target;
    if (this.sliderElement.contains && !this.sliderElement.contains(target)) {
      this.setState({
        draw: false
      });
    }

  }

  /**
   * Used for registering clicks on document body
   */
  componentDidMount() {
    // Only register for the main slider to avoid extra events
    if(!this.props.isSubSlider) {
      document.addEventListener("click", this.handleDocumentClickEvent)
    }
  }

  /**
   * Used for registering clicks on document body
   */
  componentWillUnmount() {
    if(!this.props.isSubSlider) {
      document.removeEventListener("click", this.handleDocumentClickEvent)
    }
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
        {isSubSlider ? this.getSubMenuBar(isDrawn): this.getTopBar(isDrawn)}
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
