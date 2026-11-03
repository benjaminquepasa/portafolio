var PROYECTOS = {
  academymap: {
    etiqueta: 'Proyecto web · Orientación vocacional',
    secciones: [
      ['Descripción', 'Plataforma web interactiva con un sistema de quest diseñada para orientar a estudiantes de octavo básico y primero medio.'],
      ['Problema que aborda', 'Orientación vocacional para estudiantes de enseñanza media.'],
      ['En mi trayectoria', 'Parte de mi fase de crecimiento, donde creé interfaces interactivas orientadas a resolver problemáticas reales.']
    ],
    tags: ['HTML/CSS', 'JavaScript', 'Quest educativo'],
    links: []
  },
  greenlink: {
    etiqueta: 'Proyecto web · Sustentabilidad',
    secciones: [
      ['Descripción', 'Sitio web interactivo enfocado en mostrar de forma visual y accesible los puntos verdes de reciclaje en Santiago.'],
      ['Problema que aborda', 'Gestión comunitaria de reciclaje en Santiago.'],
      ['En mi trayectoria', 'Parte de mi fase de crecimiento, donde creé interfaces interactivas orientadas a resolver problemáticas reales.']
    ],
    tags: ['Frontend', 'Sustentabilidad', 'Santiago'],
    links: []
  },
  gutenvox: {
    etiqueta: 'Robótica aplicada · Feria TP',
    secciones: [
      ['Descripción', 'Robot de asistencia accesible que escanea textos impresos, los traduce mediante DeepL API y los lee en voz alta.'],
      ['Objetivos de desarrollo sostenible', 'ODS 4 (Educación de calidad) y ODS 10 (Reducción de las desigualdades).'],
      ['Cómo funciona', 'Escanea el texto impreso con OCR, lo traduce automáticamente y lo reproduce en audio. Funciona sobre Raspberry Pi con Python y se apoya en APIs en la nube.'],
      ['En mi trayectoria', 'Es mi proyecto actual, presentado en la Feria TP: el desarrollo técnico de un robot de lectura, traducción automática y asistencia audible.']
    ],
    tags: ['Python / OCR', 'Raspberry Pi', 'DeepL API'],
    links: [['Sitio web', '#'], ['GitHub Beta', '#']]
  }
};

var modal = document.getElementById('modal');
var raiz = document.documentElement;

function vaciar(el) { while (el.firstChild) el.removeChild(el.firstChild); }

function abrirProyecto(id, tarjeta) {
  var d = PROYECTOS[id];
  if (!d) return;
  var img = tarjeta.querySelector('img');
  var imgModal = document.getElementById('modal-img');
  imgModal.src = img.getAttribute('src');
  imgModal.alt = img.getAttribute('alt');
  document.getElementById('modal-etiqueta').textContent = d.etiqueta;
  document.getElementById('modal-titulo').textContent = tarjeta.querySelector('h3').textContent;

  var sec = document.getElementById('modal-secciones');
  vaciar(sec);
  d.secciones.forEach(function (s) {
    var h = document.createElement('h4');
    h.textContent = s[0];
    var p = document.createElement('p');
    p.textContent = s[1];
    sec.appendChild(h);
    sec.appendChild(p);
  });

  var tags = document.getElementById('modal-tags');
  vaciar(tags);
  d.tags.forEach(function (t) {
    var li = document.createElement('li');
    li.textContent = t;
    tags.appendChild(li);
  });

  var links = document.getElementById('modal-links');
  vaciar(links);
  d.links.forEach(function (l) {
    var a = document.createElement('a');
    a.textContent = l[0];
    a.href = l[1];
    a.rel = 'noopener';
    if (l[1] !== '#') a.target = '_blank';
    else a.addEventListener('click', function (e) { e.preventDefault(); });
    links.appendChild(a);
  });

  modal.showModal();
  raiz.classList.add('modal-open');
  modal.querySelector('.modal-panel').scrollTop = 0;
}

document.querySelectorAll('.more').forEach(function (b) {
  b.addEventListener('click', function () {
    abrirProyecto(b.getAttribute('data-proyecto'), b.closest('.card'));
  });
});

document.getElementById('modal-cerrar').addEventListener('click', function () { modal.close(); });
// clic en el fondo oscuro cierra la ventana
modal.addEventListener('click', function (e) { if (e.target === modal) modal.close(); });
modal.addEventListener('close', function () { raiz.classList.remove('modal-open'); });

// Menú en pantallas