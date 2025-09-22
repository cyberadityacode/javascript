const colorsArray = [
  "white",
  "blue",
  "green",
  "red",
  "yellow",
  "purple",
  "orange",
  "black",
];

const fodderColorsArray = [
  "white",
  "blue",
  "green",
  "red",
  "yellow",
  "purple",
  "orange",
  "black",
  "white",
  "blue",
  "green",
  "red",
  "yellow",
  "purple",
  "orange",
  "black",
  "white",
];

// How many times does "red" appear in the fodderColorsArray?
const output = fodderColorsArray.filter((c) => c === "red").length;
console.log(output);
