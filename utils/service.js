import config from './config';
import { getSign, setSign, removeSign } from './auth.js';

export default ({url, method='GET', data={}, header}) => {
  let serviceHeader = {
    'content-type': 'application/json',
    'sigin': getSign() || ''
  }
  // console.log(`http ${method || 'GET'} --> ${config.baseUrl}${url} sign: ${serviceHeader.sigin} data: `, data)
  return new Promise((resolve, reject) => {
    uni.request({
      url: config.baseUrl + url,
      data,
      method,
      header: header ? {...serviceHeader, ...header} : serviceHeader,
      success(res) {
        uni.hideLoading();
        // console.log(`http ${method || 'GET'} --> ${config.baseUrl}${url} sign: ${res.data.sigin} data: `, res.data)
        setSign(res.data.sigin);
        if (res.data.code !== '1') {
          if (res.data.code === '-10000' || res.data.code === '-100000') {
            removeSign();
            uni.showToast({
              icon: 'none',
              mask: true,
              title: res.data.msg
            })
            setTimeout(() => {
              uni.reLaunch({
                url: '/pages/login/index'
              });
            }, 1500);
            reject('error');
          }
          if (res.data.code === '-1') {
            uni.showToast({
              icon: 'none',
              mask: true,
              title: res.data.msg
            })
            resolve(res.data);
          }
        } else {
          resolve(res.data);
        }
      },
      fail(error) {
        uni.hideLoading();
        setSign('');
        uni.showToast({
          icon: 'none',
          mask: true,
          title: error.errMsg
        })
        reject(error);
      }
    })
  })
}