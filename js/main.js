document.querySelectorAll('.more').forEach(function (b) {
  b.addEventListener('click', function () {
    var p = document.getElementById(b.getAttribute('aria-controls'));
    var open = p.hidden;
    p.hidden = !open;
    b.setAttribute('aria-expanded', String(open));
    b.textContent = open ? 'Menos información' : 'Más información';
  });
});