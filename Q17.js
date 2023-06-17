function Pangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = new Set();
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase();
      if (alphabet.includes(char)) {
        letters.add(char);
      }
    }
    return letters.size == alphabet.length;
  }
  const sentence = 'The quick brown fox jumps over the lazy dog';
console.log(Pangram(sentence));