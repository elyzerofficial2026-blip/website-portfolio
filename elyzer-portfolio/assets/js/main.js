/* =========================================================================
   main.js — menu, sample cards and filters, footer year, small touches.
   No libraries. Everything still reads without JavaScript.
   ========================================================================= */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.remove("no-js");
  doc.classList.add("js");

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Footer year ---------- */
  var years = document.querySelectorAll("[data-year]");
  for (var y = 0; y < years.length; y++) years[y].textContent = String(new Date().getFullYear());

  /* ---------- Sample cards + filters (homepage only) ---------- */
  var grid = document.getElementById("sample-grid");
  if (grid && Array.isArray(window.SAMPLES)) {
    var samples = window.SAMPLES.filter(function (s) { return s.status === "published"; });
    var base = grid.getAttribute("data-base") || "";
    var state = { industry: "All", type: "All" };

    var unique = function (list) {
      return list.filter(function (v, i) { return list.indexOf(v) === i; });
    };
    var industries = unique(samples.map(function (s) { return s.industry; }));
    var types = unique([].concat.apply([], samples.map(function (s) { return s.contentTypes; })));

    var esc = function (str) {
      return String(str).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    };

    var buildChips = function (containerId, values, key) {
      var box = document.getElementById(containerId);
      if (!box) return;
      var all = ["All"].concat(values);
      box.innerHTML = all.map(function (v) {
        return '<button type="button" class="chip" data-key="' + key + '" data-value="' + esc(v) + '" aria-pressed="' + (v === "All") + '">' + esc(v) + "</button>";
      }).join("");
      box.addEventListener("click", function (e) {
        var btn = e.target.closest(".chip");
        if (!btn) return;
        state[key] = btn.getAttribute("data-value");
        var chips = box.querySelectorAll(".chip");
        for (var i = 0; i < chips.length; i++) chips[i].setAttribute("aria-pressed", String(chips[i] === btn));
        render();
      });
    };

    var card = function (s) {
      var tags = [s.industry, s.market].map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; }).join("") +
        s.contentTypes.map(function (t) { return '<li class="tag tag--plain">' + esc(t) + "</li>"; }).join("");
      return '<li><article class="sample-card">' +
        '<ul class="tags" aria-label="Labels">' + tags + "</ul>" +
        '<h3><a href="' + base + "samples/" + esc(s.slug) + '.html">' + esc(s.title) + "</a></h3>" +
        "<p>" + esc(s.cardSummary) + "</p>" +
        '<span class="more" aria-hidden="true">Read the case study →</span>' +
        "</article></li>";
    };

    var note = document.getElementById("results-note");
    var render = function () {
      var shown = samples.filter(function (s) {
        var okI = state.industry === "All" || s.industry === state.industry;
        var okT = state.type === "All" || s.contentTypes.indexOf(state.type) !== -1;
        return okI && okT;
      });
      grid.innerHTML = shown.length
        ? shown.map(card).join("")
        : '<li class="empty-state">No samples match both filters yet. Try another combination, or <a href="' + base + 'index.html#contact">send me your brief</a> and I\'ll share relevant work.</li>';
      if (note) note.textContent = "Showing " + shown.length + " of " + samples.length + " samples";
    };

    buildChips("filter-industry", industries, "industry");
    buildChips("filter-type", types, "type");
    render();
  }

  /* ---------- Gentle reveal on scroll ---------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    for (var r = 0; r < revealEls.length; r++) io.observe(revealEls[r]);
  } else {
    for (var k = 0; k < revealEls.length; k++) revealEls[k].classList.add("is-visible");
  }
})();
