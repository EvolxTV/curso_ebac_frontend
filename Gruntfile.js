module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "dev/styles/main.css": "src/styles/main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "dist/styles/main.min.css": "src/styles/main.less",
        },
      },
    },
    watch: {
      less: {
        files: ["src/styles/**/*.less"],
        tasks: ["less:development"],
      },
      uglify: {
        files: ["src/scripts/*.js"],
        tasks: ["uglify:target"],
      },
    },
    uglify: {
      target: {
        files: {
          "dev/scripts/main.min.js": "src/scripts/main.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["watch"]);

  // COMPILAR LESS DA TAREFA
  grunt.registerTask("compilaLess", ["less:development"]);

  //COMPRIMIR JS
  grunt.registerTask("compressJs", ["uglify"]);
};
