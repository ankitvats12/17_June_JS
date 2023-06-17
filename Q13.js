function EvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  let arr = [1, 2, 3, 4, 5, 6];
console.log(EvenNumbers(arr));