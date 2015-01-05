var autoprefixer   = require('gulp-autoprefixer');
var buffer         = require('vinyl-buffer');
var fs             = require('fs');
var gulp           = require('gulp');
var gutil          = require('gulp-util');
var plumber        = require('gulp-plumber');
var rename         = require("gulp-rename");
var run            = require('gulp-run');
var strip_comments = require('gulp-strip-json-comments');

gulp.task('sassc', function () {
  gulp.src('test/test.scss', { buffer: false })
    .pipe(plumber(function(err) {
        gutil.beep();
        var errorTxt = err.message +'\n\n'+ err.source;
        gutil.log(gutil.colors.red(errorTxt));
        // fs.writeFile('test.log', errorTxt);
    }))
    .pipe(run('/applications/libsass/sassc/bin/sassc -s', {verbosity: 1}))
    .pipe(rename(function (path) { path.extname = ".css"; }))
    .pipe(buffer())
    // .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('test/'))
});

///////////
// watch //
///////////

gulp.task('watch', function () {
  gulp.watch('test/test.scss', ['sassc']);
});

gulp.task('default', ['sassc', 'watch']);
