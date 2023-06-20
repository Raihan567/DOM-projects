/**
 * Project Requirements: Random color generate by clicking following the button
 */

// step 1 : collect all necessary reference
const root = document.querySelector("#root");
const btn = document.querySelector("#change-btn");

btn.addEventListener("click", function () {
  const bgColor = randomColorGenerate();
  root.style.backgroundColor = bgColor;
});
// step 2 : create a random color generate function
function randomColorGenerate() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
// step 3 : handle click event handler
