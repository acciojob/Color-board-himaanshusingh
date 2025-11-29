const container = document.querySelector(".container");
const squares = document.getElementsByClassName("square");

for (let i = 0; i < 800; i++) {
  const square = document.createElement("div");
  square.className = "square";
  container.append(square);
}

Array.from(squares).forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = genColor();
  });
  square.addEventListener("mouseout", () => {
    square.removeAttribute("style");
  });
});

function randomColor() {
  return Math.floor(Math.random() * 16).toString(16);
}

function genColor() {
  const a = randomColor();
  const b = randomColor();
  const c = randomColor();
  const d = randomColor();
  const e = randomColor();
  const f = randomColor();
  return `#${a}${b}${c}${d}${e}${f}`;
}