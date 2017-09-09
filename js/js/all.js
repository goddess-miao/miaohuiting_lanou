var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


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
//		.pipe(uglify())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('js'));
})

var a=10;
var nStop = true
for(var i=0;i<5;i++){
	console.log(i);
}
function fn1(){
	console.log(this);
}
fn1();
document.onclick=fn1;  //通过事件调用函数
