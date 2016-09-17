import React from 'react';
import { shallow  } from 'enzyme';
import {expect} from 'chai';
import ResizableHeader from '../../src/header/ResizableHeader.js';
import DesktopHeader from '../../src/header/DesktopHeader.js';
import MobileHeader from '../../src/header/MobileHeader.js';

describe("Resizable Header component", function() {
  it('wraps all element under header with header class', function () {
    const headerWrapper = shallow(
      <ResizableHeader>
        <div>Testing</div>
      </ResizableHeader>
    );
    expect(headerWrapper.type()).to.equal('header');
    expect(headerWrapper.prop('className')).to.equal('site-header');
  });
  it('returns empty div if no mode is defined', function () {
    const headerWrapper = shallow(
      <ResizableHeader>
        <div>Testing</div>
      </ResizableHeader>
    );
    const child = headerWrapper.children().at(0);
    expect(child.html()).to.equal('<div></div>');
  });
  it('returns element under desktop header for desktop mode', function () {
    const headerWrapper = shallow(
      <ResizableHeader mode="desktop">
        <div>Testing</div>
      </ResizableHeader>
    );
    const child = headerWrapper.children().at(0);
    expect(child.type()).to.equal(DesktopHeader);
  });
  it('returns element under mobile header for mobile mode', function () {
    const headerWrapper = shallow(
      <ResizableHeader mode="mobile">
        <div>Testing</div>
      </ResizableHeader>
    );
    const child = headerWrapper.children().at(0);
    expect(child.type()).to.equal(MobileHeader);
  });
});