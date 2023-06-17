function Palindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  let input = "radar";
  let result = Palindrome(input);
  console.log(result); 
  