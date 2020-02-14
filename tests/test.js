var assert = require('assert');
var clone = require('../index');
// TO_CLONE JSON object was randomly generated using https://onlinerandomtools.com/generate-random-json
const TO_CLONE = {
    "applied": {
        "under": 164685167.44648075,
        "toward": false,
        "cool": "industry"
    },
    "fruit": {
        "return": [
            "guard",
            false,
            -1114751946
        ],
        "failed": "rays",
        "clock": true
    },
    "related": {
        "basis": {
            "which": {
                "steel": {
                    "shade": false,
                    "join": {
                        "satisfied": "ordinary",
                        "eaten": 739201375.6219416,
                        "so": 1284527605.8967967
                    },
                    "generally": true
                },
                "congress": 1937935759.3055959,
                "joined": true
            },
            "rocket": 329613899.54236364,
            "flame": true
        },
        "shop": "drink",
        "roar": 694888574.8269143
    }
};

describe('Basic Object Cloning Test', function () {
    it('should return clonedObj.related.basis.which.steel.join.satisfied = "ordinary"', function () {
        let clonedObj = clone.clone(TO_CLONE);
        
        clonedObj.related.basis.which.steel.join.satisfied = "not ordinary";
        assert.equal(clonedObj.related.basis.which.steel.join.satisfied, "not ordinary");
    });
    it('should return TO_CLONE.related.basis.which.steel.join.satisfied = "not ordinary"', function() {
        assert.equal(TO_CLONE.related.basis.which.steel.join.satisfied, "ordinary");
    })
});

describe('Basic Javascript Copying Test', function() {
    it('should not return TO_CLONE.related.basis.which.steel.join.satisfied = "ordinary"', function () {
        let clonedObj = TO_CLONE;

        clonedObj.related.basis.which.steel.join.satisfied = "not ordinary";
        assert.notEqual(TO_CLONE.related.basis.which.steel.join.satisfied, "ordinary");
    })
})