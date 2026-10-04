(() => {
  const toggle = document.querySelector('.preview-theme-toggle');
  const preview = document.getElementById('hero-preview');
  if (!toggle || !preview) return;
  const lightSource = preview.getAttribute('src');
  const darkSource = 'assets/overview-home-dark.png';
  const description = preview.alt;
  const darkImage = new Image();
  darkImage.src = darkSource;
  toggle.hidden = false;
  toggle.addEventListener('click', (event) => {
    const selected = event.target.closest('button[data-theme]');
    if (!selected) return;
    const dark = selected.dataset.theme === 'dark';
    toggle.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button === selected));
    });
    preview.src = dark ? darkSource : lightSource;
    preview.alt = description + (dark ? ' Dark appearance.' : ' Light appearance.');
  });
})();
