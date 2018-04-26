export default {
  error (err) {
    // 消息判定层级:判定是否为http错误返回 => 判定是否为异常返回 => 判定是否为自定义返回
    let message = err.response ? err.response.data.msg : (err.message ? err.message : err)
    alert(message)
  }
}
