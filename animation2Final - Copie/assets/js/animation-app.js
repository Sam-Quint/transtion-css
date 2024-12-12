import "./animation-article.js";
import { contentAnimation2, contentAnimation3 } from "./animation-stock.js";

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
