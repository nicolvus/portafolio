// Tres cosas: el interruptor de tema, la sección activa en la barra
// y la aparición de cada sección al entrar en pantalla.

(function () {
  'use strict';

  var raiz = document.documentElement;
  var oscuroDelSistema = window.matchMedia('(prefers-color-scheme: dark)');

  // avisa al failsafe del <head> que este script sí corrió
  raiz.setAttribute('data-listo', '');

  /* ---------- Tema ---------- */

  var boton = document.getElementById('toggle-tema');

  function temaActual() {
    return raiz.getAttribute('data-theme') ||
           (oscuroDelSistema.matches ? 'dark' : 'light');
  }

  function sincronizarBoton() {
    var oscuro = temaActual() === 'dark';
    boton.setAttribute('aria-pressed', String(oscuro));
    boton.querySelector('.toggle__label').textContent =
      oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
  }

  boton.addEventListener('click', function () {
    var siguiente = temaActual() === 'dark' ? 'light' : 'dark';
    raiz.setAttribute('data-theme', siguiente);
    try { localStorage.setItem('tema', siguiente); } catch (e) { /* sin persistencia */ }
    sincronizarBoton();
  });

  // si el usuario no eligió nada, seguimos al sistema cuando cambie
  oscuroDelSistema.addEventListener('change', function () {
    if (!raiz.hasAttribute('data-theme')) sincronizarBoton();
  });

  sincronizarBoton();

  /* ---------- Barra: borde al despegar del tope ---------- */

  var barra = document.querySelector('.topbar');

  function marcarBarra() {
    barra.classList.toggle('is-stuck', window.scrollY > 4);
  }
  marcarBarra();

  /* ---------- Sección activa ---------- */

  var enlaces = Array.prototype.slice.call(
    document.querySelectorAll('.topbar__nav a')
  );
  var secciones = enlaces
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  // Se marca la última sección cuyo inicio ya pasamos. Con una banda de
  // intersección estrecha, los tramos sin enlace propio (como "En
  // profundidad") apagaban toda la barra; así se mantiene estable.
  function actualizarActiva() {
    // se mide la barra en vez de leer el token, para que siga siendo
    // correcto si el navegador usa otro tamaño de fuente base
    var referencia = window.scrollY + barra.offsetHeight + 32;

    var activa = null;
    secciones.forEach(function (s) {
      if (s.getBoundingClientRect().top + window.scrollY <= referencia) activa = s;
    });

    // al tocar el fondo siempre gana la última
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
      activa = secciones[secciones.length - 1];
    }

    enlaces.forEach(function (a) {
      a.classList.toggle(
        'is-current',
        Boolean(activa) && a.getAttribute('href') === '#' + activa.id
      );
    });
  }

  var pendiente = false;
  function alDesplazar() {
    marcarBarra();
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(function () {
      pendiente = false;
      actualizarActiva();
    });
  }

  window.addEventListener('scroll', alDesplazar, { passive: true });
  window.addEventListener('resize', actualizarActiva, { passive: true });
  actualizarActiva();

  /* ---------- Aparición al hacer scroll ---------- */

  var bloques = document.querySelectorAll('.reveal');
  var sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (sinMovimiento || !('IntersectionObserver' in window)) {
    bloques.forEach(function (b) { b.classList.add('is-in'); });
  } else {
    var aparicion = new IntersectionObserver(function (entradas, obs) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        obs.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.06 });

    bloques.forEach(function (b) { aparicion.observe(b); });
  }

  /* ---------- Año del pie ---------- */

  document.getElementById('y').textContent = new Date().getFullYear();
})();
