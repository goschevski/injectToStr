var injectToStr = require("../injectToStr.js");
var chai = require("chai");
var should = chai.should();

describe('InjectToStr', function () {

    it('should replace variables in string', function () {
        var str = injectToStr('Follow @[user] on github.', { user: 'goschevski' });
        str.should.equal('Follow @goschevski on github.');
    });

    it('shouldn\'t replace variables if there is no property in object', function () {
        var str = injectToStr('Follow @[user] on [network].', { user: 'goschevski' });
        str.should.equal('Follow @goschevski on [network].');
    });
});