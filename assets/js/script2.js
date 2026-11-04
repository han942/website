// Single-page portfolio behaviours shared by the English and Korean pages.
// Theme toggle, footer year, and scroll-spy
// that highlights the active section in the top navigation.
'use strict';

(function () {
  var d = document.documentElement;

  /* ---------------------------- Theme toggle ---------------------------- */
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = d.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      d.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    });
  }

  /* ------------------------------ Footer year -------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ------------------------- Section navigation ------------------------ */
  var links = Array.prototype.slice.call(document.querySelectorAll('.section-nav__link'));
  var linkById = {};
  var sections = [];

  links.forEach(function (link) {
    var id = (link.getAttribute('href') || '').replace('#', '');
    var section = id ? document.getElementById(id) : null;
    if (section) {
      linkById[id] = link;
      sections.push(section);
    }
  });

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) { link.classList.remove('active'); });
        var active = linkById[entry.target.id];
        if (active) active.classList.add('active');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
  }
})();
