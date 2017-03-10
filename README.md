[![npm version](https://badge.fury.io/js/angular-mn-option.svg)](https://badge.fury.io/js/angular-mn-option)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/angular-mn-option.svg)](https://gemnasium.com/github.com/minimalist-components/angular-mn-option)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)  

# angular-mn-option

An angular directive to [mn-option](https://github.com/minimalist-components/mn-option)

See the [demo](https://minimalist-components.github.io/mn-option)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-option/master/preview.gif)](https://minimalist-components.github.io/angular-mn-option/)

### Install

```sh
npm install --save angular-mn-option
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/angular-mn-option/tree/master/dist) with your preferred tool.

### Usage

```js
// add dependency in you module
angular.module('app', [
  'mn-option'
]);
```

Add to your html, the tag ```mn-option``` with respective type, default is checkbox, e.g.

```html
<!-- checkbox -->
<mn-option name="house" ng-model="house" value="stark"></mn-option>
<mn-option name="house" ng-model="house" value="lannister"></mn-option>
<mn-option name="house" ng-model="house" value="targaryen"></mn-option>
```


For more details check docs [mn-option docs](https://github.com/minimalist-components/mn-option).

