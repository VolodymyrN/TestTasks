var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin');


gulp.task('js', function(){
    return gulp.src('Task2/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public'))
});

gulp.task('styles', function(){
return gulp.src('Task2/*.scss')
.pipe(sass())
.pipe(prefix('last 2 versions'))
.pipe(concat('main.css'))
.pipe(minifyCSS())
.pipe(gulp.dest('public'))
});

gulp.task('minify-image', function () {
    return gulp.src('images/*')
        .pipe(imagemin([
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
        ]))
        .pipe(gulp.dest('public/images'));
});

gulp.task('default', function() {
    gulp.run('styles')
    gulp.run('js')
    gulp.run('minify-image')
    gulp.watch('Task2/*.scss', function(){
        gulp.run('styles')
    })
});