var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    prefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    fs = require('fs');


gulp.task('js', function () {
    return gulp.src('./dev/*.js')
        .pipe(plumber())
        .pipe(uglify({compress: true}))
        .pipe(gulp.dest('./assets'));
});

gulp.task('css', function () {
    return gulp
        .src('dev/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(prefixer({
            browsers: ["last 1 version", "> 1%", "ie 8", "ie 7"]
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./assets'));
});

gulp.task('clean', function () {
    var dir = './assets/';
    fs.readdir(dir, function (err, files) {
        if (files.length) {
            files.forEach(function (file, index) {
                fs.unlink(dir + file, ()=>{});
            });
        }
    });
});


gulp.task('watch', function () {
    gulp.watch(['./dev/*.js'], ['js']);
    gulp.watch(['./dev/*.scss'], ['css']);
});

gulp.task('default', ['clean', 'css', 'js', 'watch']);
