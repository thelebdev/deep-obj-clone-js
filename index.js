utils = {
    /**
     * Used to create a copy of any existing JSON object
     * @param {ref} object any type of object
     */
    cloneObject(object) {
        let clone = {};
        for (let property in object) {
            if (Array.isArray(object[property])) {
                clone[property] = utils.cloneArray(object[property]);
            } else if (object[property] !== null && typeof(object[property]) === 'object') {
                clone[property] = utils.cloneObject(object[property])
            } else {
                clone[property] = object[property];
            }
        }
        return clone;
    },

    /**
     * Used to create a copy of any existing JSON array
     * @param {ref} array any type of array
     */
    cloneArray(array) {
        let clone = [];
        if (array.length === 0) {
            return clone;
        }

        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                clone[i] = utils.cloneArray(array[i]);
            } else {
                if (array[i] !== null && typeof(array[i]) === 'object') {
                    clone[i] = utils.cloneObject(array[i]);
                } else {
                    clone[i] = array[i];
                }
            }
        }
        return clone;
    }
};
lib = {
    clone: obj => {
        return utils.cloneObject(obj);
    }
};

modules.export = lib;