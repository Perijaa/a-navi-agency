/* ============================================================
   A-Navi Omiš — vanilla JS
   • Navbar scroll state + active section highlighting
   • Mobile menu toggle
   • Scroll-reveal via IntersectionObserver
   • Animated counters in Omiš stats
   • Contact form (no-backend confirmation)
   • Respects prefers-reduced-motion
   ============================================================ */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ── Navbar scroll state ──────────────────────────────── */
  var navbar = document.getElementById("navbar");
  function onScroll() {
    if (!navbar) return;
    navbar.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu ──────────────────────────────────────── */
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

  /* ── Active link via IntersectionObserver ─────────────── */
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if ("IntersectionObserver" in window && sections.length) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          navLinks.forEach(function (l) {
            l.classList.toggle("is-active", l.getAttribute("href") === "#" + id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) {
      spyObserver.observe(s);
    });
  }

  /* ── Reveal-on-scroll ─────────────────────────────────── */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ── Animated counters (Omiš stats) ───────────────────── */
  function runCounter(el) {
    var target = parseFloat(el.dataset.target);
    var suffix = el.dataset.suffix || "";
    var prefix = el.dataset.prefix || "";
    var decimals = parseInt(el.dataset.decimals || "0", 10);
    var duration = reducedMotion ? 0 : 2000;
    var start = performance.now();

    function tick(now) {
      var p = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var v = target * eased;
      var formatted =
        decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toLocaleString("en-US");
      el.textContent = prefix + formatted + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var counters = document.querySelectorAll("[data-counter]");
  if ("IntersectionObserver" in window && counters.length) {
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          runCounter(entry.target);
          counterObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.55 }
    );
    counters.forEach(function (c) {
      counterObserver.observe(c);
    });
  }

  /* ── Contact form ─────────────────────────────────────── */
  var form = document.getElementById("contactForm");
  var formOk = document.getElementById("formSuccess");
  if (form && formOk) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formOk.classList.add("is-visible");
      form.reset();
      setTimeout(function () {
        formOk.classList.remove("is-visible");
      }, 6000);
    });
  }

  /* ── Footer year ──────────────────────────────────────── */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
