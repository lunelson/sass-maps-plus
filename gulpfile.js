var gulp   = require('gulp');
var concat = require('gulp-concat');

gulp.task('build',[], function() {
    gulp.src([
        './_source/_header.scss',
        './_source/_utils.scss',
        './_source/_maps.scss',
        './_source/_maps-multi.scss',
        './_source/_list-maps.scss',
        './_source/_aliases.scss'
        ])
        .pipe(concat('_sass-maps-plus.scss'))
        .pipe(gulp.dest('.'));
});

///////////
// watch //
///////////

gulp.task('watch', function () {
  gulp.watch('_source/*.scss', ['build']);
});

gulp.task('default', ['build', 'watch']);
