# react-state-renderer

An [abstract-state-router](https://github.com/TehShrike/abstract-state-router) implementation with a [React](https://facebook.github.io/react/) renderer.


## Usage

```javascript
var StateRouter = require( 'abstract-state-router' );
var reactRenderer = require( 'react-state-router' );

var stateRouter = StateRouter( reactRenderer, 'body' );

// add whatever states to the state router

stateRouter.evaluateCurrentRoute( 'defaultRoute' );
```

