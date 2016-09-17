import React from 'react';
import { shallow  } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import SliderToggle from '../../src/sliders/SliderToggle.js';

describe("Slider Toggle ", function () {
  describe("when it is drawn", function() {
    it('contains element with open class ', function () {
      const sliderToggleWrapper = shallow(<SliderToggle toggleOpen={true} />);
      expect(sliderToggleWrapper.contains(<span className="slider-toggle slider-toggle--open"/>)).to.equal(true);
    });
    
    it('contains aria attributes with the proper values', function () {
      const sliderToggleWrapper = shallow(<SliderToggle toggleOpen={true} />);
      const sliderElement = sliderToggleWrapper.first();
      expect(sliderElement.prop('aria-label')).to.equal('Slider Expanded');
      expect(sliderElement.prop('role')).to.equal('button');
      expect(sliderElement.prop('aria-pressed')).to.equal('true');
      expect(sliderElement.prop('aria-expanded')).to.equal('true');
      expect(sliderElement.prop('aria-haspopup')).to.equal('true');
    });
    
    it('clicking element causes it to call toggledSlider', function () {
      const toggleHandler = sinon.spy();
      const sliderToggleWrapper = shallow(<SliderToggle toggleOpen={true} onSliderToggle={toggleHandler}/>);
      const sliderElement = sliderToggleWrapper.first();
      sliderElement.simulate('click');
      expect(toggleHandler).to.have.property('callCount', 1);
    });
  });
  describe("when it is closed", function() {
    it('with draw=true does not contains element with open class ', function () {
      const sliderToggleWrapper = shallow(<SliderToggle toggleOpen={false}/>);
      expect(sliderToggleWrapper.contains(<span className="slider-toggle "/>)).to.equal(true);
    });
    
    it('contains aria attributes with the proper values', function () {
      const sliderToggleWrapper = shallow(<SliderToggle toggleOpen={false} />);
      const sliderElement = sliderToggleWrapper.first();
      expect(sliderElement.prop('aria-label')).to.equal('Slider Closed');
      expect(sliderElement.prop('role')).to.equal('button');
      expect(sliderElement.prop('aria-pressed')).to.equal('false');
      expect(sliderElement.prop('aria-expanded')).to.equal('false');
      expect(sliderElement.prop('aria-haspopup')).to.equal('true');
    });
  })
});
