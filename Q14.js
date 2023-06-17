function capWord(str) {
    return str.replace(/\b\w/g, function(l) {
      return l.toUpperCase();
    });
  }
  let sentence = 'this is a test';
console.log(capWord(sentence));