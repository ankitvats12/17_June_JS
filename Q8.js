function Factorial(number) {
    if (number == 0 || number == 1) {
      return 1;
    } else {
      return number * Factorial(number - 1);
    }
  }
  let input = 5;
  let fact = Factorial(input);
  console.log(fact);
  