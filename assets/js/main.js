// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Home page media collage: random project media, videos/GIFs in the big tiles
const reel = document.getElementById('reel');
const reelData = document.getElementById('reel-data');
if (reel && reelData) {
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  const isVideo = (src) => /\.(mp4|webm)(\?|$)/i.test(src);
  const isMotion = (src) => isVideo(src) || /\.gif(\?|$)/i.test(src);

  const items = JSON.parse(reelData.textContent);
  const motion = shuffle(items.filter((m) => isMotion(m.src)));
  const stills = shuffle(items.filter((m) => !isMotion(m.src)));
  const pool = motion.concat(stills);

  // Tile 1 (tall) and tile 4 (wide) are the large slots, so fill them first
  const slots = [];
  [0, 3, 1, 2].forEach((slot, i) => { if (pool[i]) slots[slot] = pool[i]; });

  slots.filter(Boolean).forEach((m) => {
    const tile = document.createElement('a');
    tile.className = 'reel-tile';
    tile.href = m.url;
    let media;
    if (isVideo(m.src)) {
      media = document.createElement('video');
      media.muted = true;
      media.loop = true;
      media.autoplay = true;
      media.playsInline = true;
      media.setAttribute('autoplay', '');
      media.setAttribute('muted', '');
      media.setAttribute('playsinline', '');
    } else {
      media = document.createElement('img');
      media.alt = m.title;
    }
    media.src = m.src;
    const label = document.createElement('span');
    label.className = 'reel-label';
    label.textContent = m.title;
    tile.append(media, label);
    reel.append(tile);
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
