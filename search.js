document.getElementById('searchInput').addEventListener('keyup', function() {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll('.topic-card');

  cards.forEach(card => {
    let title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(filter)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});