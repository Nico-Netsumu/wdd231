// scripts/date.js

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentyear");
  const lastModified = document.getElementById("lastModified");

  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  lastModified.textContent = `Last Modified: ${document.lastModified}`;
});
