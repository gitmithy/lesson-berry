var gulp = require( 'gulp' )
      seajsCombo = require( 'gulp-seajs-combo' );

gulp.task( 'seajscombo', function(){
     return gulp.src( './src/c.js' )
         .pipe( seajsCombo() )
         .pipe( gulp.dest('./build') );
});