const container = document.querySelector(".container");
const boxes = document.getElementsByClassName("box");

for (let i = 0; i < 800; i++) {
  const box = document.createElement("div");
  box.className = "box";
  container.append(box);
}

Array.from(boxes).forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = genColor();
  });
  box.addEventListener("mouseout", () => {
    box.removeAttribute("style");
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