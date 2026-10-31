// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Project tag filters
const chips = document.querySelectorAll('.filters .chip');
const cards = document.querySelectorAll('#project-grid .card');
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;
    chips.forEach((c) => c.classList.toggle('active', c === chip));
    cards.forEach((card) => {
      const tags = card.dataset.tags.split('|');
      card.hidden = filter !== 'all' && !tags.includes(filter);
    });
  });
});
