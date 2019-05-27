import service from '../utils/service';

const url = {
  getTransferConfig: 'Market/GetTransferConfig',
  newHandTransfer: 'Market/NewHandTransfer',
  hangTransferByCode: 'Market/HangTransferByCode',
  getNewHandTran: 'Market/GetNewHandTran',
  transferrecord: 'Market/Transferrecord',
  upImgForTransfer: 'Market/UpImgForTransfer',
  hangTransferByStep: 'Market/HangTransferByStep',
  getMyAmountPrice: 'Market/GetMyAmountPrice',
}

const getTransferConfig = () => {
  let params = {
    url: url.getTransferConfig
  }
  return service(params);
}

const newHandTransfer = ({ amount, type }) => {
  let params = {
    url: url.newHandTransfer,
    data: {
      amount,
      Ttype: type
    }
  }
  return service(params);
}

const hangTransferByCode = ({ id, tradePassword }) => {
  let params = {
    url: url.hangTransferByCode,
    data: {
      tranid: id,
      paypassword: tradePassword
    }
  }
  return service(params);
}

const getNewHandTran = ({pageIndex, type}) => {
  let params = {
    url: url.getNewHandTran,
    data: {
      pageno: pageIndex,
      Ttype: type
    }
  }
  return service(params);
}

const transferrecord = ({type}) => {
  let params = {
    url: url.transferrecord,
    data: {
      Ttype: type
    }
  }
  return service(params);
}

const hangTransferByStep = ({id, step}) => {
  let params = {
    url: url.hangTransferByStep,
    data: {
      tranid: id,
      step: step
    }
  }
  return service(params);
}

const upImgForTransfer = ({imgUrl, id}) => {
  let params = {
    url: url.upImgForTransfer,
    data: {
      imgurl: imgUrl,
      tranid: id
    }
  }
  return service(params);
}

const getMyAmountPrice = () => {
  let params = {
    url: url.getMyAmountPrice
  }
  return service(params);
}

export default{
  getTransferConfig,
  newHandTransfer,
  hangTransferByCode,
  getNewHandTran,
  upImgForTransfer,
  hangTransferByStep,
  transferrecord,
  getMyAmountPrice
}