document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('#cardContainer .card');
  
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
  
      cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const author = card.querySelector('.author').textContent.toLowerCase();
  
        if (title.includes(filter) || author.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
  
  console.log('Hello from script.js');