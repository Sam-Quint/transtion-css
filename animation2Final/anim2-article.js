import { contenue } from "./anim2-stock.js";

customElements.define(
  "anim2-article",
  class extends HTMLElement {
    constructor() {
      super();
      this.contenue = contenue;
    }
    connectedCallback() {
      this.contenue.forEach((article) => {
        if (this.className == `A2-stop pos${article.position}`) {
          console.log(this);
          this.innerHTML = this.createArticle(article);
        }
      });
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
      console.log(text);
      return text;
    }
  }
);
