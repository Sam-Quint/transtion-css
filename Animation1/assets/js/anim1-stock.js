export const contentAnimation1 = [
  {
    id: "1",
    title: "Animation Dynamique",
    content: `
      <p>Cette carte illustre une animation dynamique avec du JS et du CSS.</p>
    `
  },
  {
    id: "2",
    title: "Changement de couleur de fond",
    content: `
      <p>Lors du défilement, les cartes changent de couleur en fonction de leur position. Cela ajoute un effet visuel fluide et interactif qui guide l'utilisateur au fil du contenu.</p>
    `
  },
  {
    id: "3",
    title: "Code pour le changement de couleur",
    content: `
      <code class="A2-code">
        <div class="type-code">
          <h5>JavaScript</h5>
          <p class="copie">copier le code</p>
        </div>
        <div class="exemple-code">
          <h6>Code dynamique :</h6>
          <p><color>const</color> colorValue = </p>
          <p><color>Math.min</color>(255, 50 + cardOffset / 5);</p>
          <p>card.style.backgroundColor = </p>
          <p><color>'rgb({colorValue}, 50, 100)'</color>;</p>
        </div>
      </code>
    `
  },
  {
    id: "4",
    title: "Fin du défilement",
    content: `
      <p>Lorsque le défilement atteint la fin, les cartes cessent de changer de couleur.</p>
    `
  }
];
export const bumperContent = [
  {
    title: "Comment ça fonctionne ?",
    content: `
      Lorsque l'utilisateur fait défiler la page, l'animation se déclenche ou
      se met à jour en fonction de la position de défilement actuelle. Cela
      crée un effet visuel interactif où l'animation réagit aux actions de
      l'utilisateur, augmentant l'immersion et l'interactivité.
    `
  },
  {
    title: "Conclusion",
    content: `
      Les "scroll driven animations" apportent fluidité et interactivité à
      l'expérience utilisateur. Elles relient directement le défilement aux
      animations, rendant l'expérience immersive.
    `
  },
  // {
  //   title: "Définition",
  //   content: `
  //     Une "Scroll driven animation" (animation pilotée par le défilement) est
  //     une technique qui permet de synchroniser des animations ou des changements
  //     visuels avec l'action de défilement de la page.
  //   `
  // }
];