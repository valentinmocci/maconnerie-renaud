/* Maçonnerie Renaud — script unique : menu mobile, smooth scroll, compare slider, formulaire */
(function () {
  'use strict';

  /* ---- Menu mobile ---- */
  function initMenu() {
    var burger = document.querySelector('[data-burger]');
    var nav = document.querySelector('[data-mobile-nav]');
    var backdrop = document.querySelector('[data-nav-backdrop]');
    if (!burger || !nav) return;
    function close() {
      nav.removeAttribute('data-open');
      if (backdrop) backdrop.removeAttribute('data-open');
      burger.setAttribute('aria-expanded', 'false');
    }
    burger.addEventListener('click', function () {
      var open = nav.hasAttribute('data-open');
      if (open) { close(); return; }
      nav.setAttribute('data-open', '');
      if (backdrop) backdrop.setAttribute('data-open', '');
      burger.setAttribute('aria-expanded', 'true');
    });
    if (backdrop) backdrop.addEventListener('click', close);
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ---- Smooth scroll (ancres internes) ---- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      });
    });
  }

  /* ---- Compare slider avant/après (multi-instances) ---- */
  function initCompareSliders() {
    document.querySelectorAll('[data-compare]').forEach(function (root) {
      var handle = root.querySelector('[data-compare-handle]');
      var media = root.querySelector('.compare__media');
      if (!handle || !media) return;
      var active = false;
      function setSplit(pct) {
        var c = Math.max(0, Math.min(100, pct));
        root.style.setProperty('--split', c + '%');
        handle.setAttribute('aria-valuenow', Math.round(c));
      }
      function pctFromX(x) {
        var r = media.getBoundingClientRect();
        return r.width ? ((x - r.left) / r.width) * 100 : 50;
      }
      handle.addEventListener('pointerdown', function (e) { active = true; if (handle.setPointerCapture) handle.setPointerCapture(e.pointerId); setSplit(pctFromX(e.clientX)); });
      handle.addEventListener('pointermove', function (e) { if (active) setSplit(pctFromX(e.clientX)); });
      handle.addEventListener('pointerup', function (e) { active = false; if (handle.releasePointerCapture) handle.releasePointerCapture(e.pointerId); });
      handle.addEventListener('pointercancel', function () { active = false; });
      handle.addEventListener('keydown', function (e) {
        var cur = parseFloat(handle.getAttribute('aria-valuenow')) || 50;
        if (e.key === 'ArrowLeft') { e.preventDefault(); setSplit(cur - 5); }
        if (e.key === 'ArrowRight') { e.preventDefault(); setSplit(cur + 5); }
        if (e.key === 'Home') { e.preventDefault(); setSplit(0); }
        if (e.key === 'End') { e.preventDefault(); setSplit(100); }
      });
      setSplit(50);
    });
  }

  /* ---- Formulaire de contact (sans backend) ---- */
  function initForm() {
    var form = document.querySelector('[data-contact-form]');
    var status = document.querySelector('[data-form-status]');
    if (!form || !status) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      form.hidden = true;
      status.hidden = false;
      status.focus();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initSmoothScroll();
    initCompareSliders();
    initForm();
  });
})();
