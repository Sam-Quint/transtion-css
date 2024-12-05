
const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
const cards = document.querySelectorAll('.sample-card');
document.addEventListener('DOMContentLoaded', function() {

    const compatibilityText = CSS.supports('animation-timeline: scroll()')
      ? 'Supporté 🎉'
      : 'Non supporté 😢';
    document.getElementById('compatibility').textContent = compatibilityText;

spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 150;
}


window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;

  const scrollOffset = sticky.offsetTop;
  cards.forEach((card, index) => {
    const cardOffset = scrollOffset - index * 300;
    const scaleValue = Math.max(1, 1.5 - cardOffset / 1000);
    const colorValue = Math.min(255, 50 + cardOffset / 5);

    card.style.transform = `scale(${scaleValue})`;
    card.style.backgroundColor = `rgb(${colorValue}, 50, 100)`;
  });
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});
});