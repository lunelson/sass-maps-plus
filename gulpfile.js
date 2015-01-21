var autoprefixer   = require('gulp-autoprefixer');
var buffer         = require('vinyl-buffer');
var fs             = require('fs');
var gulp           = require('gulp');
var gutil          = require('gulp-util');
var plumber        = require('gulp-plumber');
var rename         = require("gulp-rename");
var run            = require('gulp-run');
var strip_comments = require('gulp-strip-json-comments');
var sass           = require('gulp-sass');
var sourcemaps     = require('gulp-sourcemaps');

gulp.task('sass', function () {
  gulp.src('./test/*.scss')
    .pipe(plumber(function(err) {
        gutil.beep();
        var errorTxt = err.message +'\n\n'+ err.source;
        gutil.log(gutil.colors.red(errorTxt));
        // fs.writeFile('test.log', errorTxt);
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: ['./test'],
        sourceMap: true
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./test/'));
});

///////////
// watch //
///////////

gulp.task('watch', function () {
  gulp.watch('test/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
