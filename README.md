# DeepObjCloneJS

DeepObjCloneJS is a Javascript library that allows for easy and fast cloning of deeply nested Javascript Objects and Arrays.
The perk here is that the functionality applied here is nearly 50% faster than using `JSON.stringify(JSON.parse(object))` and Loadash's `deepClone` function.

## Installation

Use npm to download this package `npm install deep-obj-clone-js`

## Usage

```javascript
let cloner = require('deep-obj-clone-js');

const ORIGINAL_OBJ = // deep-leveled JSON object with arrays
let clone = cloner.clone(ORIGINAL_OBJ);

```
This will create an entirely new object and store it in a different memory location as opposed to javascript's `let clone = ORIGINAL_OBJ` which would point two separate variables to the same memory location.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Help Needed
I'm unfamiliar with GitHub's hooks, actions, pipeline, etc. So if anyone can contribute by helping me out build that pipeline, that would be great.

## Specs

Version: 1.0.2

Total Size: 1.98 KiB

Total Dependencies: 0

Tarball Size: 2.0 KiB

Direct Dependencies: 0

## License
[ISC](https://choosealicense.com/licenses/isc/)