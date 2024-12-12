import "./anim2-article.js";
import { contentAnimation2 } from "./anim2-stock.js";

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
        <div>
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
