/*
 * grunt-perllint
 * https://github.com/ishikawam/grunt-perllint
 *
 * Copyright (c) 2013 Masayuki Ishikawa
 * Licensed under the MIT license.
 */

// For test
var fs = require('fs');

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
//        globals: {}
      }
    },
    // Before generating any new files, remove any previously-created files.
    perllint: {
      main: {
        options: {
          debug: true,
        },
        src: ['test/fixtures/**/*.{pl,pm,cgi}'],
      },
    },
    nodeunit: {
      tests: 'test/*_test.js'
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['perllint', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);
};
