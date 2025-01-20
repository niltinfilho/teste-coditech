const slider = document.querySelector('.flex.snap-x');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

const scrollToIndex = (index) => {
  slider.scrollTo({
    left: slider.offsetWidth * index,
    behavior: 'smooth',
  });
};

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + 4) % 4;
  scrollToIndex(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % 4;
  scrollToIndex(currentIndex);
});