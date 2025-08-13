const filterBadWords = (text) => {
  // Step 1 - List of Bad Words
  const badWords = ["bw1", "bw2", "bw3"];

  //   Step 2- Replace all bad words with ***
  return badWords.reduce((filteredText, word) => {
    const regex = new RegExp(word, "gi"); //gi= all matches , i= ignore case
    return filteredText.replace(regex, "***");
  }, text);
};

// Example Usage
const userMessage = "This is a bw1 and bw2";
const clearMessage = filterBadWords(userMessage);

console.log(clearMessage);
