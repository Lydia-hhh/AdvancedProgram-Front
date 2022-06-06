// let proxyObj={};
// proxyObj['/api']={
//     ws:false,
//     target: 'http://localhost:8082',  //ycf
//     changeOrigin: true,
//     pathRewrite: {
//         '^/j2eeclass':''
//     }
// }

// 跨域配置
module.exports = {
    // publicPath:'./',
    // outputDir:'src/main/resources/static',
    devServer: {                //记住，别写错了devServer//设置本地默认端口  选填
        port: 8085,
        proxy: {                 //设置代理，必须填
            '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
                target: 'http://192.168.43.129:8082',     //代理的目标地址
                //target: 'http://172.30.160.30:8082',     //代理的目标地址
                changeOrigin: true,              //是否设置同源，输入是的
                pathRewrite: {                   //路径重写
                    '^/api': ''                     //选择忽略拦截器里面的单词
                }
            }
        }

        // proxy:proxyObj,
        // outputDir:'finalProj'
    }
}



