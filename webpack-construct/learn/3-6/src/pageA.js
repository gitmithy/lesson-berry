// import './subpageA'
// import './subpageB'


// require.ensure(['./subpageA'],function(){
//     var subpageA=require('./subpageA')
// })

// require.ensure(['./subpageB'],function(){
//     var subpageA=require('./subpageB')
// })

require.include('./moduleTest')

var page='subpageA'
// require.ensure方法
// if(page==='subpageA'){
//     require.ensure(['./subpageA'],function(){
//         var subpageA=require('./subpageA')
//     },'subpageA')    
// }else if(page==='subpageB'){
//     require.ensure(['./subpageB'],function(){
//         var subpageA=require('./subpageB')
//     },'subpageB')    
// }


// 动态import方法
if(page==='subpageA'){

    // require.ensure(['./subpageA'],function(){
    //     var subpageA=require('./subpageA')
    // },'subpageA')

    /*webpackChunkName:'subPageA'*/  //魔法注释，配置导出名，如果名字一样会合并在一起

    import(/*webpackChunkName:'subPageA'*/'./subPageA').then(function(subPageA){
        console.log(subPageA)
    })


}else if(page==='subpageB'){

    // require.ensure(['./subpageB'],function(){
    //     var subpageA=require('./subpageB')
    // },'subpageB')

    /*webpackChunkName:'subPageA'*/  //魔法注释，配置导出名，如果名字一样会合并在一起

    import(/*webpackChunkName:'subPageB'*/'./subPageB').then(function(subPageB){
        console.log(subPageB)
    })
}


require.ensure(['lodash'],function(){
    var _=require('lodash')
    _.join(['1','2'],'3')
},'vender')

// import * as _ from 'lodash'

export default 'pageA'