# DeepObjCloneJS

DeepObjCloneJS is a Javascript library that allows for easy and fast cloning of deeply nested Javascript Objects and Arrays.

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

## License
[ISC](https://choosealicense.com/licenses/isc/)