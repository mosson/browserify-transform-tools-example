'use strict';

var transformTools = require('browserify-transform-tools');

module.exports = transformTools.makeRequireTransform("requireTransform",
  {evaluateArguments: true},
  function(args, opts, cb) {
    if (args[0] === "./config") {
      return cb(null, "require('./fake')");
    } else {
      // default behavior
      return cb();
    }
  }
);
