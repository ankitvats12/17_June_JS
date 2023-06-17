function Avg(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let average = sum / numbers.length;
    return average;
  }
  let input = [2, 4, 6, 8];
  let average = Avg(input);
  console.log(average);
  