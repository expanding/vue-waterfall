import { Toast } from 'mint-ui'

// 报名列表错误提示
let activity = {name: '请输入联系人姓名', mobile: '请输入联系人手机号', mobiles: '请输入正确的手机号码', content: ''}
// 编辑地址错误提示
let editAddress = {name: '请填写收货人', mobile: '请填写联系电话', address: '请输入收货地址'}
let Tip = {
  // 根据路由判断不同页面路由是否有必填值未填写
  has (name, value) {
    if (value === 'ActivityRegistration') {
      if (name === 'name') {
        return Toast({
          message: activity.name,
          position: 'middle',
          duaration: 5000
        })
      } else if (name === 'mobile') {
        return Toast({
          message: activity.mobile,
          position: 'middle',
          duaration: 5000
        })
      } else if (name === 'mobiles') {
        return Toast({
          message: activity.mobiles,
          position: 'middle',
          duaration: 5000
        })
      }
    } else if (value === 'AddressEdit') {
      if (name === 'name') {
        return Toast({
          message: editAddress.name,
          position: 'bottom',
          duaration: 5000
        })
      } else if (name === 'phone') {
        return Toast({
          message: editAddress.mobile,
          position: 'bottom',
          duaration: 5000
        })
      } else if (name === 'address') {
        return Toast({
          message: editAddress.address,
          position: 'bottom',
          duaration: 5000
        })
      }
    }
  }
}
export default Tip
