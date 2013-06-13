/*jshint node:true*/

module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        preserveComments: false,
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("m/d/yyyy") %>' +
          '<%= pkg.homepage ? " - " + pkg.homepage + "\\n" : "" %>' +
          ' * (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
          ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
      },
      all: {
        files: {
          'jquery.once.min.js': ['jquery.once.js']
        }
      }
    },
    qunit: {
      files: ['test/index.html']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          $: true,
          console: true,
          require: true,
          define: true
        }
      },
      files: [
        'jquery.once.js'
      ],
      test: {
        options: {
          globals: {
            jQuery: true,
            $: true,
            QUnit: true,
            module: true,
            test: true,
            start: true,
            stop: true,
            expect: true,
            ok: true,
            equal: true,
            deepEqual: true,
            strictEqual: true
          }
        },
        files: {
          src: [
            'test/test.js'
          ]
        }
      },
      grunt: {
        files: {
          src: [
            'Gruntfile.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'qunit']);
  grunt.registerTask('release', ['default', 'uglify']);

};
