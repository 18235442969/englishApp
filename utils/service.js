import axios from 'axios';
import config from './config';

const baseUrl = config.baseUrl;


const service = axios.create({
  baseURL: baseUrl,
  timeout: 100000,
})

service.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error)
})

export default service;
