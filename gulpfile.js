var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var cssIn = 'assets/src/css/*.css';
var cssOut = 'assets/min/css/';
var jsIn = 'assets/src/js/*.js';
var jsOut = 'assets/min/js/';

gulp.task('css', function () {
    return gulp.src(cssIn)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(cssOut))
        .pipe(cleancss())
        .pipe(autoprefixer())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest(cssOut));
});

gulp.task('scripts', function () {
    return gulp.src(jsIn)
        .pipe(uglify())
        .pipe(gulp.dest(jsOut));
});


gulp.task('default', function () {
    gulp.run('css');
    gulp.run('scripts');

    gulp.watch(cssIn, function () {
        gulp.run('css');
    });

    gulp.watch(jsIn, function () {
        gulp.run('scripts');
    });
});
