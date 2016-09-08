import React from 'react';

/**
 * Slider which presents the children wrapped under as a drop
 *
 */
class DropdownSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setSliderElement = this.setSliderElement.bind(this);
    this.drawSlider = this.drawSlider.bind(this);
  }

  focus() {
    this.titleElement.focus();
  }

  getHeight() {
    // Scroll height gives the correct height even if we have
    // provided a different height and/or have overflow: hidden instead
    // of scroll
    return this.sliderElement ? this.sliderElement.scrollHeight: 0;
  }

  setSliderElement(sliderElement) {
    this.sliderElement = sliderElement;
    this.setState({'fullHeight': this.getHeight()})
  }

  drawSlider() {
    if (this.props.handleClick) {
      this.props.handleClick();
    }
  }

  componentWillReceiveProps (nextProps) {
    // If menu is being closed Add the current fullHeight to state
    if(nextProps.draw === false) {
      this.setState({'fullHeight': this.getHeight()})
    }
  }

  render() {
    const {draw} = this.props;
    const drawnClass = draw ? 'dropdown-slider--drawn': '';
    const styles = {
      height : draw ? `${this.state.fullHeight}px` : 0
    };

    let childElement = React.Children.only(this.props.children);
    childElement = React.cloneElement(childElement, {childFocus: this.props.focusChild});

    return (
      <div role="button" aria-pressed={`${draw}`} aria-expanded={`${draw}`} aria-haspopup="true" onClick={this.drawSlider} className={`dropdown-slider ${drawnClass}`}>
        <a className="dropdown-slider__title" ref={(ref) => this.titleElement = ref} tabIndex="0">
          {this.props.title}
          <span className="dropdown-slider--caret"/>
        </a>

        <div ref={this.setSliderElement} style={styles} className="dropdown-slider--children">{childElement}</div>
      </div>
    );
  }
}

DropdownSlider.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.element.isRequired,
  handleClick: React.PropTypes.func,
  focusChild: React.PropTypes.bool,
  draw: React.PropTypes.bool
};

export default DropdownSlider;
