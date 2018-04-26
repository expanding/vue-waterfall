import Axios from 'axios'
import Token from '@/libs/token'
// import Oauth from '@/libs/oauth'

let http = Axios.create({
  baseURL: process.env.BASE_URL,
  accept: 'application/json',
  timeout: 30000
})
// 处理发送请求
http.interceptors.request.use(
  config => {
    // 在发送请求头中加上授权token
    config.headers['Authorization'] = Token.readAccessToken()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 处理每一个响应错误
/* http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // 401状态时，清除本地token
    let response = error.response
    switch (response.status) {
      case 401:
        Token.forget()
        Oauth.forget()
        break
    }
    return Promise.reject(error)
  }
) */

export default http
