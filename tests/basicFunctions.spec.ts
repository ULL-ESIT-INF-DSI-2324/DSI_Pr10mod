import 'mocha';
import { expect } from 'chai';
import {add} from '../src/basicFunctions.js'

describe('Add functions', () => {
  it('1 + 2 = 3', () => {
    expect(add(1,2)).to.be.equal(3);
  })
})