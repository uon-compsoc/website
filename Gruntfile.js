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
                src: ['*.js'],
                dest: 'dist/'
            }
        ]
      }
    },
    copy: {
      files: {
        expand: true,
        cwd: 'src/',
        src: "(public|views|data)/",
        dest: "dist/"
      }
    }
  });

  grunt.registerTask("default", ["babel"]);
}