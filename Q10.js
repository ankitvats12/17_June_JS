function Large(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  let arr = [3, 6, 2, 56, 32, 5, 89, 32];
 console.log(Large(arr));