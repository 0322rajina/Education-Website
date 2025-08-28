// Accordion Functionality
const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    // Collapse other items
    items.forEach(i => {
      if(i !== item) i.classList.remove('active');
    });
    // Toggle current
    item.classList.toggle('active');
  });
});