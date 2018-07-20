var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin');

gulp.task('default', ['copy'], function() {
    gulp.start('build-img', 'build-html', 'build-js');
})

gulp.task('copy', ['clean'], function() {

    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {

    return gulp.src('dist')
        .pipe(clean());
})

gulp.task('build-img', function() {

    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});