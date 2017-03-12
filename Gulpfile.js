
var pkg = require('./package.json'),
    gulp = require('gulp'),
    rename = require("gulp-rename"),
    banner = require('gulp-banner'),
    uglify = require('gulp-uglify');

var
  date = new Date(),
  comment = '/*\n' +
    ' * <%= pkg.name %> <%= pkg.version %>\n' +
    ' * File generated on '+ date.toDateString() +' \n' +
    ' * <%= pkg.homepage %>\n' +
    ' *\n' +
    ' * Copyright ' + date.getFullYear() + ', <%= pkg.author %>\n' +
    ' * Released under the <%= pkg.license %> license.\n' +
    '*/\n\n';

gulp.task('script', function() {
  gulp.src('./mQuery.js')
      .pipe(uglify())
      .pipe(
        banner(comment, {
          pkg: pkg
        })
      )
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./'));
});


gulp.task('default', ['script']);
