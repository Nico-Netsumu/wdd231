document.addEventListener("DOMContentLoaded", () => {
  fetch("data/discover.json")
    .then(res => res.json())
    .then(data => renderCards(data));

  handleLastVisit();
});

function renderCards(locations) {
  const container = document.querySelector(".cards");
  locations.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${place.name}</h2>
      <figure>
        <img src="../images/${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
      </figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button>Learn More</button>
    `;

    container.appendChild(card);
  });
}

function handleLastVisit() {
  const msg = document.getElementById("visit-message");
  const now = Date.now();
  const lastVisit = localStorage.getItem("lastVisit");

  if (!lastVisit) {
    msg.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    if (days < 1) {
      msg.textContent = "Back so soon! Awesome!";
    } else {
      msg.textContent = `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
}
