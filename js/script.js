const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  if (hamburger.innerText == "☰") {
    hamburger.innerText = "✕";
  }

  else if (hamburger.innerText == "✕") {
    hamburger.innerText = "☰";
  }
}
