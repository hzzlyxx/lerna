const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const base64 = require('gulp-css-base64');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-clean-css');

const paths = {
  dest: {
    es: '../es',
  },
  styles: ['../src/**/*.scss', '!../src/**/test.scss'],
  images: ['../src/**/*.png', '../src/**/*.jpg'],
};

/**
 * 拷贝Scss文件
 */
function copyScss() {
  return gulp
    .src(paths.styles)
    .pipe(base64({ maxWeightResource: 10000 }))
    .pipe(gulp.dest(paths.dest.es));
}

/**
 * 拷贝图片文件
 */
function copyImages() {
  return gulp.src(paths.images).pipe(gulp.dest(paths.dest.es));
}

/**
 * 生成css文件
 */
function scss2css() {
  return gulp
    .src(paths.styles)
    .pipe(base64({ maxImageSize: 2000 }))
    .pipe(sass()) // 处理sass文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cssmin({ compatibility: 'ie9' })) // 压缩
    .pipe(gulp.dest(paths.dest.es));
}

const build = gulp.parallel(copyScss, copyImages, scss2css); // parallel并行编译、series顺序编译

exports.build = build;

exports.default = build;
