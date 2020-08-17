const isProd = process.env.NODE_ENV === 'production'

const plugins = []
if (isProd) {
  // 如果是生产环境，则自动清理掉打印的日志，但保留 error 与 warn
  plugins.push([
    'transform-remove-console',
    {
      exclude: ['error', 'warn']
    }
  ])
}

module.exports = {
  presets: ['@vue/app'],
  plugins
}
