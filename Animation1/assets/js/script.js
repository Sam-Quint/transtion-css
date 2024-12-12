class StickyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="sticky-parallax-header">
        Scroll driven animation
      </div>
    `;
  }
}
customElements.define('sticky-header', StickyHeader);

class BumperSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="bumper">
        ${this.innerHTML}
      </div>
    `;
  }
}
customElements.define('bumper-section', BumperSection);

class HorizontalScroll extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="space-holder">
        <div class="sticky">
          <div class="horizontal">
            <section role="feed" class="cards">
              ${this.innerHTML}
            </section>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('horizontal-scroll', HorizontalScroll);

class ScrollCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    this.innerHTML = `
      <article class="sample-card">
        <h3>${title}</h3>
        <div>${this.innerHTML}</div>
      </article>
    `;
  }
}
customElements.define('scroll-card', ScrollCard);

document.addEventListener('DOMContentLoaded', function () {
  const spaceHolder = document.querySelector('.space-holder');
  const horizontal = document.querySelector('.horizontal');
  const cards = document.querySelectorAll('.sample-card');

  // Compatibilité CSS
  const compatibilityText = CSS.supports('animation-timeline: scroll()')
    ? 'Supporté 🎉'
    : 'Non supporté 😢';
  document.getElementById('compatibility').textContent = compatibilityText;

  // Calcul dynamique de la hauteur
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

  function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 150;
  }

  window.addEventListener('scroll', () => {
    const sticky = document.querySelector('.sticky');
    const scrollOffset = sticky.offsetTop;


    horizontal.style.transform = `translateX(-${scrollOffset}px)`;

    // Animation des cartes
    cards.forEach((card, index) => {
      const cardOffset = scrollOffset - index * 300;

      // Changement de couleur
      const colorValue = Math.min(255, 50 + cardOffset / 5);
      card.style.backgroundColor = `rgb(${colorValue}, 50, 100)`;

    });
  });

  window.addEventListener('resize', () => {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
  });
});
