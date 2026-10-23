(function () {
  var root = document.documentElement;
  root.classList.add('js');

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  // Language
  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.dataset.setLang;
      root.dataset.lang = lang;
      root.lang = lang;
      store('lang', lang);
    });
  });

  // Theme
  var themeBtn = document.getElementById('theme-toggle');
  themeBtn.addEventListener('click', function () {
    var current = root.dataset.theme ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    store('theme', next);
  });

  // Mobile menu
  var nav = document.getElementById('nav');
  var menuBtn = document.getElementById('menu-toggle');
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Gallery scroll buttons
  var gallery = document.getElementById('gallery');
  document.querySelectorAll('[data-scroll]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      gallery.scrollBy({ left: Number(btn.dataset.scroll) * gallery.clientWidth * 0.8, behavior: 'smooth' });
    });
  });

  // Lightbox
  var box = document.getElementById('lightbox');
  if (box && typeof box.showModal === 'function') {
    var boxImg = box.querySelector('img');
    var boxCap = box.querySelector('.lb-cap');
    gallery.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      var img = btn.querySelector('img');
      var cap = btn.parentNode.querySelector('.cap [lang="' + root.dataset.lang + '"]');
      boxImg.src = img.src;
      boxImg.alt = img.alt;
      boxCap.textContent = cap ? cap.textContent : '';
      box.showModal();
    });
    box.addEventListener('click', function (e) {
      if (e.target === box) box.close();
    });
  }

  // Copy email
  var copyBtn = document.getElementById('copy-email');
  var status = document.getElementById('copy-status');
  copyBtn.addEventListener('click', function () {
    var email = copyBtn.dataset.email;
    var ja = root.dataset.lang === 'ja';
    if (!navigator.clipboard) {
      status.textContent = ja ? 'コピーできませんでした。アドレスを選択してコピーしてください。' : 'Copy failed. Select the address and copy it manually.';
      return;
    }
    navigator.clipboard.writeText(email).then(function () {
      status.textContent = ja ? 'メールアドレスをコピーしました。' : 'Email address copied.';
    }, function () {
      status.textContent = ja ? 'コピーできませんでした。アドレスを選択してコピーしてください。' : 'Copy failed. Select the address and copy it manually.';
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
