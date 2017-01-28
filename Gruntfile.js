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
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['public/**', 'views/**', 'data/**'],
          dest: 'dist/',
          filter: 'isFile'
        }]
      }
    }
  });

  grunt.registerTask("default", ["babel", "copy"]);
}