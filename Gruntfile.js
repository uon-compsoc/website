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
      main: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['public/*/**', 'views/*/**', 'data/*/*'],
          dest: 'dist/',
          filter: 'isFile'
        }]
      }
    }
  });

  grunt.registerTask("default", ["babel", "copy"]);
}