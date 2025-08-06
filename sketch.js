let spacing = 20;
let cellSize = 15;
let offset = 15;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(0);

  let from = color(218, 165, 32);  // goldenrod
  let to = color(72, 61, 139);     // dark slate blue

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      let offsetX = map(noise(x / 200 + frameCount / 100), 0, 1, -offset, offset);
      let offsetY = map(noise(y / 200 + frameCount / 100), 0, 1, -offset, offset);
      let dotScale = noise(x / 100 + frameCount / 100, y / 100 + frameCount / 100);

      let interp = map(dotScale, 0, 1, 0, 1);
      fill(lerpColor(from, to, interp));

      rect(x + offsetX, y + offsetY, cellSize * dotScale, cellSize * dotScale);
    }
  }
}
