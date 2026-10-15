(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  var COLORS = ['#f4a7b9', '#e87a96', '#ffd6e0', '#f7b8c9', '#ffc0cb', '#e8a0b8'];
  var SYMBOLS = ['♥', '✦', '✧', '♡', '•'];
  var lastTime = 0;
  var throttleMs = 40;

  function spawn(x, y) {
    var el = document.createElement('span');
    el.className = 'cursor-sparkle';
    el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    el.style.fontSize = (10 + Math.random() * 10) + 'px';
    el.style.setProperty('--dx', (Math.random() * 40 - 20) + 'px');
    el.style.setProperty('--dy', (-20 - Math.random() * 40) + 'px');
    el.style.setProperty('--rot', (Math.random() * 60 - 30) + 'deg');
    document.body.appendChild(el);
    window.setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 900);
  }

  document.addEventListener('mousemove', function (e) {
    var now = Date.now();
    if (now - lastTime < throttleMs) return;
    lastTime = now;
    spawn(e.clientX, e.clientY);
  }, { passive: true });
})();
