// esmodule
import sum from './sum.js'
// commonjs
var minus =require('./minus.js')
//amd
require(['./muti.js'],function(muti){
    console.log('muti(2,24)=',muti(2,24))
})


console.log('sum(23,24)=',sum(23,24))

console.log('minus(24,17)=',minus(24,17))