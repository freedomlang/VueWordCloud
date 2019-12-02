import { expect } from 'chai';
import idGenerator from '../randomID.js';

describe('Random id', () => {
  it('should generate random ids', () => {
    function hasDuplicates(array) {
      return new Set(array).size !== array.length;
    }
    const ids = [...Array(10)].map(() => idGenerator());
    expect(hasDuplicates(ids)).to.equal(false);
  });
});
