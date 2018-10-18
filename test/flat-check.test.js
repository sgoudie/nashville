var expect = require('chai').expect;
var flatCheck = require('../lib/flat-check');

describe('flatCheckF', function () {
  it('should return true for F', function () {
    expect(flatCheck('F')).to.be.true;
  });
});

describe('flatCheckEb', function () {
  it('should return true for Eb', function () {
    expect(flatCheck('Eb')).to.be.true;
  });
});

describe('flatCheckC#', function () {
  it('should return false for C#', function () {
    expect(flatCheck('C#')).to.be.false;
  });
});
