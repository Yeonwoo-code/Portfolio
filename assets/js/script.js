function filterPosts(category) {
  const cards = document.querySelectorAll('.project-card');
  
  cards.forEach(card => {
    const categories = card.getAttribute('data-category').split(' ');
    
    if (category === 'all' || categories.includes(category)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}