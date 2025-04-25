const container = document.querySelector(".books");

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;

  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => isDown = false );
container.addEventListener('mouseup', () => isDown = false );

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1.5;

  container.scrollLeft = scrollLeft - walk;
});

container.addEventListener('touchstart', (e) => {
  isDown = true;

  startX = e.touches[0].pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('touchend', () => isDown = false );

container.addEventListener('touchmove', (e) => {
  if (!isDown) return;

  const x = e.touches[0].pageX - container.offsetLeft;
  const walk = (x - startX) * 1.5;

  container.scrollLeft = scrollLeft - walk;
});