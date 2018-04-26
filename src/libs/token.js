import Storage from '@/libs/storage'

/**
 * 处理token存取专用
 * @author EcareYu
 */
export default {
  // 本地存储的key
  key: 'xiyue_flybaby_auth',

  /**
   * 存储token到localstorage
   * @param accessToken
   * @param refreshToken
   * @param expiresIn accessToken有效秒数
   * @return void
   */
  write (accessToken, refreshToken, expiresIn) {
    Storage.save(this.key, {
      access_token: accessToken,
      refresh_token: refreshToken
    }, expiresIn)
  },

  /**
   * 取出localstorage
   * @return string
   */
  readAccessToken () {
    let obj = Storage.read(this.key)
    if (!obj) return false
    return obj.access_token
  },

  /**
   * 忘记auth token
   */
  forget () {
    Storage.remove(this.key)
  }
}
