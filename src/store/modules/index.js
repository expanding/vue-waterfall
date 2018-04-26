/**
 * 入口全局导入
 * 不要修改此文件或删除这个文件
 */

const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default modules
