var webpack =require('webpack')
var path=require('path')

module.exports={
    entry:{
        'pageA':'./src/pageA',
        // 'pageB':'./src/pageB',
        // 'vendor':['lodash']
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'./',
        filename:'[name].bundle.js',
        chunkFilename:'[name].chunk.js'
    },
    // plugins:[
    //     new webpack.optimize.SplitChunksPlugin({
    //         cacheGroups: {
    //             default: {
    //                 minChunks: 2,
    //                 priority: -20,
    //                 reuseExistingChunk: true,
    //             },
    //             //打包重复出现的代码
    //             vendor: {
    //                 chunks: 'initial',
    //                 minChunks: 2,
    //                 maxInitialRequests: 5, // The default limit is too small to showcase the effect
    //                 minSize: 0, // This is example is too small to create commons chunks
    //                 name: 'vendor'
    //             },
    //             //打包第三方类库
    //             commons: {
    //                 name: "commons",
    //                 chunks: "initial",
    //                 minChunks: Infinity
    //             }
    //         }
    //     }),
    //     // 提取pagea和pageb的公共代码
    //     new webpack.optimize.RuntimeChunkPlugin({
    //         name: "manifest"
    //     }),
    // ]   

}