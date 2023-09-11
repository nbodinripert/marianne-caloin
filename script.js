const loadingBar = document.getElementById("loading-bar");
const contentLoaded = document.getElementById("content-loaded");
const burgerBtn = document.getElementById("burger-btn");
const mobileNav = document.getElementById("mobile-nav");

// Toutes les images ont été chargées
window.addEventListener("load", () => {
  // Cacher la barre de progression
  loadingBar.style.display = "none";

  // Afficher le contenu du site
  contentLoaded.style.visibility = "visible";
});

burgerBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // Empêche la propagation de l'événement de fermeture au document
  mobileNav.classList.toggle("active");
});

// Ajoute un écouteur de clic au document pour fermer le menu en cliquant ailleurs
document.addEventListener("click", (event) => {
  if (!mobileNav.contains(event.target) && !burgerBtn.contains(event.target)) {
    mobileNav.classList.remove("active");
  }
});

// Ajoute un écouteur de redimensionnement d'écran pour fermer le menu
window.addEventListener("resize", () => {
  mobileNav.classList.remove("active");
});
