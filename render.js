'use strict';

var React = require( 'react' );

module.exports = function makeRenderer( router ) {
  return {
    render: function( context, callback ) {
      // parse context.template with context.content
        // template will be some jsx
        // content will be the data to fill it

      // apply parsed template to context.element

      // return callback( null, dom )
    },
    getChildElement: function( dom, callback ) {
      // return callback( null, dom.child )
    },
    reset: function( context, callback ) {
      // parse context.template with context.content
        // template will be some jsx
        // content will be the data to fill it

      // apply parsed template to context.domApi

      // return callback( null )
    },
    destroy: function( dom, callback ) {
      // remove dom
    }
  }
};
