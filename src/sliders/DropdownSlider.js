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
    this.handleClick = this.handleClick.bind(this);
    this.handleCloseEvent = props.handleCloseEvent;
    this.handleBlurEvent = this.handleBlurEvent.bind(this);
  }

  /**
   * Method to be called to focus the element
   * Expected to called by parent and it ensures that
   * it is focused by focusing the title element
   */
  focus() {
    this.titleElement.focus();
  }

  /**
   * Gets the height of the element
   * @returns {number}
   */
  getHeight() {
    // Scroll height gives the correct height even if we have
    // provided a different height and/or have overflow: hidden instead
    // of scroll
    return this.sliderElement ? this.sliderElement.scrollHeight: 0;
  }

  /**
   * Sets the slider element on mount and ensures
   * that the height is pre-calculated
   *
   * @param sliderElement
   */
  setSliderElement(sliderElement) {
    this.sliderElement = sliderElement;
    this.setState({'fullHeight': this.getHeight()})
  }

  handleBlurEvent(blurEvent) {
    // Ignore event if child is not displayed
    if(this.props.draw === false) {
      return;
    }
    // While blur is not normally bubbled, it will bubble
    // in this case due to react's event system.
    // We need to have async flow as initially the active document
    // is the body, after which it becomes the current eleemnt
    const currentTarget = blurEvent.currentTarget;
    setTimeout(() => {
      if (currentTarget.contains && !currentTarget.contains(document.activeElement)) {
        this.props.handleCloseEvent(false);
      }
    }, 0);
  }

  /**
   * Calls method to handle event to draw slider
   *
   * Passes to parent for handling the click event
   */
  handleClick() {
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
    childElement = React.cloneElement(childElement, { handleCloseEvent: this.handleCloseEvent,
                                                      parentKeyCode: this.props.parentKeyCode,
                                                      reset: draw });

    return (
      <div onBlur={this.handleBlurEvent} role="button" aria-pressed={`${draw}`} aria-expanded={`${draw}`}
           aria-haspopup="true" onClick={this.handleClick} className={`dropdown-slider ${drawnClass}`}>
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
  parentKeyCode: React.PropTypes.number,
  children: React.PropTypes.element.isRequired,
  handleClick: React.PropTypes.func,
  handleCloseEvent: React.PropTypes.func,
  draw: React.PropTypes.bool
};

export default DropdownSlider;
