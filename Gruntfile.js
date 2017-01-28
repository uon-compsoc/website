module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "/dist/hello-world-testing/main.js": "/src/hello-world-testing/app.js",
        }
      }
    }
  });

  grunt.registerTask("default", ["babel"]);
}