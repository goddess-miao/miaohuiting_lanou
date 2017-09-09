var gulp = require('gulp');
var cssClean = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task("default",function(){
	console.log("say hello");
})
gulp.task("cssClean",function(){
	gulp.src('./css/*.css')
		.pipe(concat('all.css',{newLine:";"}))
		.pipe(cssClean())
		.pipe(rename({
			extname:".min.css"
		}))
		.pipe(gulp.dest('build/css'));

})
//gulp.watch('style.css',['cssClean']);

var uglify = require('gulp-uglify')
var jshint = require('gulp-jshint');
 
gulp.task('lint', function() {
	gulp.src('./js/*.js')
	    .pipe(jshint())
	    .pipe(jshint.reporter('default'))
	    .pipe(concat('all.js',{newLine:";"}))
	    .pipe(uglify())
	    .pipe(rename({
			extname:".min.js"
		}))
		.pipe(gulp.dest('build/js'));
});