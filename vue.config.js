/**
 * @description vue-cli 4.x 多页面配置
 * @detatil 此多页面配置常用于项目需配置H5页面，不适用于多用于（比如一个目录同时兼容前端及后台管理）
 * @author @linkaYY
 * @creatDate 2021/06/09
 */
const glob = require('glob')
const pages = {}
const path = require('path')

const title = {
  index: 'index',
  admin: 'admin',
  manager: 'manager'
}

function resolve (dir) {
  return path.join(__dirname, dir)
}

glob.sync('./src/pages/**/main.js').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('/main.js')[0]
  // console.log(chunk)
  pages[chunk] = {
    entry: path,
    template: 'public/index.html',
    title: title[chunk],
    chunks: ['chunk-vendors', 'chunk-common', chunk]
  }
})
// 这里如果删除index页面，那么启动项目就需要手动在url增加路由（比如： http://localhost:8099/admin）
delete pages.index
// const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  // outputDir: 'dist',
  pages: pages,
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: 8099,
    open: true
  },
  // 插件相关配置
  chainWebpack: config => {
    config.plugins.delete('named-chunks')
    // 设置路径别名
    config.resolve.alias
      .set('@', resolve('src'))

    // if (isProduction) {
    //   config.plugins.delete('preload')
    //   config.plugins.delete('prefetch')
    //   config.optimization.minimize(true)
    //   config.optimization.splitChunks({
    //     chunks: 'all'
    //   })
    // }
  }
}
