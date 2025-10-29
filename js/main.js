document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const root = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleLabel = document.getElementById('theme-toggle-label');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      root.classList.add('dark');
      themeToggleBtn?.setAttribute('aria-pressed', 'true');
      if (themeToggleLabel) themeToggleLabel.textContent = 'Modo claro';
    } else {
      root.classList.remove('dark');
      themeToggleBtn?.setAttribute('aria-pressed', 'false');
      if (themeToggleLabel) themeToggleLabel.textContent = 'Modo oscuro';
    }
  };

  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark' || storedTheme === 'light') {
    applyTheme(storedTheme);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  themeToggleBtn?.addEventListener('click', () => {
    const isDark = root.classList.contains('dark');
    const next = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });

  // Scroll suave para anclas internas
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', href);
      }
    });
  });

  // Manejo básico del formulario con feedback (compatible con Formspree)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', async (e) => {
      if (form.getAttribute('action')?.includes('tu-endpoint')) {
        // Recordatorio para configurar el endpoint real
        status.textContent = 'Configura tu endpoint de Formspree antes de enviar.';
        e.preventDefault();
        return;
      }
      status.textContent = 'Enviando...';
    });
  }
});
