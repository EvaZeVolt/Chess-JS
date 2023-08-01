export function RenderGame() {
  console.log('Rendering');
  ctx.fillRect(0, 0, canvas_width, canvas_height);

  ctx.fillStyle = 'red';
  ctx.fillRect(0, 100, 100, 100);
}
