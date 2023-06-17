function Squares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] ** 2;
    }
    return sum;
  }
  let numbers = [1, 2, 3, 4];
console.log(Squares(numbers));