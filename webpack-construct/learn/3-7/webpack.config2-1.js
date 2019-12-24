var webpack =require('webpack')
var path=require('path')
module.exports={
    entry:{
        app:'./src/app2.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist2'),
        filename:'[name].bundle.js',
        publicPath:'./dist2/'    
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                exclude: /\.lazy\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.lazy\.css$/i,
                use: [
                  { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
                  'file-loader',
                ],
              },
        ]
    }
    
}