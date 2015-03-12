# node-matrix-assets

A requireable object list of Squiz Matrix' core assets.

Extracted using the [JS API getAssetTypes] function.

[![Build Status](https://travis-ci.org/joshgillies/node-matrix-assets.svg)](https://travis-ci.org/joshgillies/node-matrix-assets)

# Usage

```js
var assets = require('node-matrix-assets');
```

`node-matrix-assets` provides a simple querying interface wich allows you to retrieve
asset info with the following:

```js
console.log(assets('page_standard').name); // asset type code
console.log(assets('Standard Page').name); // capital case name
console.log(assets('standard page').name); // lower case name

// all return 'Standard Page'
```

In addition you can require directly the entire assets object with:

```js
var assets = require('node-matrix-assets/assets');
```

with which you can select assets via their type code:

```js
console.log(assets['page_standard'].name);

// 'Standard Page'
```

# License

MIT

[JS API getAssetTypes]: http://manuals.matrix.squizsuite.net/web-services/chapters/javascript-api#getAssetTypes
