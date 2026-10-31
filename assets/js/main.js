// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Respect reduced-motion: stop looping clips and give the viewer controls instead
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('video[autoplay]').forEach((v) => {
    v.removeAttribute('autoplay');
    v.pause();
    v.controls = true;
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
