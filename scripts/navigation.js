// scripts/navigation.js

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menu-button");
  const navMenu = document.querySelector(".nav-menu");

  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
  });
});

  // Wayfinding: add "active" class based on current page
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".navigation a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
