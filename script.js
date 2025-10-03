//your JS code here. If required.
const randomColor = () => {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  return `rgb(${red}, ${green}, ${blue})`;
};
const allSquares = document.querySelectorAll(".square");
Array.from(allSquares).forEach((square) => {
  square.addEventListener("mouseover", function () {
    this.style.backgroundColor = randomColor();
    this.style.cursor = "pointer";
  });
  square.addEventListener("mouseout", function () {
    this.style.backgroundColor = "rgb(29, 29, 29)";
  });
});
