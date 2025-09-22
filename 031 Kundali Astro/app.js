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

// I want to count how many times each color in colorsArray appears in fodderColorsArray

const colorCounts = {};

colorsArray.forEach((color) => {
  colorCounts[color] = fodderColorsArray.filter((c) => c === color).length;
});

console.log(colorCounts);
