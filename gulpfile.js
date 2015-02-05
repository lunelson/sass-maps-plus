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
var concat = require('gulp-concat');

gulp.task('build',[], function() {
    gulp.src([
        './stylesheets/_smp-header.scss',
        './stylesheets/_smp-maps.scss',
        './stylesheets/_smp-mapmaps.scss',
        './stylesheets/_smp-listmaps.scss',
        './stylesheets/_smp-aliases.scss'
        ])
        .pipe(concat('_sass-maps-plus.scss'))
        .pipe(gulp.dest('.'));
});

gulp.task('test', function () {
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
  gulp.watch('test/*.scss', ['test']);
});

gulp.task('default', ['test', 'watch']);
