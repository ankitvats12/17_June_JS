function rmvDup(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (result.indexOf(str[i]) == -1) {
        result += str[i];
      }
    }
    return result;
  }
  let text = 'hello world';
console.log(rmvDup(text));