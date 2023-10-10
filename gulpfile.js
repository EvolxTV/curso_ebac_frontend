const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const obfuscate = require("gulp-obfuscate");
const uglify = require("gulp-uglify");

function compilarSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(gulp.dest("./build/styles/"));
}

function comprimirImagem() {
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

function comprimirJavaScript() {
  return gulp
    .src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/scripts"));
}

exports.comprimeJs = comprimirJavaScript;
exports.comprimeImg = comprimirImagem;
exports.sass = compilarSass;
