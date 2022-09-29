const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    // port: 8083, // 生产环境启动端口
    proxy: {
      '/account': {
        target: 'http://172.17.143.210:8000',
        ws: false, // proxy websockets
        changOrigin: true, // 是否允许跨域
        // pathRewrite: { // 重定向
        //   "^/api": ""
        // }
      }
    }
  },
  
})
