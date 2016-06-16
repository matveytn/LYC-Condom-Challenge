var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sassr = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var cssIn = 'assets/src/css/*.scss';
var cssOut = 'assets/min/css/';
var jsIn = 'assets/src/js/*.js';
var jsOut = 'assets/min/js/';

//gulp.task('css', function() {
//    return sass(cssIn)
//        .pipe(autoprefixer())
//        .pipe(gulp.dest(cssOut));
//});

gulp.task('css', function(){
    return sassr(cssIn)
    .pipe(gulp.dest(cssOut));
});

gulp.task('scripts', function () {
    return gulp.src(jsIn)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsOut))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsOut));
});


gulp.task('default', function () {
    gulp.run('css');
    gulp.run('scripts');

    gulp.watch(cssIn, function () {
        gulp.run('css');
    });

    gulp.watch(jsIn, function() {
        gulp.run('scripts');
    });
});
