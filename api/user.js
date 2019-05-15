import service from '../utils/service';

const url = {
  registerSendMsg: 'User/RegisterSendMsg',
  register: 'User/Register',
  login: 'User/Login',
  updatePasswordSenMsg: 'User/UpdatePasswordSenMsg',
  updatePassword: 'User/updatePassword',
  getUserInfo: 'UserInfo/GetUserInfo',
  setPayPassword: 'UserInfo/SetPayPassword',
  updatePayPassword: 'UserInfo/UpdatePayPassword',
  updateUserInfo: 'UserInfo/UpdateUserInfo',
  getUserMyfamilyDB: 'UserInfo/GetUserMyfamilyDB',
  userRegister: 'UserInfo/Register'
}

const registerSendMsg = ({ phone }) => {
  let params = {
    url: url.registerSendMsg,
    data: {
      phone
    }
  }
  return service(params);
}

const register = ({ phone, password, payPassword, generateCode }) => {
  let params = {
    url: url.register,
    data: {
      phone,
      // code,
      password,
      payPassword,
      generateCode
    }
  }
  return service(params);
}

const login = ({ phone, password }) => {
  let params = {
    url: url.login,
    data: {
      phone,
      password
    }
  }
  return service(params);
}

const updatePasswordSenMsg = ({ phone }) => {
  let params = {
    url: url.updatePasswordSenMsg,
    data: {
      phone
    }
  }
  return service(params);
}

const updatePassword = ({ phone, password, code }) => {
  let params = {
    url: url.updatePassword,
    data: {
      phone,
      password,
      code
    }
  }
  return service(params);
}

const getUserInfo = () => {
  let params = {
    url: url.getUserInfo
  }
  return service(params);
}

const setPayPassword = ({payPassword}) => {
  let params = {
    url: url.setPayPassword,
    data: {
      PayPassword: payPassword
    }
  }
  return service(params);
}

const updatePayPassword = ({oldPassword, newPassword}) => {
  let params = {
    url: url.updatePayPassword,
    data: {
      oldPassword,
      newPassword
    }
  }
  return service(params);
}

const updateUserInfo = ({name, cardno, cardid, ebankname, alipay, weixin}) => {
  let params = {
    url: url.updateUserInfo,
    data: {
      name,
      cardno,
      cardid,
      ebankname,
      alipay,
      weixin
    }
  }
  return service(params);
}

const getUserMyfamilyDB = ({pageSize, pageIndex}) => {
  let params = {
    url: url.getUserMyfamilyDB,
    data: {
      requestPage: pageIndex,
      pagesize: pageSize
    }
  }
  return service(params);
}

const userRegister = ({phone, password}) => {
  let params = {
    url: url.userRegister,
    data: {
      phone,
      password
    }
  }
  return service(params);
}

export default{
  registerSendMsg,
  register,
  login,
  updatePasswordSenMsg,
  updatePassword,
  getUserInfo,
  setPayPassword,
  updateUserInfo,
  updatePayPassword,
  getUserMyfamilyDB,
  userRegister
}