function FibSeq(limit) {
    const sequence = [0, 1];
    for (let i = 2; i <= limit; i++) {
      const nextNum = sequence[i - 1] + sequence[i - 2];
      if (nextNum <= limit) {
        sequence.push(nextNum);
      } else {
        break;
      }
    }
    return sequence;
  }
  const limit = 10;
console.log(FibSeq(limit));