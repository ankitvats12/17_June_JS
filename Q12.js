function countWords(sentence) {
    let words = sentence.split(' ');
    let wordCount = {};
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
  
    return wordCount;
  }
  let sentence = 'This is a sentence is a test';
  console.log(countWords(sentence)); 
  