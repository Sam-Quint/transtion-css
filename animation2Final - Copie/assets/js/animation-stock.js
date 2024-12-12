export const contentAnimation2 = [
  {
    id: "1",
    h2: "Déclaration CSS",
    span: "On Déclare des variables CSS",
    p: "On commence par déclarer des variables CSS afin d'avoir une donnée stable que l'on puisse utilisé comme référence",
    code: `<h6>@property --clip-vertical {</h6>
                <p><color>syntax :</color>"&lt;percentage&gt;"; </p>
                <p><color>initial-value :</color>95%;</p>
                <p><color>inherits :</color>false;</p>
              <h6>}</h6>
              
              <h6>@property --clip-horizontal {</h6>
                <p><color>syntax :</color>" &lt;percentage&gt; ";</p>
                <p><color>initial-value :</color>100%;</p>
                <p><color>inherits :</color>false;</p>
              <h6>}</h6>`,
  },
  {
    id: "2",
    h2: "Le Texte",
    span: "une div de texte",
    p: "Ensuite on construit une div contenant notre texte",
    code: `<h6>.stop {</h6>
            <p class="newP"><color >--clip-horizontal:</color>100%;</p>
            <p class="newP"><color >--clip-vertical:</color>93%;</p>
            <p><color>id:</color>relative;</p>
            <p><color>min-height:</color>70vh;</p>
            <p><color>padding-top:</color>15vh;</p>
            <p><color>width:</color>calc(var(--timeline-width));</p>
            <p><color>padding-inline:</color>50px;</p>
          <h6>}</h6>
         `,
  },
  {
    id: "3",
    h2: "Le très",
    span: "::after",
    p: "Le très qui apparait est un after, On le construit pour créer les très pointillés qui apparaisse durant le scroll",
    code: `<h6>.stop::after {</h6>
                        <p><color>id:</color> absolute;</p>
                        <p><color>top:</color> 20px;</p>
                        <p><color>right:</color> 0px;</p>
                        <p><color>width:</color> 50%;</p>
                        <p><color>height:</color> 12%;</p>
                        <p><color>border-width:</color> 3px 0 0 3px;</p>
                        <p><color>border-style:</color> dashed;</p>
                        <p><color>border-color:</color> oklch(20% 0.5 313);</p>
                        <p><color>clip-path:</color> inset(0 0 var(--clip-vertical) var(--clip-horizontal));</p>
                        <p><color>transform-origin:</color> center;</p>
                        <p class="newP"><color >animation:</color> showLine linear both;</p>
                        <p class="newP"><color >animation-timeline:</color> view(block);</p>
                        <p class="newP"><color >animation-range:</color> cover 0% contain 40%;</p>
                        <p><color>content:</color> "";</p>
                        <h6>}</h6>`,
  },
  {
    id: "4",
    h2: "Les keyframes",
    span: "@keyframes",
    p: "Pour finir on fait les animations avec des keyframes, elles vont permettre de construire l'animation",
    code: `<h6>@keyframes showLine {</h6>
                      <p>0% {</p>
                        <p class="newP"><color >--clip-horizontal</color>800%;</p>
                        <p class="newP"><color >--clip-vertical</color>75%;</p>
                        <p> }</p>
                      <p>60% {</p>
                        <p class="newP"><color >--clip-horizontal</color>0%;</p>
                        <p class="newP"><color >--clip-vertical</color>95%;</p>
                        <p>}</p>
                        <p>100% {</p>
                          <p class="newP"><color >--clip-horizontal</color>0%;</p>
                          <p class="newP"><color >--clip-vertical</color>0%;</p>
                      </p>}</p>
                    }
                    <h6>@keyframes slideIn {</h6>
                      <p>0% {</p>
                      <p class="newP"><color >translate</color>0 3%;</p>
                      <p class="newP"><color >--clip-vertical</color>100%;</p>
                      <p>}</p>
                      <p>100% {</p>
                      <p class="newP"><color >--clip-vertical</color>0%;</p>
                      <p>}</p>
                    <h6>}</h6>
         `,
  },
  {
    id: "5",
    h2: "Animation",
    span: "animation: showLine linear both;",
    p: " Applique une animation définie par des règles @keyframes à un élément.",
    code: `
          <p><color> showLine </color> Trouve l'animation que l'on souhaite exécuter</p>
          <p><color> 2s </color> Determine la durée de l'animation ( ou alors on utilise "animation-timeline")</p>
          <p><color> linear </color> Explique a quelle vitesse le code s'execute (ici uniformément durant tout l'animation)</p>
          <p><color> both </color> Détermine comment les styles de l'animation affectent l'élément avant et après son exécution. </p>
         `,
  },
  {
    id: "6",
    h2: "Animation-timeline",
    span: "animation-timeline: view(block);",
    p: "Permet de spécifier une timeline personnalisée pour synchroniser une animation.",
    code: `
        <h6>view(block)</h6>
          <p><color> view</color>  Fait référence à une timeline basée sur la visibilité de l'élément dans la fenêtre d'affichage (viewport).</p>
          <p><color> block </color> Indique le type de comportement à suivre. Cela peut être lié au moment où un élément devient visible dans le bloc de défilement ou au comportement par rapport à son parent.</p>
         `,
  },
  {
    id: "7",
    h2: "animation-range",
    span: "animation-range: cover 0% contain 40%;",
    p: "Permet de définir une plage (ou range) pour l'animation en fonction de la progression ou de la visibilité d'un élément.",
    code: `
          <p><color> cover</color>  L'animation est active pendant toute la plage spécifiée par cover. Cela inclut généralement le moment où l'élément est complètement visible dans le viewport.</p>
          <p><color> 0% </color> L'animation commence dès que l'élément commence à apparaître. </p>
          <p><color> contain</color> L'animation est active pendant la plage où une partie de l'élément est visible.</p>
          <p><color> 40% </color> L'animation progresse jusqu'à ce que 40% de l'élément soit visible. </p>
         `,
  },
  {
    id: "8",
    h2: "@keyframes",
    span: "Les Keyframes",
    p: "Définis les étapes d'une animation.",
    code: `
          <h6>@keyframes showLine {</h6>
              <p>0% {</p>
                  <p ><color>background-color :</color> red;</p>
              <p> }</p>
              <p>50% {</p>
                  <p ><color>background-color :</color> green;</p>
              <p>}</p>
              <p>100% {</p>
                  <p ><color>background-color :</color> blue;</p>
              <p>}</p>
          <h6> } </h6>

          <p> à 0% (début) de l'animation le background sera rouge,</p> 
          <p> à partir de 50% il sera vert </p>
          <p>et a 100% (fin) de l'animation il sera bleu.</p>
         `,
  },
];
export const contentAnimation3 = [
  {
    id: "1",
    span1: "Il existe aussi",
    span2: "d'autres animations </br> CSS",
    code: `
          <h6>@keyframes Zoom70-Fade-Out {</h6>
              <p>0% {</p>
                  <p><color>font-size :</color>0px;</p>
              <p> }</p>
              <p>50% {</p>
                  <p><color>font-size :</color> 35px;</p>
                  <p><color>opacity :</color> 1;</p>
              <p>}</p>
              <p>80% {</p>
                  <p><color>opacity :</color> 1;</p>
              <p>}</p>
              <p>100% {</p>
                  <p><color>opacity :</color> 0;</p>
              <p>}</p>
          <h6> } </h6>
         `,
  },
  {
    id: "2",
    span1: "Toujours avec le même principe",
    span2: "La même structure",
    code: `
          <h6>@keyframes fade-in-out {</h6>
              <p>0% {</p>
                  <p><color>opacity :</color> 0;</p>
              <p> }</p>
              <p>40% {</p>
                  <p><color>opacity :</color> 1;</p>
              <p>}</p>
              <p>60% {</p>
                  <p><color>opacity :</color> 1;</p>
              <p>}</p>
              <p>100% {</p>
                  <p><color>opacity :</color> 0;</p>
              <p>}</p>
          <h6> } </h6>
         `,
  },
  {
    id: "3",
    span1: "Mais des valeurs différentes",
    span2: "Surtout les @keyframes",
    code: `
          <h6>@keyframes slide-in-out {</h6>
                <p>0% {</p>
                  <p><color>transform:</color>translateX(-400px);</p>
                <p> }</p>
                <p>45% {</p>
                  <p><color>transform:</color>translateX(0px);</p>
                <p> }</p>
                <p>70% {</p>
                  <p><color>transform:</color>translateX(0px);</p>
                <p> }</p>
                <p>100% {</p>
                  <p><color>transform:</color>translateX(40%);</p>
                <p> }</p>
                <h6>}</h6>
         `,
  },
];
