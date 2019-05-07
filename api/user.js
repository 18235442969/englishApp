import service from '../utils/service';

const url = {
  registerSendMsg: 'User/RegisterSendMsg',
  register: 'User/Register',
  login: 'User/Login',
  updatePasswordSenMsg: 'User/UpdatePasswordSenMsg',
  updatePassword: 'User/updatePassword',
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

const register = ({ phone, code, password, payPassword, generateCode }) => {
  let params = {
    url: url.register,
    data: {
      phone,
      code,
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

export default{
  registerSendMsg,
  register,
  login,
  updatePasswordSenMsg,
  updatePassword
}