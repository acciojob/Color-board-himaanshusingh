//your JS code here. If required.
const randomColor = () => {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  return `rgb(${red}, ${green}, ${blue})`;
};
const allSquares = document.querySelectorAll(".square");
allSquares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = randomColor();
    square.style.cursor = "pointer";
  });
  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "rgb(29, 29, 29)";
  });
});
