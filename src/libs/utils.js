import { MessageBox, Toast } from 'mint-ui'
let Util = {
  /**
   * 错误信息提示
   * @param {Object} err
   */
  showError (err) {
    // 消息判定层级:判定是否为http错误返回 => 判定是否为异常返回 => 判定是否为自定义返回
    let message = err.response ? err.response.data.msg : (err.message ? err.message : err)
    return Toast({
      message: message,
      iconClass: 'mint-icon error-icon',
      duration: 1000
    })
  },
  /**
   * 成功信息提示
   * @param {Object} message
   */
  showSuccess (message) {
    return Toast({
      message: message,
      iconClass: 'mint-icon success-icon',
      duration: 1000
    })
  },
  /**
   * alert提示
   * @param {Object} message
   */
  alert (title, message) {
    return MessageBox({
      title: title,
      message: message,
      showCancelButton: true,
      confirmButtonClass: 'mint-msgbox-btn mint-msgbox-confirm',
      cancelButtonClass: 'mint-msgbox-btn mint-msgbox-cancel'
    })
  },
  /**
   * 读取完整url路径
   * @param {string} path 根路径
   * @param {Object} query query查询对象
   */
  getUrlFullPath (path, query = {}) {
    let qs = ''
    if (Object.keys(query).length > 0) {
      query['code'] || delete query['code']
      query['state'] || delete query['state']

      qs += '?'
      for (let key in query) {
        qs += key + '=' + query[key]
      }
    }

    return path + qs
  },

  /**
   * 判断两个对象是否一致
   * @param {Object} obj1 对象1
   * @param {Object} obj2 对象2
   */
  compareObject (obj1, obj2) {
    let o1 = obj1 instanceof Object
    let o2 = obj2 instanceof Object
    if (!o1 || !o2) {
      return obj1 === obj2
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false
    }
    for (let attr in obj1) {
      let t1 = obj1[attr] instanceof Object
      let t2 = obj2[attr] instanceof Object
      if (t1 && t2) {
        return this.compareObject(obj1[attr], obj2[attr])
      } else if (obj1[attr] !== obj2[attr]) {
        return false
      }
    }
    return true
  },

  /**
   * 拷贝对象
   * @param {Object} obj 对象
   */
  deepCopyObj (obj) {
    if (typeof obj !== 'object') {
      return obj
    }
    var newObj = {}
    for (let attr in obj) {
      newObj[attr] = this.deepCopyObj(obj[attr])
    }
    return newObj
  },

  /**
   * 数组去重
   * @param {Array} array 数组
   */
  uniqueAry (array) {
    let n = {}
    let r = []
    let val
    let type
    for (var i = 0; i < array.length; i++) {
      val = array[i]
      type = typeof val
      if (!n[val]) {
        n[val] = [type]
        r.push(val)
      } else if (n[val].indexOf(type) < 0) {
        n[val].push(type)
        r.push(val)
      }
    }
    return r
  },

  /**
   * 检查是否是iOS
   */
  isIOS () {
    return window.__wxjs_is_wkwebview === true
  }
}

export default Util
