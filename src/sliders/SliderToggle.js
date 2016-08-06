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
    const openStateClass = this.props.toggleOpen ? 'slider-toggle--open' : '';
    return (
      <span className="slider-toggle__wrapper" onClick={this.toggledSlider}>
        <span className={`slider-toggle ${openStateClass}`}/>
      </span>
    );
  }
}
