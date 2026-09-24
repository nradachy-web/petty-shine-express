/* Petty Shine Express: header state, mobile nav, scroll reveal, phone click events. */
(function () {
  var doc = document.documentElement;
  var body = document.body;
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");

  if (header && header.classList.contains("over-hero")) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll("#site-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 960) body.classList.remove("nav-open");
    });
  }

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Only one FAQ open at a time within a list, for a tidy accordion. */
  document.querySelectorAll(".faq").forEach(function (list) {
    list.addEventListener("toggle", function (e) {
      if (e.target.open) {
        list.querySelectorAll("details[open]").forEach(function (d) {
          if (d !== e.target) d.open = false;
        });
      }
    }, true);
  });

  /* Phone click conversion hook: fires when Google Ads is configured. */
  document.querySelectorAll("a[data-phone]").forEach(function (a) {
    a.addEventListener("click", function () {
      if (typeof window.gtag === "function") {
        window.gtag("event", "phone_click", { event_category: "contact", event_label: a.getAttribute("href") });
      }
    });
  });

  doc.classList.remove("no-js");
})();
