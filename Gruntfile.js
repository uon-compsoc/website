module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [
            {
                expand: true,
                cwd: 'src/controllers/',
                src: ['*/*.js'],
                dest: 'dist/controllers/'
            }
        ]
      }
    },
    copy: {
      options: {
        encoding: null,
        processContentExclude: ['**/*.{png,gif,jpg,ico,psd}']
      },
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['{public,data,views}/**'],
            dest: 'dist/',
            filter: 'isFile'
          },
          {
            expand: true,
            cwd: 'node_modules/',
            src: ['angular{,-jwt,-lock,-ui-router}/**'],
            dest: 'dist/node_modules',
            filter: 'isFile'
          },
          {
            expand: true,
            cwd: 'src/',
            src: ['views/temp_demo/**'],
            dest: 'dist/',
            filter: 'isFile'
          },
        ]
      }
    }
  });

  grunt.registerTask("default", ["babel", "copy"]);
}