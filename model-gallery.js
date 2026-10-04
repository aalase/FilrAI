(() => {
  const track = document.getElementById('model-slides');
  const controls = document.querySelector('.model-gallery-dots');
  if (!track || !controls) return;
  const dots = [...controls.querySelectorAll('button')];
  const slides = [...track.children];
  const arrows = [...document.querySelectorAll('.gallery-arrow')];
  let current = 0;
  const updateArrows = () => arrows.forEach(button => {
    button.disabled = button.classList.contains('gallery-next') ? current === slides.length - 1 : current === 0;
  });
  const show = index => {
    const next = Math.max(0, Math.min(index, slides.length - 1));
    track.scrollTo({ left: next * track.clientWidth, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  controls.hidden = false;
  updateArrows();
  arrows.forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => show(current + (button.classList.contains('gallery-next') ? 1 : -1)));
  });
  dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));
  track.addEventListener('scroll', () => {
    current = Math.max(0, Math.min(Math.round(track.scrollLeft / track.clientWidth), slides.length - 1));
    updateArrows();
    dots.forEach((dot, index) => {
      if (index === current) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  }, { passive: true });
  track.addEventListener('keydown', event => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    show(current + (event.key === 'ArrowRight' ? 1 : -1));
  });
  new ResizeObserver(() => track.scrollTo({ left: current * track.clientWidth, behavior: 'instant' })).observe(track);
})();
