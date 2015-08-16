module.exports = function(grunt) {

  grunt.initConfig({
    elm: {
      compile: {
        files: {
          "deployment/bingo.js": ["src/Bingo.elm", "src/BingoUtils.elm"]
        }
      }
    },
    watch: {
      elm: {
        files: ["src/Bingo.elm", "src/BingoUtils.elm"],
        tasks: ["elm"]
      }
    },
    clean: ["elm-stuff/build-artifacts"]
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-elm');

  grunt.registerTask('default', ['elm']);

};
