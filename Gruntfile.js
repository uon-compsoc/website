module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          src: "src/controllers/**/*",
          dest: "dist/"
        }
      }
    },
    copy: {
      files: {
        src: "src/(public|views|data)/**/*",
        dest: "dist/"
      }
    }
  });

  grunt.registerTask("default", ["babel"]);
}