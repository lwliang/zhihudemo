module.exports = {
    baseUrl: '/',// 基本路径
    outputDir: 'dist',//输出目录
    devServer: {
        open: true,
        host: "localhost",
        port: 8091,
        https: false,
        hotOnly: true,
        proxy: {//代理
            '/api': {
                target: 'http://news-at.zhihu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api/4'
                }
            },
            '/api7': {
                target: 'http://news-at.zhihu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api7': '/api/7',
                }
            }
        }
    }
}