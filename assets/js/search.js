document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.card');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const filter = e.target.value.toLowerCase().trim();

      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const text = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(filter) || text.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});