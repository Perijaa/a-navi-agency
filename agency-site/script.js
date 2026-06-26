/* ===============================================================
   A-Navi Digital — vanilla JS
   • Navbar scroll state + active link spy
   • Mobile menu (slide + hamburger morph)
   • Scroll-reveal via IntersectionObserver
   • Animated counters (eased)
   • Hero subtle cursor parallax
   • Contact form confirmation
   • Respects prefers-reduced-motion
   =============================================================== */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Navbar scroll state ──────────────────────────────────── */
  var navbar = document.getElementById("navbar");
  function onScroll() {
    if (navbar) navbar.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu ──────────────────────────────────────────── */
  var menuBtn = document.getElementById("menuBtn");
  var mobileMenu = document.getElementById("mobileMenu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("is-open");
      menuBtn.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });

    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        menuBtn.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ── Active link spy ──────────────────────────────────────── */
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var id = e.target.id;
          navLinks.forEach(function (l) {
            l.classList.toggle("is-active", l.getAttribute("href") === "#" + id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ── Scroll reveal ────────────────────────────────────────── */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduced) {
    var ro = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-visible");
          ro.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ── Animated counters ────────────────────────────────────── */
  function runCounter(el) {
    var target = parseFloat(el.dataset.target);
    var suffix = el.dataset.suffix || "";
    var prefix = el.dataset.prefix || "";
    var decimals = parseInt(el.dataset.decimals || "0", 10);
    var duration = reduced ? 0 : 1800;
    var start = performance.now();

    function tick(now) {
      var p = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var v = target * eased;
      var formatted =
        decimals > 0
          ? v.toFixed(decimals)
          : Math.floor(v).toLocaleString("en-US");
      el.textContent = prefix + formatted + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var counters = document.querySelectorAll("[data-counter]");
  if ("IntersectionObserver" in window && counters.length) {
    var co = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          runCounter(e.target);
          co.unobserve(e.target);
        });
      },
      { threshold: 0.55 }
    );
    counters.forEach(function (c) { co.observe(c); });
  }

  /* ── Subtle cursor parallax on hero orbs (desktop only) ───── */
  if (!reduced && window.matchMedia("(min-width: 960px)").matches) {
    var orbs = document.querySelectorAll(".orb");
    window.addEventListener(
      "pointermove",
      function (e) {
        var cx = (e.clientX / window.innerWidth - 0.5) * 2;
        var cy = (e.clientY / window.innerHeight - 0.5) * 2;
        orbs.forEach(function (orb, i) {
          var factor = (i + 1) * 6;
          orb.style.translate = cx * factor + "px " + cy * factor + "px";
        });
      },
      { passive: true }
    );
  }

  /* ── Contact form (no backend) ────────────────────────────── */
  var form = document.getElementById("contactForm");
  var ok = document.getElementById("formOk");
  if (form && ok) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      ok.classList.add("is-visible");
      form.reset();
      setTimeout(function () { ok.classList.remove("is-visible"); }, 6000);
    });
  }

  /* ── Year ─────────────────────────────────────────────────── */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
