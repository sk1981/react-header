import React from 'react';
import { shallow  } from 'enzyme';
import {expect} from 'chai';
import DesktopHeader from '../../src/header/DesktopHeader.js';
import NavigationList from '../../src/navigation/NavigationList.js';

describe("Desktop Header ", function() {
  it('Adds a main menu prop to NavigationList', function() {
    const desktopHeaderWrapper = shallow(
      <DesktopHeader>
          <NavigationList>
            <div>child</div>
          </NavigationList>
        <div>another</div>
      </DesktopHeader>
    );
    const navList = desktopHeaderWrapper.find(NavigationList);
    expect(navList.prop('isMainMenu')).to.equal(true);
  });
  it('Adds keys to each child', function() {
    const desktopHeaderWrapper = shallow(
      <DesktopHeader>
        <NavigationList>
          <div>child 1</div>
        </NavigationList>
        <div>first item</div>
        <div>second item</div>
      </DesktopHeader>
    );
    const desktopChild = desktopHeaderWrapper.children();
    expect(desktopChild.at(0).key()).to.equal('nav');
    expect(desktopChild.at(1).key()).to.equal('1');
    expect(desktopChild.at(2).key()).to.equal('2');
  });
});