import engine from 'store/src/store-engine'
import localStorage from 'store/storages/localStorage'
import cookieStorage from 'store/storages/cookieStorage'
import sessionStorage from 'store/storages/sessionStorage'
import defaultPlugin from 'store/plugins/defaults'
import expirePlugin from 'store/plugins/expire'

let storages = [sessionStorage, localStorage, cookieStorage]
let plugins = [defaultPlugin, expirePlugin]
let Store = engine.createStore(storages, plugins)

export default {

  /**
   * 存储数据
   * @param {string} key
   * @param {*} value
   * @param {int} duration
   */
  save (key, value, duration = 100) {
    duration = (duration === parseInt(duration, 10)) ? parseInt(duration, 10) : 10
    let expiredTime = new Date().getTime() + (1000 * duration)
    Store.set(key, value, expiredTime)
  },

  /**
   * 按照key来读取内容
   * @param  {string} key
   * @return {*}
   */
  read (key) {
    let obj = Store.get(key)
    if (!obj) return ''
    return obj
  },

  /**
   * 删除key对应的内容
   * @param  {string} key
   */
  remove (key) {
    Store.remove(key)
    Store.removeExpiredKeys()
  }
}
