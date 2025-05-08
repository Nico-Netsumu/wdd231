// scripts/navigation.js

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu");
  const navigation = document.querySelector(".navigation");

  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });

  // Wayfinding: add "active" class based on current page
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".navigation a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
