import service from '../utils/service';

const url = {
  thesaurus: 'Word/Thesaurus',
  setThesaurus: 'Word/SetThesaurus',
  startStudy: 'Word/StartStudy',
  submitWord: 'Word/SubmitWord'
}

const thesaurus = () => {
  let params = {
    url: url.thesaurus,
  }
  return service(params);
}

const setThesaurus = ({id}) => {
  let params = {
    url: url.setThesaurus,
    data: {
      id
    }
  }
  return service(params);
}

const startStudy = ({id}) => {
  let params = {
    url: url.startStudy,
    data: {
      id
    }
  }
  return service(params);
}

const submitWord = ({id}) => {
  let params = {
    url: url.submitWord,
    data: {
      id
    }
  }
  return service(params);
}

export default{
  thesaurus,
  setThesaurus,
  startStudy,
  submitWord
}