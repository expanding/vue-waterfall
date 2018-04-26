import Http from '@/libs/http'
import Token from '@/libs/token'
import Oauth from '@/libs/oauth'
import Storage from '@/libs/storage'
import router from '@/router'

// 记录当前完整路径的缓存key
const currentFullPathCacheKey = 'xiyue_flybaby_auth_url'

const state = {
  mock: 0,
  mock_open_id: '',
  auth_url: '',
  client_id: '',
  client_secret: '',
  current_full_path: ''
}

const mutations = {
  /**
   * 更新数据
   */
  updateData (state, payload) {
    state.mock = payload.mock
    state.mock_open_id = payload.mock_open_id
    state.auth_url = payload.auth_url
    state.client_id = payload.client_id
    state.client_secret = payload.client_secret

    // 因为要跳转，所以要暂存到storage中
    Oauth.write(payload.client_id, payload.client_secret)
  },

  /**
   * 读取本地存储的oauth
   */
  readOauth (state) {
    let oauth = Oauth.readOauth()
    state.client_id = oauth.client_id
    state.client_secret = oauth.client_secret
  },

  /**
   * 存储登录验证前的url
   */
  storeCurrentUrlFullPath (state, payload) {
    state.current_full_path = payload.current_full_path
    Storage.save(currentFullPathCacheKey, payload.current_full_path)
  },

  /**
   * 释放登陆前存储的url
   */
  releaseCurrentUrlFullPath (state) {
    state.current_full_path = Storage.read(currentFullPathCacheKey)
    Storage.remove(currentFullPathCacheKey)
  }
}

const actions = {
  /**
   * 获取授权信息
   */
  info ({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      Http.get('/api/auth/wechat').then(response => {
        let r = response.data.meta
        commit('updateData', {
          mock: r.mock === undefined || !r.mock_open_id ? 0 : r.mock,
          mock_open_id: r.mock_open_id === undefined ? '' : r.mock_open_id,
          auth_url: r.auth_url,
          client_id: r.oauth_id,
          client_secret: r.oauth_secret
        })

        // 存储当前url存储
        commit('storeCurrentUrlFullPath', {
          current_full_path: encodeURI(payload.current_full_path)
        })

        // 传递信息
        resolve({
          mock: state.mock,
          auth_url: state.auth_url
        })
      }).catch(err => {
        reject(err)
      })
    })
  },

  /**
   * 登录
   */
  login ({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      if (state.mock === 0) {
        commit('readOauth')
      }

      let data = {
        type: payload.type,
        state: payload.state,
        code: payload.code,
        oauth_id: state.client_id,
        oauth_secret: state.client_secret
      }

      // 有mock数据时才提交
      if (state.mock_open_id) {
        data.mock_open_id = state.mock_open_id
      }

      Http.post('/api/auth/login', data).then(response => {
        let r = response.data.meta
        Token.write(
          r.token_type + ' ' + r.access_token,
          r.refresh_token,
          r.expires_in
        )
        // 释放当前url存储
        commit('releaseCurrentUrlFullPath')
        router.replace(state.current_full_path)
        resolve(r)
      }).catch(err => {
        reject(err)
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
