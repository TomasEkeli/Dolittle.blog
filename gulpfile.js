var gulp = require("gulp"),
    rename = require("gulp-rename"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    del = require("del");

var themeSassPath = "./static/sass/*.scss";

gulp.task("default", ["watch"])

gulp.task("scss", function () {

     del(["./static/css/**/*"]);

    gulp.src(themeSassPath)
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(autoprefixer({
            browsers: ["> 1%", "Last 2 versions"]
        }))
        .pipe(gulp.dest("static/css"));
});

gulp.task("watch", ["scss"], function () {
    gulp.watch("static/sass/**/*.scss", ["scss"]);
});
