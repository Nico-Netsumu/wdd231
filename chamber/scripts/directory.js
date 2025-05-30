// Display the current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// View toggle buttons
const gridButton = document.getElementById("grid");
const listButton = document.getElementById("list");
const directorySection = document.getElementById("directory");

gridButton.addEventListener("click", () => {
  directorySection.classList.add("grid-view");
  directorySection.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
  directorySection.classList.add("list-view");
  directorySection.classList.remove("grid-view");
});

// Fetch and display member data
async function fetchMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error("Error fetching member data:", error);
  }
}

function displayMembers(members) {
  directorySection.innerHTML = ""; // Clear the section

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="membership-level">Membership: ${getMembershipName(member.membership)}</p>
    `;

    directorySection.appendChild(card);
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

document.addEventListener('DOMContentLoaded', () => {
  const gridButton = document.getElementById('gridBtn');
  const listButton = document.getElementById('listBtn');
  const display = document.getElementById('members');

  fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
      displayMembers(data);
    });

  function displayMembers(members) {
    display.innerHTML = '';
    members.forEach(member => {
      const card = document.createElement('section');
      card.classList.add('member-card');
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
      `;
      display.appendChild(card);
    });
  }

  gridButton.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
  });

  listButton.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
  });

  // Footer updates
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
});


fetchMembers();

