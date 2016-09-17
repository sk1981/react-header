import React from 'react';
import { shallow  } from 'enzyme';
import {expect} from 'chai';
import MobileHeader from '../../src/header/MobileHeader.js';
import VerticalSlider from '../../src/sliders/VerticalSlider.js';
import NavigationList from '../../src/navigation/NavigationList.js';

import Logo from '../../src/Logo.js';

const sizeProps = {
  windowWidth: 100,
  windowHeight: 150,
  headerHeight: 20
};

describe("Mobile Header ", function () {
  it('contains VerticalSlider', function () {
    const mobileHeaderWrapper = shallow(<MobileHeader><div className="children"></div></MobileHeader>);
    expect(mobileHeaderWrapper.find(VerticalSlider)).to.have.length(1);
  });
  it('VerticalSlider contains passed properties', function () {
    const mobileHeaderWrapper = shallow(<MobileHeader  {...sizeProps}><div className="children"></div></MobileHeader>);
    const verticalSlider = mobileHeaderWrapper.find(VerticalSlider);
    expect(verticalSlider.prop('windowWidth')).to.equal(100);
    expect(verticalSlider.prop('windowHeight')).to.equal(150);
    expect(verticalSlider.prop('headerHeight')).to.equal(20);
  });
  it('passes the list of children to the slider', function () {
    const mobileHeaderWrapper = shallow(<MobileHeader><div className="children"></div></MobileHeader>);
    const verticalSlider = mobileHeaderWrapper.find(VerticalSlider);
    expect(verticalSlider.find('.children')).to.have.length(1);
  });
  it('has title Component as undefined if no Logo present', function () {
    const mobileHeaderWrapper = shallow(<MobileHeader><div className="children"></div></MobileHeader>);
    const verticalSlider = mobileHeaderWrapper.find(VerticalSlider);
    expect(verticalSlider.prop('titleComponent')).to.be.undefined;
  });  
  it('extracts Logo as title Component', function () {
    const mobileHeaderWrapper = shallow(
      <MobileHeader {...sizeProps}>
        <Logo/>
        <div className="children"></div>
      </MobileHeader>
    );
    const verticalSlider = mobileHeaderWrapper.find(VerticalSlider);
    expect(verticalSlider.prop('titleComponent').type).to.equal(Logo);
  });
  it('removes Logo from list of children', function () {
    const mobileHeaderWrapper = shallow(
      <MobileHeader {...sizeProps}>
        <Logo/>
        <div className="children"></div>
        <div className="children"></div>
      </MobileHeader>
    );
    const verticalSlider = mobileHeaderWrapper.find(VerticalSlider);
    expect(verticalSlider.children()).to.have.length(2);
  });
  it('add indices as keys to cildren', function () {
    const mobileHeaderWrapper = shallow(
      <MobileHeader {...sizeProps}>
        <div className="children"></div>
        <div className="children"></div>
      </MobileHeader>
    );
    const verticalSlider = mobileHeaderWrapper.find(VerticalSlider);
    expect(verticalSlider.children().at(0).key()).to.equal('0');
    expect(verticalSlider.children().at(1).key()).to.equal('1');
  });
  it('adds main menu and size properties to any NavList', function () {
    const mobileHeaderWrapper = shallow(
      <MobileHeader {...sizeProps}>
        <NavigationList/>
      </MobileHeader>
    );
    const navList = mobileHeaderWrapper.find(NavigationList);
    expect(navList.prop('isMainMenu')).to.equal(true);
    expect(navList.prop('windowWidth')).to.equal(100);
    expect(navList.prop('windowHeight')).to.equal(150);
    expect(navList.prop('headerHeight')).to.equal(20);
  });
});