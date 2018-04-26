import Http from '@/libs/http'

const state = {
  url: '',
  wxIsReady: false,
  indexUrl: ''
}

const mutations = {
  /**
   * 设置校验url
   * @param {Object} state 状态
   * @param {string} payload 需要设置的Url
   */
  setUrl (state, payload) {
    state.url = payload
    // 兼容ios和微信浏览器
    if (window.__wxjs_is_wkwebview === true) {
      // iOS
      // state.url = state.url.split('#')[0]
      state.url = state.indexUrl
    } else {
      state.url = window.location.href.split('#')[0]
    }
  },

  /**
   * 设置默认url (iOS)
   * @param {String} url url
   */
  setIndexUrl (state, payload) {
    state.indexUrl = payload
  }
}

const actions = {
  /**
   * 初始化微信配置
   * @param {*} param0
   * @param {*} payload payload.perms微信权限
   */
  initConfig ({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      let data = {
        url: state.url,
        perms: payload.perms
      }
      Http.post('/api/wechat/js', data).then(response => {
        let wechatJs = response.data.meta.wechat_js
        /* eslint-disable no-undef */
        wx.config(wechatJs)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  /**
   * 分享操作
   * @param {Object} param0
   * @param {Object} payload {title:'',link:null,desc:null,type:null,img:''}
   */
  share ({dispatch, state}, payload) {
    return new Promise((resolve, reject) => {
      dispatch('initConfig', {perms: ['onMenuShareTimeline', 'onMenuShareAppMessage']}).then(() => {
        let parsedLink = payload.link === undefined || !payload.link ? window.location.href : payload.link
        /* eslint-disable no-undef */
        wx.ready(() => {
          let share = {
            title: payload.title,
            link: parsedLink,
            desc: payload.desc,
            type: payload.type === null ? 'link' : payload.type,
            imgUrl: payload.img === undefined ? '' : payload.img + '?imageMogr2/thumbnail/100x',
            success: resolve,
            cancel: reject
          }
          wx.onMenuShareTimeline(share)
          wx.onMenuShareAppMessage(share)
        })
      })
    })
  },

  pay ({dispatch, state}, payload) {
    return new Promise((resolve, reject) => {
      dispatch('initConfig', {perms: ['chooseWXPay']}).then(() => {
        let payment = payload.wx_payment
        /* eslint-disable no-undef */
        wx.chooseWXPay({
          timestamp: payment.timestamp,
          nonceStr: payment.nonceStr,
          package: payment.package,
          signType: payment.signType,
          paySign: payment.paySign,
          success: (res) => {
            if (res.errMsg === 'chooseWXPay:ok') {
              resolve('支付成功,点击确定的订单中心')
            } else {
              let obj = {
                msg: '支付失败,请重新支付',
                info: res
              }
              reject(obj)
            }
          },
          error: function (err) {
            let obj = {
              msg: '支付失败,请重新支付',
              info: err
            }
            reject(obj)
          },
          cancel: function (err) {
            let obj = {
              msg: '您已取消支付',
              info: err
            }
            reject(obj)
          }
        })
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
