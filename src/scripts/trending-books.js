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

// Header Intro Code

const trendingBooksHeader = document.querySelector(".trending-books > h2");

const trendingBooksHeaderOptions = {
  root: null,
  rootMargin: '0px',
  threadshold: 0.3
};

const trendingBooksHeaderIntro = new IntersectionObserver(entries => {
  const entry = entries[0];

  if(!entry.isIntersecting) return;

  entry.target.classList.add("text-intro");
  entry.target.classList.remove("opacity-zero");

  trendingBooksHeaderIntro.unobserve(entry.target);
}, trendingBooksHeaderOptions);

trendingBooksHeaderIntro.observe(trendingBooksHeader);

// Books Intro Code

const trendingBooksContainer = document.querySelector(".books");

const trendingBooksContainerOptions = {
  root: null,
  rootMargin: '0px',
  threadshold: 0.8
};

const trendingBooksContainerIntro = new IntersectionObserver(entries => {
  const entry = entries[0];

  if(!entry.isIntersecting) return;

  entry.target.classList.add("books-intro");
  entry.target.classList.remove("opacity-zero");
  
  trendingBooksContainerIntro.unobserve(entry.target);
}, trendingBooksContainerOptions);

trendingBooksContainerIntro.observe(trendingBooksContainer);