export default class ScrollCard extends HTMLElement {
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
