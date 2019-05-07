import valid from '../utils/valid.js';

const inputValid = {
  methods: {
    inputValid(data) {
      const options = {
        phone: '请输入手机号',
        code: '请输入验证码',
        password: '请输入登录密码',
        payPassword: '请输入交易密码',
        referrer: '请输入推荐人'
      }
      for (let type in data) {
        if (valid.isStrEmpty(data[type])) {
          uni.showToast({
						icon: 'none',
						title: options[type]
					})
          return false;
        }
      }
      return true;
    }
  }
}


export {
  inputValid
}