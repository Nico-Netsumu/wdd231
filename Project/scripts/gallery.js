// gallery.js
import { showModal } from './modal.js';

const container = document.getElementById('cardContainer');
const storageKey = 'natureFavorites';

async function fetchData() {
  try {
    const response = await fetch('nature.json');
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    renderCards(data);
  } catch (err) {
    container.innerHTML = `<p>Error loading data: ${err.message}</p>`;
  }
}

function renderCards(data) {
  container.innerHTML = '';
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <h2>${item.name}</h2>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Biome:</strong> ${item.biome}</p>
      <p><strong>Highlight:</strong> ${item.highlight}</p>
      <button data-id="${item.id}">More Info</button>
    `;

    card.querySelector('button').addEventListener('click', () => {
      showModal(item);
      saveToLocal(item.id);
    });

    container.appendChild(card);
  });
}

function saveToLocal(id) {
  let favorites = JSON.parse(localStorage.getItem(storageKey)) || [];
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem(storageKey, JSON.stringify(favorites));
  }
}

fetchData();
