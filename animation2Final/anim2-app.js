import "./anim2-article.js";
import { contenue } from "./anim2-stock.js";

customElements.define(
  "anim2-app",
  class extends HTMLElement {
    connectedCallback() {
      console.log("hola");
      console.log("hello");
      this.innerHTML = `
        <div>
            <h1>Un autre type d'animation</h1>
            <p>avec des keyframes et animation-timeline</p>
        </div>
        <div class="animation-2">
            <anim2-article class="A2-stop pos1"></anim2-article>
            <anim2-article class="A2-stop pos2"></anim2-article>
            <anim2-article class="A2-stop pos3"></anim2-article>
            <anim2-article class="A2-stop pos4"></anim2-article>
      </div>
      `;
    }
  }
);

// <article class="A2-stop">
//           <div class="A2-text">
//             <header>
//               <h2></h2>
//               <span class="indice"></span>
//             </header>
//             <p></p>
//             <p></p>
//             <code class="A2-code">
//                 <div class="type-code">
//                     <h5>CSS</h5>
//                     <p class="copie">copier le code</p>
//                 </div>
//                 <div class="exemple-code">

//                 </div>
//             </code>
//           </div>
//         </article>
//         <article class="A2-stop">
//           <div class="A2-text">
//             <header>
//               <h2></h2>
//               <span class="indice"></span>
//             </header>
//             <p></p>
//             <code class="A2-code">
//                 <div class="type-code">
//                     <h5>CSS</h5>
//                     <p class="copie">copier le code</p>
//                 </div>
//                 <div class="exemple-code">

//                 </div>
//             </code>
//           </div>
//         </article>
