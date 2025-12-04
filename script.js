const burgerBtn = document.getElementById("burger-btn");
const mobileNav = document.getElementById("mobile-nav");

window.addEventListener("load", () => {
  // Ajouter la classe active au lien de navigation correspondant
  highlightCurrentPage();
});

function highlightCurrentPage() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("#navigation a, #mobile-nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active-page");
    } else {
      link.classList.remove("active-page");
    }
  });
}

burgerBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  mobileNav.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!mobileNav.contains(event.target) && !burgerBtn.contains(event.target)) {
    mobileNav.classList.remove("active");
  }
});

window.addEventListener("resize", () => {
  mobileNav.classList.remove("active");
});
