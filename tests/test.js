var assert = require('assert');
var clone = require('../index');
const TO_CLONE = {
    childObj1: {
        childObj2: 5
    }
};
describe('Basic Object Cloning Test', function () {
    it('should return childObj2 = 6 for clonedObj', function () {
        let clonedObj = clone.clone(TO_CLONE);
        
        clonedObj.childObj1.childObj2 = 6;
        assert.equal(clonedObj.childObj1.childObj2, 6);
    });
    it('should return childObj2 = 5 for TO_CLONE', function() {
        assert.equal(TO_CLONE.childObj1.childObj2, 5);
    })
});