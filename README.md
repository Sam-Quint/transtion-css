# transtion-css



document.addEventListener("DOMContentLoaded", function () {
    if (CSS.supports("animation-timeline", "scroll()")) {
        console.log("Le navigateur supporte l'API Fetch !");
        // Fonctionnalité supportée
    } else {
        console.log("Le navigateur ne supporte pas l'API Fetch.");
        // Fournir un fallback ou un message
        alert("Votre navigateur est obsolète. Certaines fonctionnalités pourraient ne pas fonctionner correctement.");
    }
});
