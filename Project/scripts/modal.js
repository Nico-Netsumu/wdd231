// modal.js
export function showModal(item) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  const close = document.getElementById('modalClose');

  modalBody.innerHTML = `
    <h2>${item.name}</h2>
    <p><strong>Location:</strong> ${item.location}</p>
    <p><strong>Biome:</strong> ${item.biome}</p>
    <p><strong>Interesting Fact:</strong> ${item.fact}</p>
    <img src="${item.image}" alt="${item.name}" loading="lazy" />
  `;

  modal.style.display = 'flex';

  close.onclick = () => (modal.style.display = 'none');
  window.onclick = e => {
    if (e.target === modal) modal.style.display = 'none';
  };
}
