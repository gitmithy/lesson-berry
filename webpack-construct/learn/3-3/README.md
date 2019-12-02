# 编译ES6/7

###### 1.打包命令webpack app.js --output bundle.js --mode development
###### 2.使用自定义conf文件webpack --config webpack.conf.js  或者直接把文件名命名为webpack.config.js
###### 3.webpack直接命令行编译es6需要安装@babel/core @babel/preset-env
###### 4.两个插件babel polyfill babel runtime transform


**babel polyfill**
全局垫片  
为应用准备  
npm install babel-polyfill -save
import "babel-polyfill"

**babel runtimetransform**
局部垫片  
为开发框架准备
npm install babel-plugin-transform-runtime -save -dev
import "babel-runtime" --save 
.babelrc