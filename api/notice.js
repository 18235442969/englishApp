import service from '../utils/service';

const url = {
  getNoticeList: 'Notice/GetNoticeList',
  getModel: 'Notice/GetModel',
}

const getNoticeList = ({pageIndex, pageSize}) => {
  let params = {
    url: url.getNoticeList,
    data: {
      requestPage: pageIndex,
      pagesize: pageSize
    }
  }
  return service(params);
}

const getModel = ({id}) => {
  let params = {
    url: url.getModel,
    data: {
      id: id
    }
  }
  return service(params);
} 

export default{
  getNoticeList,
  getModel
}