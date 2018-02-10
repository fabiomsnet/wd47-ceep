var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("copy", function() {
    return gulp.src("src/**/*").pipe(gulp.dest("dist"))
});