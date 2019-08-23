// 自定义配置文件
module.exports={
    devServer: {
        proxy: {
          // 请求地址以/api开头
          '/api': {
            target: 'http://m.you.163.com', // 转发的目录地址
            changeOrigin: true, // 支持跨域
             pathRewrite: { // 重写路径: 让代理服务在转发请求, 对路径进行特定修改
               '^/api': '', // 去掉路径中的/api
             },
          },
        }
}
}