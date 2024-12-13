import "./animation-article.js";
import {
  bumperContent,
  contentAnimation1,
  contentAnimation2,
  contentAnimation3,
} from "./animation-stock.js";

// Définition du composant HorizontalScroll
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
customElements.define("horizontal-scroll", HorizontalScroll);

// Définition du composant StickyHeader
class StickyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="sticky-parallax-header">
        Scroll driven animation
      </div>
    `;
  }
}
customElements.define("sticky-header", StickyHeader);

// Définition du composant BumperSection
class BumperSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="bumper">
        ${this.innerHTML}
      </div>
    `;
  }
}
customElements.define("bumper-section", BumperSection);

// Définition du composant principal Anim1App
class Anim1App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <sticky-header></sticky-header>
      <horizontal-scroll>
        ${contentAnimation1
          .map(
            (item) => `
          <scroll-card title="${item.title}">
            ${item.content}
          </scroll-card>
        `
          )
          .join("")}
      </horizontal-scroll>
      ${bumperContent
        .map(
          (section) => `
        <bumper-section>
          <h2>${section.title}</h2>
          <p>${section.content}</p>
        </bumper-section>
      `
        )
        .join("")}
      <div id="compatibility"></div>
    `;

    this.initScrollAnimation();
  }

  initScrollAnimation() {
    const spaceHolder = document.querySelector(".space-holder");
    const horizontal = document.querySelector(".horizontal");
    const cards = document.querySelectorAll(".sample-card");

    // Vérification de compatibilité CSS
    const compatibilityText = CSS.supports("animation-timeline: scroll()")
      ? "Supporté 🎉"
      : "Non supporté 😢";
    document.getElementById("compatibility").textContent = compatibilityText;

    // Calcul dynamique de la hauteur
    spaceHolder.style.height = `${this.calcDynamicHeight(horizontal)}px`;

    window.addEventListener("scroll", () => {
      const sticky = document.querySelector(".sticky");
      const scrollOffset = sticky.offsetTop;

      horizontal.style.transform = `translateX(-${scrollOffset}px)`;

      cards.forEach((card, index) => {
        const cardOffset = scrollOffset - index * 300;

        const colorValue = Math.min(255, 50 + cardOffset / 5);
        card.style.backgroundColor = `rgb(${colorValue}, 50, 100)`;
      });
    });

    window.addEventListener("resize", () => {
      spaceHolder.style.height = `${this.calcDynamicHeight(horizontal)}px`;
    });
  }

  calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 150;
  }
}
customElements.define("anim1-app", Anim1App);

customElements.define(
  "anim2-app",
  class extends HTMLElement {
    connectedCallback() {
      this.articlesHTML = ``;
      contentAnimation2.forEach((anime2, index) => {
        var compt = index + 1;
        this.articlesHTML += `<anim2-article data-id="${compt}"></anim2-article>`;
      });

      this.innerHTML = `
        <div class="h1-titre">
            <h1>Un autre type d'animation</h1>
            <p>avec des keyframes et animation-timeline</p>
        </div>
        <div class="animation-2">    
            ${this.articlesHTML}
        </div>
      `;
    }
  }
);

customElements.define(
  "anim3-app",
  class extends HTMLElement {
    connectedCallback() {
      this.articlesHTML = ``;
      console.log(contentAnimation3.length);
      for (this.i = 1; this.i <= contentAnimation3.length; this.i++) {
        this.articlesHTML += `<anim3-article data-id="${this.i}"></anim3-article>`;
      }

      this.innerHTML = this.articlesHTML;
    }
  }
);
