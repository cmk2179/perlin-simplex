import Simplex from "../index.js";

const simplex = new Simplex();

for (let y = 40; y > 0; y--) {
  let line = "";
  for (let x = 80; x > 0; x--) {
    line += valToChar(simplex.noise(x / 50, y / 50));
  }
  console.log(line);
}

function valToChar(val) {
  const colors =
    "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ".split(
      ""
    );
  const nVal = (val + 1) / 2;
  const idx = Math.floor(nVal * colors.length);
  return colors[idx];
}
