'use strict';

var React = require( 'react' );

module.exports = function makeRenderer( router ) {
  return {
    render: function( context, callback ) {
      var Element = context.template;
      var location = document.querySelector( context.element );

      return callback( null, React.render( <Element data={context.content} />, location ));
    },
    getChildElement: function( dom, callback ) {
      var child = React.findDOMNode( <ui-view /> );
      return callback( null, child )
    },
    reset: function( context, callback ) {
      var Element = context.template;
      var location = document.querySelector( context.element );

      React.render( <Element data={context.content} />, location );

      return callback( null );
    },
    destroy: function( dom, callback ) {
      // remove dom

    }
  }
};
