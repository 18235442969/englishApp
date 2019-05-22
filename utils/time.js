const formatTime = (time) => {
  const d = new Date(time);
  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + (d.getMinutes() > 10 ? d.getMinutes() : '0' + d.getMinutes());
}

export default {
  formatTime
}