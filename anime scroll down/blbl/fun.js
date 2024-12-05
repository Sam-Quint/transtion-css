document.addEventListener("DOMContentLoaded", function () {
  let mini;
  let verti;
  let hori;
  let minitemp;
  document.addEventListener("keydown", function (event) {
    // Vérifie si la touche pressée est "Z"
    if (event.key === "z" || event.key === "Z") {
      mini = document.querySelector(".mini-cube");
      minitemp = window.getComputedStyle(mini);
      verti = minitemp.getPropertyValue("position-area").trim().split(" ")[0];
      hori = minitemp.getPropertyValue("position-area").trim().split(" ")[1];
      if (hori == undefined) {
        hori = verti;
      }
      console.log(verti);
      console.log(hori);
      if (verti == "center") {
        verti = "top";
      }
      console.log(verti);
      mini.style.setProperty("position-area", `${verti} ${hori}`);
    }
  });
});
