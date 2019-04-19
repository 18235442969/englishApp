import service from '../utils/service';

const url = {
  login: '/login'
}

const login = ({phone, password}) => {
  const data = {
    phone,
    password
  }
  return service.post(url.login, data);
}

export default{
  login
}