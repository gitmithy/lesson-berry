var webpack =require('webpack')
var path=require('path')
module.exports={
    entry:{
        app:'./src/app1.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist1'),
        filename:'[name].bundle.js',
        publicPath:'./dist1/'    
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    { loader: 'style-loader', options: { injectType: 'linkTag' } },
                    { loader: 'file-loader' },
                ]
            }
        ]
    }
    
}