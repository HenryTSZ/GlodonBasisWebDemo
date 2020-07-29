module.exports = {
  // 项目部署的基础路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  // 将构建好的文件输出到哪里
  // TODO 需要修改成自己项目打包后的目录
  outputDir: '../../../resources/web/Demo',

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  lintOnSave: process.env.NODE_ENV !== 'production',

  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,

  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          api: '@/api',
          assets: '@/assets',
          components: '@/components',
          plugins: '@/plugins',
          store: '@/store',
          utils: '@/utils',
          views: '@/views',
          rootAssets: '@/../../../Plugins/src/assets',
          rootConstants: '@/../../../Plugins/src/constants',
          rootPlugins: '@/../../../Plugins/src/plugins',
          rootUtils: '@/../../../Plugins/src/utils'
        }
      }
    }
  },

  // 配置 webpack-dev-server 行为
  devServer: {
    host: '0.0.0.0',
    hot: true,
    hotOnly: false,
    open: true,
    openPage: '#/315116722885120/Home',
    port: 8080,
    https: false,
    proxy: {
      '/api': {
        target: 'https://xmgl-text.glodon.com',
        changeOrigin: true
      }
    },
    progress: true
  }
}
