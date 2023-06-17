function reverseStr(str) {
    return str.split('').reverse().join('');
  }
  
  let input = "OpenAI";
  let rev = reverseStr(input);
  console.log(rev);
  