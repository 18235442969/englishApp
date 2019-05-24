import service from '../utils/service';

const url = {
  getTransferConfig: 'Market/GetTransferConfig',
  newHandTransfer: 'Market/NewHandTransfer',
  hangTransferByCode: 'Market/HangTransferByCode',
  getNewHandTran: 'Market/GetNewHandTran',
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

export default{
  getTransferConfig,
  newHandTransfer,
  hangTransferByCode,
  getNewHandTran,

}