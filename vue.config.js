const chalk = require('chalk')
class RealUrl {
  apply(compiler) {
    // 判断是不是使用的 run serve
    if (!process.argv.some(item => item === 'serve')) return
    compiler.hooks.done.tap('done', () => {
      const options = compiler.options || {}
      const devServer = options.devServer || {}
      const { port = '8080', https = false, openPage = '' } = devServer
      setTimeout(() => {
        const url = `${https ? 'https' : 'http'}://localhost:${port}/${openPage}`
        console.log(`  - newLocal:  ${chalk.cyan(url)} `)
      })
    })
  }
}
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // 项目部署的基础路径
  publicPath: isProd ? './' : '/',

  // 将构建好的文件输出到哪里
  outputDir: '../../../resources/web/replaceOutputDir',

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  lintOnSave: !isProd,

  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      alias: {
        api: '@/api',
        assets: '@/assets',
        components: '@/components',
        mixins: '@/mixins',
        plugins: '@/plugins',
        store: '@/store',
        utils: '@/utils',
        views: '@/views',
        rootAssets: '@/../../../Plugins/src/assets',
        rootConstants: '@/../../../Plugins/src/constants',
        rootPlugins: '@/../../../Plugins/src/plugins',
        rootUtils: '@/../../../Plugins/src/utils'
      }
    },
    // 配置 webpack-dev-server 行为
    devServer: {
      host: '0.0.0.0',
      hot: true,
      hotOnly: false,
      open: true,
      openPage: '#/replaceOpenPage/Home',
      port: 8080,
      https: false,
      proxy: {
        '/api': {
          target: 'http://bim-test.glodon.com',
          changeOrigin: true
        }
      },
      progress: true
    },
    plugins: [new RealUrl()]
  }
}
