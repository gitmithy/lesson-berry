define(function(require,exports,module) {  
    function fn1(){  
        console.log("hello module a");  
    }  
    // 通过exports.fn对外提供fn这个接口
    exports.fn1=fn1; 

    // 上述写法还有另一种写法
    // module.exports={
    //     fn2:function(){
    //         console.log("hello module a"); 
    //     }
    // };

});  