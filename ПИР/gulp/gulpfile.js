const gulp = require("gulp")
const browserSync = require("browser-sync")
const babel = require("gulp-babel")

function build() {
    return gulp
            .src("./index.js")
            .pipe(
                babel({
                    plugins: ["@babel/transform-react-jsx"]
                })
            )
            .pipe(gulp.dest("./build"))
            .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server:{
            baseDir: "./"
        }
    })
    gulp.watch("./index.js", build)
}

exports.build = build
exports.watch = watch