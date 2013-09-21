/*
 * grunt-perllint
 * https://github.com/ishikawam/grunt-perllint
 *
 * Copyright (c) 2013 Masayuki Ishikawa
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  var path = require('path');
  var exec = require('child_process').exec;

  grunt.registerMultiTask('perllint', 'Perl syntax checker, run \'perl -wc <file>\'', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      warning: true,
      debug: false,
    });

    var count = 0;

    grunt.verbose.writeflags(options, 'Options');

    this.files.forEach(function(filePair) {
      var isExpandedPair = filePair.orig.expand || false;

      filePair.src.forEach(function(srcFile) {
        try {

          if (grunt.file.isDir(srcFile)) {
            return;
          }

          var regex = new RegExp(escapeRegExp(path.basename(srcFile)) + "$");

          var cmd = 'perl ';
          if (options.warning === true) {
            cmd += '-wc ';
          } else {
            cmd += '-c ';
          }
          cmd += srcFile;
          if (options.debug === true) {
            grunt.log.writeln(cmd);
          }

          grunt.verbose.writeln('Exec: ' + cmd);

          // Execute command.
          exec(cmd, function( err, stdout, stderr) {
            if (stdout) {
              grunt.log.write(stdout);
            }

            if (err) {
              grunt.fatal(err);
            }
          });

        } catch(err) {
          grunt.log.error(err);
          grunt.fail.warn('Fail to check syntax.');
        }
      count++;
      });
    });

    grunt.log.writeln(count + ' files checked.');
  });


  var escapeRegExp = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  };
};

