/**
 * Project requirements: Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */
// step 1: Collect all reference
const root = document.getElementById("root");
const btn = document.getElementById("change-btn");
const output = document.getElementById("output");

btn.addEventListener("click", function () {
  const bgColor = randomHexColorGenerate();
  root.style.backgroundColor = bgColor;
  output.value = bgColor;
});
// step 2: Create a random generate hex color function
const randomHexColorGenerate = function () {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};
// step 3: handle click event function
