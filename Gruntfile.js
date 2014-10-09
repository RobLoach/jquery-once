/*jshint node:true*/

module.exports = function(grunt) {
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
          'jquery.once.min.js': [
            'jquery.once.js'
          ]
        }
      }
    },
    qunit: {
      files: [
        'test/index.html'
      ]
    },
    eslint: {
      target: [
        'jquery.once.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['eslint', 'qunit']);
  grunt.registerTask('release', ['default', 'uglify']);

};
