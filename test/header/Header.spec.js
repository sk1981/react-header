import React from 'react';
import { shallow  } from 'enzyme';
import {expect} from 'chai';
import Header from '../../src/header/Header.js';
import ResizableHeader from '../../src/header/ResizableHeader.js';
import ApplicationSizeCalculator from '../../src/events/ApplicationSizeCalculator.js';

const header = (
  <Header prop1="any">
    <div>child</div>
    <div>another</div>
  </Header>
);

describe("Header component", function() {
  it('Wraps all element under application size calculator', function() {
    const headerWrapper = shallow(header);
    expect(headerWrapper.type()).to.equal(ApplicationSizeCalculator);
  });
  it('puts all elements further under resizeable header', function() {
    const headerWrapper = shallow(header);
    const headerChild = headerWrapper.children();
    expect(headerChild).to.have.length(1);
    expect(headerChild.at(0).type()).to.equal(ResizableHeader);
  });
  it('passes props to resizeable header', function() {
    const headerWrapper = shallow(header);
    const resizeHeader = headerWrapper.find(ResizableHeader);
    expect(resizeHeader.prop('prop1')).to.equal('any');
  });
  it('puts all children under resizeable header', function() {
    const headerWrapper = shallow(header);
    const resizeHeader = headerWrapper.find(ResizableHeader);
    const children = resizeHeader.children();
    expect(children).to.have.length(2);
  });
});