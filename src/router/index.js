import Vue from 'vue'
import Router from 'vue-router'

import Token from '@/libs/token'
import Notice from '@/libs/notice'
import Utils from '@/libs/utils'
import store from '@/store'

import Index from '@/views/Index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})

// // 微信分享部署
// let wechatSetup = (to) => {
//   store.commit('wechat/setUrl', document.URL)

//   if (to.meta.defaultShare === undefined || to.meta.defaultShare !== false) {
//     // 设置微信默认分享内容
//     store.dispatch('wechat/share', {
//       title: '任性袋鼠',
//       desc: '亲爱哒~我是超任性、高颜值的小袋鼠，育婴好货只会更划算。'
//     })
//   }
// }

// 登录准备
let loginReady = (to, from, next) => {
  return new Promise((resolve, reject) => {
    let accessToken = Token.readAccessToken()
    let loginParams = {
      state: to.query.state,
      code: to.query.code
    }

    if (!accessToken) {
      if (!loginParams.state || !loginParams.code) {
        // 没有state和code参数时说明没有进行第一次认证
        store.dispatch('auth/info', {current_full_path: Utils.getUrlFullPath(to.path, to.query)}).then(data => {
          if (data.mock === 1) {
            // 处理mock登录
            store.dispatch('auth/login', loginParams).then(() => {
              resolve()
              next()
            }).catch(err => {
              return Promise.reject(err)
            })
          } else {
            window.location.href = data.auth_url
          }
        }).catch(err => {
          Notice.error(err)
        })
      } else {
        store.dispatch('auth/login', loginParams).then(() => {
          resolve()
          next()
        }).catch(err => {
          Notice.error(err)
        })
      }
    } else {
      resolve()
      next()
    }
  })
}

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  loginReady(to, from, next).then(() => {
    // wechatSetup(to)
  })
})

export default router
