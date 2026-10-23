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

  // Speech video: play in place instead of leaving the page (the link still works without JS)
  var video = document.querySelector('.press-video');
  if (video) {
    video.addEventListener('click', function (e) {
      e.preventDefault();
      var id = new URL(video.href).searchParams.get('v');
      var frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      frame.title = video.querySelector('img').alt;
      frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin'; // YouTube refuses embeds that send no referrer
      frame.className = 'press-frame';
      video.replaceWith(frame);
    });
  }

  // History view: 履歴書形式 (default) or 年表形式
  document.querySelectorAll('[data-view]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('[data-view]').forEach(function (b) {
        var on = b === btn;
        b.setAttribute('aria-pressed', String(on));
        document.getElementById('view-' + b.dataset.view).hidden = !on;
      });
      document.querySelectorAll('#view-' + btn.dataset.view + ' .reveal').forEach(function (el) {
        el.classList.add('is-in');
      });
    });
  });

  // ---------- Album ----------
  var ALBUM = window.ALBUM || [];
  var tabsEl = document.getElementById('chapter-tabs');
  var panelsEl = document.getElementById('chapter-panels');

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function bi(o) {
    return '<span lang="ja">' + esc(o.ja) + '</span><span lang="en">' + esc(o.en) + '</span>';
  }
  function photoUrl(p, thumb) {
    return 'assets/album/' + p.src + (thumb ? '-t' : '') + '.jpg';
  }
  function tileShape(p) {
    if (p.doc) return 'doc';
    if (p.w < 400) return 'small';
    if (p.pano) return 'pano';
    if (p.feature) return 'feature';
    if (p.w / p.h > 2) return 'wide';
    if (p.h / p.w > 1.15) return 'tall';
    return 'std';
  }

  function renderChapter(ch) {
    var aside =
      '<aside class="ch-story">' +
        '<span class="kakuin" aria-hidden="true">' + ch.kanji + '</span>' +
        '<h3>' + bi(ch.title) + '</h3>' +
        '<p class="meta">' + bi(ch.when) + ' ・ ' + bi(ch.where) + '</p>' +
        '<p class="ch-text">' + bi(ch.story) + '</p>' +
        (ch.facts ? '<ul class="ch-facts">' + ch.facts.map(function (f) { return '<li>' + bi(f) + '</li>'; }).join('') + '</ul>' : '') +
        (ch.links ? '<p class="ch-links">' + ch.links.map(function (l) { return '<a href="' + esc(l.href) + '" target="_blank" rel="noopener">' + bi(l) + '</a>'; }).join('') + '</p>' : '') +
        (ch.places ? renderStamps(ch) : '') +
      '</aside>';
    var tiles = ch.photos.map(function (p, i) {
      return '<figure class="tile tile-' + tileShape(p) + '"' + (p.place ? ' data-place="' + p.place + '"' : '') + '>' +
        '<button type="button" data-index="' + i + '" aria-label="' + esc(p.ja + ' / ' + p.en) + '">' +
          '<img loading="lazy" src="' + photoUrl(p, true) + '" data-full="' + photoUrl(p, false) + '" width="' + p.w + '" height="' + p.h + '" alt="' + esc(p.ja + ' / ' + p.en) + '">' +
        '</button>' +
        '<figcaption>' + bi(p) + '</figcaption>' +
      '</figure>';
    }).join('');
    return '<div class="chapter">' + aside + '<div class="mosaic">' + tiles + '</div></div>';
  }

  function renderStamps(ch) {
    var counts = {};
    ch.photos.forEach(function (p) { counts[p.place] = (counts[p.place] || 0) + 1; });
    var all = '<button type="button" class="stamp-btn" data-place="" aria-pressed="true">' +
      '<span class="maruin" aria-hidden="true"><span>全</span></span>' +
      '<span class="stamp-label">' + bi({ ja: 'すべて', en: 'All' }) + ' <b>' + ch.photos.length + '</b></span></button>';
    return '<div class="stamps" role="group" aria-label="Places">' + all + ch.places.map(function (pl, i) {
      var tilt = ((i * 37) % 17) - 8;
      return '<button type="button" class="stamp-btn" data-place="' + pl.id + '" aria-pressed="false" style="--tilt:' + tilt + 'deg">' +
        '<span class="maruin" aria-hidden="true"><span>' + esc(pl.ja) + '</span></span>' +
        '<span class="stamp-label">' + bi(pl.pref) + ' <b>' + (counts[pl.id] || 0) + '</b></span>' +
        '<span class="sr-only">' + esc(pl.en) + '</span></button>';
    }).join('') + '</div>';
  }

  function selectChapter(id, focus) {
    tabsEl.querySelectorAll('[role="tab"]').forEach(function (t) {
      var on = t.dataset.chapter === id;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
      if (on && tabsEl.scrollWidth > tabsEl.clientWidth) {
        tabsEl.scrollLeft = t.offsetLeft - (tabsEl.clientWidth - t.offsetWidth) / 2;
      }
    });
    panelsEl.querySelectorAll('[role="tabpanel"]').forEach(function (p) {
      p.hidden = p.dataset.chapter !== id;
    });
  }

  if (tabsEl && ALBUM.length) {
    tabsEl.innerHTML = ALBUM.map(function (ch) {
      return '<button type="button" role="tab" id="tab-' + ch.id + '" aria-controls="panel-' + ch.id + '" data-chapter="' + ch.id + '">' +
        '<span class="tab-kanji" aria-hidden="true">' + ch.kanji + '</span>' +
        '<span class="tab-label">' + bi(ch.tab || ch.title) + '</span>' +
        '<span class="tab-count">' + ch.photos.length + '</span></button>';
    }).join('');
    panelsEl.innerHTML = ALBUM.map(function (ch) {
      return '<div role="tabpanel" id="panel-' + ch.id + '" aria-labelledby="tab-' + ch.id + '" data-chapter="' + ch.id + '" hidden>' + renderChapter(ch) + '</div>';
    }).join('');
    selectChapter(ALBUM[0].id);

    tabsEl.addEventListener('click', function (e) {
      var t = e.target.closest('[role="tab"]');
      if (t) selectChapter(t.dataset.chapter);
    });
    tabsEl.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var tabs = Array.prototype.slice.call(tabsEl.querySelectorAll('[role="tab"]'));
      var i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      var next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      selectChapter(next.dataset.chapter, true);
      e.preventDefault();
    });

    // Links elsewhere on the page that open a chapter (and optionally press one of its stamps)
    document.querySelectorAll('[data-open-chapter]').forEach(function (a) {
      a.addEventListener('click', function () {
        selectChapter(a.dataset.openChapter);
        var stamp = document.querySelector('#panel-' + a.dataset.openChapter +
          ' .stamp-btn[data-place="' + (a.dataset.openPlace || '') + '"]');
        if (stamp) stamp.click();
      });
    });

    // Travel stamps filter the photos
    panelsEl.addEventListener('click', function (e) {
      var s = e.target.closest('.stamp-btn');
      if (!s) return;
      var panel = s.closest('[role="tabpanel"]');
      var place = s.dataset.place;
      panel.querySelectorAll('.stamp-btn').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === s));
      });
      panel.querySelectorAll('.tile').forEach(function (t) {
        t.hidden = !!place && t.dataset.place !== place;
      });
    });
  }

  // ---------- Lightbox ----------
  var box = document.getElementById('lightbox');
  if (box && typeof box.showModal === 'function' && panelsEl) {
    var boxImg = box.querySelector('img');
    var boxCap = box.querySelector('.lb-cap');
    var boxCount = box.querySelector('.lb-count');
    var list = [], pos = 0;

    function show(i) {
      pos = (i + list.length) % list.length;
      var tile = list[pos];
      var img = tile.querySelector('img');
      var cap = tile.querySelector('figcaption [lang="' + root.dataset.lang + '"]');
      boxImg.src = img.dataset.full;
      boxImg.alt = img.alt;
      boxCap.textContent = cap ? cap.textContent : '';
      boxCount.textContent = (pos + 1) + ' / ' + list.length;
    }

    panelsEl.addEventListener('click', function (e) {
      var btn = e.target.closest('.tile button');
      if (!btn) return;
      var panel = btn.closest('[role="tabpanel"]');
      list = Array.prototype.slice.call(panel.querySelectorAll('.tile:not([hidden])'));
      show(list.indexOf(btn.parentNode));
      box.showModal();
    });
    box.querySelector('.lb-prev').addEventListener('click', function () { show(pos - 1); });
    box.querySelector('.lb-next').addEventListener('click', function () { show(pos + 1); });
    box.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(pos - 1);
      if (e.key === 'ArrowRight') show(pos + 1);
    });
    box.addEventListener('click', function (e) {
      if (e.target === box) box.close();
    });
    var touchX = null;
    box.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) show(pos + (dx < 0 ? 1 : -1));
      touchX = null;
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
