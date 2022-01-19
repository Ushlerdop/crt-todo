function sleep(ms, token = {}) {
  return new Promise((resolve, reject) => {
    let timerID = setTimeout(resolve, ms);    
    token.cancel = () => {
      clearTimeout(timerID);
    }
  });
}

export default sleep