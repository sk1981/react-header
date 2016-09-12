import ObjectHelper from '../../src/utils/ObjectHelper.js';

import {expect} from 'chai';

describe("Object helpers ", function () {
  describe("has assign properties method which should", function () {
    it('copy values from multiple existing objects into empty target', function () {
      const newObject = ObjectHelper.assignProperties({}, {a: 1}, {b: 2});
      expect(newObject).to.deep.equal({a: 1, b: 2});
    });
    it('copy values from all values from a object into empty target', function () {
      const newObject = ObjectHelper.assignProperties({}, {x: 1, y: 2});
      expect(newObject).to.deep.equal({x: 1, y: 2});
    });
    it('copy values from all values from a object into existing target', function () {
      const newObject = ObjectHelper.assignProperties({a: 1}, {x: 1, y: 2});
      expect(newObject).to.deep.equal({a: 1, x: 1, y: 2});
    });
  });
});
