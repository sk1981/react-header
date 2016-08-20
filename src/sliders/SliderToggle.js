import React from 'react';

export default class NavigationToggle extends React.Component {

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
    //TODO : Add Aria Controls
    return (
      <span aria-label={label} role="button" aria-pressed={`${toggleOpen}`} aria-expanded={`${toggleOpen}`} aria-haspopup="true" className="slider-toggle__wrapper" onClick={this.toggledSlider}>
        <span className={`slider-toggle ${openStateClass}`}/>
      </span>
    );
  }
}
