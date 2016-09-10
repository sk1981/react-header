import React from 'react';
// import { mount, shallow } from 'enzyme';
import { shallow } from 'enzyme';
import {expect} from 'chai';
import Logo from '../src/Logo.js';

describe('Demo', function () {
  it('should have an input for the email', function () {
    const logoWrapper = shallow(<Logo link="testLink" text="testText"/>);
    const childAnchor = logoWrapper.find('a');
    expect(childAnchor).to.have.length(1);
  });
});