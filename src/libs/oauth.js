import Storage from '@/libs/storage'

/**
 * 处理token存取专用
 * @author EcareYu
 */
export default {
  // 本地存储的key
  key: '不知道怎么生成的',

  /**
   * 存储数据
   * @param clientId
   * @param clientSecret
   * @return void
   */
  write (clientId, clientSecret) {
    Storage.save(this.key, {
      client_id: clientId,
      client_secret: clientSecret
    })
  },

  /**
   * 取出对象数据
   * @return Object
   */
  readOauth () {
    let obj = Storage.read(this.key)
    if (!obj) return false
    return {
      client_id: obj.client_id,
      client_secret: obj.client_secret
    }
  },

  /**
   * 忘记auth token
   */
  forget () {
    Storage.remove(this.key)
  }
}
