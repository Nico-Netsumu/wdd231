document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  const lastModified = document.getElementById("lastModified");
  const gridBtn = document.getElementById("gridBtn");
  const listBtn = document.getElementById("listBtn");
  const directory = document.getElementById("directory");

  year.textContent = new Date().getFullYear();
  lastModified.textContent = document.lastModified;

  gridBtn.addEventListener("click", () => {
    directory.classList.add("grid-view");
    directory.classList.remove("list-view");
  });

  listBtn.addEventListener("click", () => {
    directory.classList.add("list-view");
    directory.classList.remove("grid-view");
  });

  fetch("data/members.json")
    .then(response => response.json())
    .then(data => displayMembers(data))
    .catch(error => console.error("Failed to load member data:", error));

  function displayMembers(members) {
    directory.innerHTML = "";

    members.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("member-card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p>Membership: ${getMembershipName(member.membership)}</p>
      `;

      directory.appendChild(card);
    });
  }

  function getMembershipName(level) {
    switch (level) {
      case 1: return "Member";
      case 2: return "Silver";
      case 3: return "Gold";
      default: return "Unknown";
    }
  }
});
