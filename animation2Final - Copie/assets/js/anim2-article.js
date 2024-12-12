import { contentAnimation2 } from "./anim2-stock.js";

customElements.define(
  "anim2-article",
  class extends HTMLElement {
    connectedCallback() {
      let contentAnimation2Find = contentAnimation2.find(
        (item) => item.id === this.dataset.id
      );
      this.innerHTML = this.createArticle(contentAnimation2Find);
    }

    createArticle(datas) {
      let text = `
        <div class="A2-text">
            <header>
              <h2>${datas.h2}</h2>
              <span class="indice">${datas.span}</span>
            </header>
            <p>${datas.p}</p>
            <code class="A2-code">
              <div class="type-code"> 
                <h5>CSS</h5>
                <p class="copie">copier le code</p>
              </div>
              <div class="exemple-code">
                ${datas.code}
              </div>
            </code>
            
          </div>
        `;
      return text;
    }
  }
);
