var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('default', ['build'], function(){
  
});

gulp.task('lib1', function () {
    return gulp.src([
      'libs/lib1/*.js'
    ], {
        base: 'libs/lib1'
    }).pipe(sourcemaps.init())
        .pipe(concat('lib1.js'))
        .pipe(sourcemaps.write('./', { includeContent: false, sourceRoot: '../lib1' }))
        .pipe(gulp.dest('libs/dist'));
});

gulp.task('build', ['lib1'], function () {
    return gulp.src([
      'source/*.js',
      'libs/dist/lib1.js'
    ], {
        base: 'source'
    }).pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(concat('output.js'))
        .pipe(sourcemaps.write('./', { includeContent: false, sourceRoot: '../source' }))
        .pipe(gulp.dest('dist'));
});