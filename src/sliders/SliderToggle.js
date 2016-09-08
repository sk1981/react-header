import React from 'react';

/**
 * The toggle icon on clicking of which we can 
 * open/close the mobile menu
 *
 */
class NavigationToggle extends React.Component {

  constructor(props) {
    super(props);
    this.toggledSlider = this.toggledSlider.bind(this);
  }

  toggledSlider() {
    this.props.onSliderToggle();
  }

  render() {
    const {toggleOpen} = this.props;
    const openStateClass = toggleOpen ? 'slider-toggle--open' : '';
    const label = toggleOpen? "Slider Expanded": "Slider Closed";
    return (
      <span aria-label={label} role="button" aria-pressed={`${toggleOpen}`}
            aria-expanded={`${toggleOpen}`} aria-haspopup="true"
            className="slider-toggle__wrapper" onClick={this.toggledSlider}>
        <span className={`slider-toggle ${openStateClass}`}/>
      </span>
    ); 
  }
}
NavigationToggle.propTypes = {
  onSliderToggle: React.PropTypes.func,
  toggleOpen: React.PropTypes.bool
};

export default NavigationToggle
