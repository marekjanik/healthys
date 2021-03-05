const { src, dest, parallel, series, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");
const minifyCSS = require("gulp-csso");
const sourcemaps = require("gulp-sourcemaps");
const fileinclude = require("gulp-file-include");
const babel = require("gulp-babel");
const del = require("del");

sass.compiler = require("node-sass");

function scss() {
  return src("scss/main.scss")
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(sourcemaps.write("."))
    .pipe(dest("css"));
}

function reload(done) {
  browserSync.reload();
  done();
}

exports.serve = function () {
  browserSync.init({
    port: 9000,
    notify: false,
    stream: true,
    server: {
      baseDir: ["./", "./"],
      startPath: "index.html",
    },
  });

  watch("scss/**/*.scss", { ignoreInitial: false }, series(scss, reload));
};
