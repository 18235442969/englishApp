const Sigh = 'User-Sigh'

export function getSign() {
  return uni.getStorageSync(Sigh);
}

export function setSign(userSign) {
  return uni.setStorageSync(Sigh, userSign);
}

export function removeSign() {
  return uni.removeStorageSync(Sigh);
}
