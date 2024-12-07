// {
//   position: "",
//   h2: "",
//   span: "",
//   p: "",
//   code: `<h6> blblbl {</h6>
//            <p class="newP"><color class="newC"> new properties : </color> value </p>
//            <p><color>properties : </color> value </p>
//            <p><color>properties : </color> value </p>
//          <h6> } </h6>
//          `,
// },

export const contenue = [
  {
    position: "1",
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
    position: "2",
    h2: "Le Texte",
    span: "une div de texte",
    p: "Ensuite on construit une div contenant notre texte",
    code: `<h6>.stop {</h6>
            <p class="newP"><color class="newC">--clip-horizontal:</color>100%;</p>
            <p class="newP"><color class="newC">--clip-vertical:</color>93%;</p>
            <p><color>position:</color>relative;</p>
            <p><color>min-height:</color>70vh;</p>
            <p><color>padding-top:</color>15vh;</p>
            <p><color>width:</color>calc(var(--timeline-width));</p>
            <p><color>padding-inline:</color>50px;</p>
          <h6>}</h6>
         `,
  },
  {
    position: "3",
    h2: "Le très",
    span: "::after",
    p: "Le très qui apparait est un after, On le construit pour créer les très pointillés qui apparaisse durant le scroll",
    code: `<h6>.stop::after {</h6>
                        <p><color>position:</color> absolute;</p>
                        <p><color>top:</color> 20px;</p>
                        <p><color>right:</color> 0px;</p>
                        <p><color>width:</color> 50%;</p>
                        <p><color>height:</color> 12%;</p>
                        <p><color>border-width:</color> 3px 0 0 3px;</p>
                        <p><color>border-style:</color> dashed;</p>
                        <p><color>border-color:</color> oklch(20% 0.5 313);</p>
                        <p><color>clip-path:</color> inset(0 0 var(--clip-vertical) var(--clip-horizontal));</p>
                        <p><color>transform-origin:</color> center;</p>
                        <p class="newP"><color class="newC">animation:</color> showLine linear both;</p>
                        <p class="newP"><color class="newC">animation-timeline:</color> view(block);</p>
                        <p class="newP"><color class="newC">animation-range:</color> cover 0% contain 40%;</p>
                        <p><color>content:</color> "";</p>
                        <h6>}</h6>`,
  },
  {
    position: "4",
    h2: "Les keyframes",
    span: "@keyframes",
    p: "Pour finir on fait les animations avec des keyframes",
    code: `<h6>@keyframes showLine {</h6>
                      <p>0% {</p>
                        <p class="newP"><color class="newC">--clip-horizontal</color>800%;</p>
                        <p class="newP"><color class="newC">--clip-vertical</color>75%;</p>
                        <p> }</p>
                      <p>60% {</p>
                        <p class="newP"><color class="newC">--clip-horizontal</color>0%;</p>
                        <p class="newP"><color class="newC">--clip-vertical</color>95%;</p>
                        <p>}</p>
                        <p>100% {</p>
                          <p class="newP"><color class="newC">--clip-horizontal</color>0%;</p>
                          <p class="newP"><color class="newC">--clip-vertical</color>0%;</p>
                      </p>}</p>
                    }
                    <h6>@keyframes slideIn {</h6>
                      <p>0% {</p>
                      <p class="newP"><color class="newC">translate</color>0 3%;</p>
                      <p class="newP"><color class="newC">--clip-vertical</color>100%;</p>
                      <p>}</p>
                      <p>100% {</p>
                      <p class="newP"><color class="newC">--clip-vertical</color>0%;</p>
                      <p>}</p>
                    }
         `,
  },
];
