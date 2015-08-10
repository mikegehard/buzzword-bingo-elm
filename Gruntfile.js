module.exports = function(grunt) {

  grunt.initConfig({
    elm: {
      compile: {
        files: {
          "compiled/bingo.js": ["src/Bingo.elm", "src/BingoUtils.elm"]
        }
      }
    },
    watch: {
      elm: {
        files: ["Bingo.elm", "BingoUtils.elm"],
        tasks: ["elm"]
      }
    },
    copy: {
      deployment: {
        files: [
          {expand: true, cwd: 'src/', src: ['index.html', 'style.css'], dest: 'deployment/', flatten: true, filter: 'isFile'},
          {expand: true, cwd: 'compiled/', src: ['*.js'], dest: 'deployment/', flatten: true, filter: 'isFile'}
        ]
      }
    },
    clean: ["elm-stuff/build-artifacts"]
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-elm');

  grunt.registerTask('default', ['elm']);
  grunt.registerTask('build', ['elm', 'copy:deployment'])

};
