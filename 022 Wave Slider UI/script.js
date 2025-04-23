const rangeInput = document.querySelector("#range");
const rangeVal = document.querySelector("#range-val");
const water = document.querySelector(".water");

rangeInput.addEventListener("input", (e) => {
  rangeVal.textContent = e.target.value;
  //lets move this label along x axis
  rangeVal.style.left = `${e.target.value}px`;

  // now updating the water wave....
  /* 
    To implement that, I'll use the similar
    custom scale function which i used in 
    my blur background code project
    */
  const scaleMapValue = scale(e.target.value, 0, 100, -95, -200);
  //    console.log(scaleMapValue);
  water.style.setProperty("--before-top", scaleMapValue + "%");
});

const scale = (val, in_min, in_max, out_min, out_max) => {
  return ((val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
