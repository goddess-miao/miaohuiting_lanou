var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task('default',function(){
	console.log(1111);
})
//压缩js文件
gulp.task("cleanJs",function(){
	gulp.src("./*.js")   //   ./表示当地目录下的所有就是文件
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('js'));
})
//合并js文件
gulp.task('concatJs',function(){
	gulp.src('./*.js')
		.pipe(concat('all.js',{newLine:";"}))
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('js'));
})
gulp.task('hint',function(){
	gulp.src('demo.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
})












