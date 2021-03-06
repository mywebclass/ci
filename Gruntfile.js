'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    cfg: grunt.file.readJSON('repo.json'),
    clean: ['build'],
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    copy: {
      meta: {
        expand: true,
        cwd: '<%= cfg.meta %>',
        src: '**',
        dest: 'build/'
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  // Default task.
  grunt.registerTask('default', ['clean', 'jshint', 'copy']);

};
