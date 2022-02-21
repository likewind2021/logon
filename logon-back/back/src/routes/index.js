// // 遍历文件 加载Router中间件
// const moduleFile = require.context('./modules', true, /\.js$/)
// // reduce 方法拼接koa-combine-routers 所需数据 Object []
// const modules = moduleFile.keys().reduce((items, path) => {
//   const value = moduleFile(path)
//   items.push(value.default)
//   return items
// }, [])

const combineRoutes = require('koa-combine-routers')

const publicRouter = require('./publicRouter')
const loginRouter = require('./loginRouter')

module.exports = combineRoutes(loginRouter, publicRouter)