function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  let input = 7;
  let result = checkEvenOrOdd(input);
  console.log(result); 
  