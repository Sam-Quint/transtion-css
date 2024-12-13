import { contentAnimation2, contentAnimation3 } from "./animation-stock.js";

export default class ScrollCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "";
    this.innerHTML = `
      <article class="sample-card">
        <h3>${title}</h3>
        <div>${this.innerHTML}</div>
      </article>
    `;
  }
}
customElements.define("scroll-card", ScrollCard);

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

customElements.define(
  "anim3-article",
  class extends HTMLElement {
    connectedCallback() {
      let contentAnimation3Find = contentAnimation3.find(
        (item) => item.id === this.dataset.id
      );
      this.innerHTML = this.createArticle(contentAnimation3Find);
    }

    createArticle(datas) {
      let text = `
        <h1>
            <span>${datas.span1}</span>
            <span>${datas.span2}</span>
          </h1>
          <div class="code-cont">
            <code>
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
