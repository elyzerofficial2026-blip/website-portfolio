/* =========================================================================
   sample-page.js — builds a case-study page from samples.js.
   Each /samples/*.html shell sets <body data-slug="...">; this script finds
   that sample and fills <main id="case">. The shell's own fallback text
   stays in place if JavaScript is off.
   ========================================================================= */
(function () {
  "use strict";
  var slug = document.body.getAttribute("data-slug");
  var mount = document.getElementById("case");
  var all = (window.SAMPLES || []).filter(function (s) { return s.status === "published"; });
  var s = all.filter(function (x) { return x.slug === slug; })[0];
  if (!mount || !s) return;

  var esc = function (str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var list = function (items) {
    return "<ul>" + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
  };
  var section = function (id, title, inner) {
    return '<section class="case-section" aria-labelledby="' + id + '"><h2 id="' + id + '">' + title + "</h2>" + inner + "</section>";
  };
  var validUrl = /^https?:\/\/[^\s\[\]]+$/i.test(s.liveUrl || "");

  var liveBtn = validUrl
    ? '<a class="btn btn--primary" data-goatcounter-click="live-article-' + esc(s.slug) + '" href="' + esc(s.liveUrl) + '" target="_blank" rel="noopener noreferrer">Read the live article ↗<span class="visually-hidden"> (opens in a new tab)</span></a>'
    : "";
  var pdfBtn = s.pdf ? '<a class="btn btn--secondary" href="../' + esc(s.pdf) + '" download>Download PDF copy</a>' : "";

  var tags = [s.industry, s.market].map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; }).join("") +
    s.contentTypes.map(function (t) { return '<li class="tag tag--plain">' + esc(t) + "</li>"; }).join("");

  var idx = all.indexOf(s);
  var prev = all[(idx - 1 + all.length) % all.length];
  var next = all[(idx + 1) % all.length];
  var pager = all.length > 1
    ? '<nav class="pager" aria-label="More samples">' +
        '<a href="' + esc(prev.slug) + '.html"><small>Previous sample</small><span>' + esc(prev.title) + "</span></a>" +
        (next !== prev ? '<a href="' + esc(next.slug) + '.html"><small>Next sample</small><span>' + esc(next.title) + "</span></a>" : "") +
      "</nav>"
    : "";

  var html =
    '<div class="container">' +
      '<header class="case-hero">' +
        '<nav class="breadcrumb" aria-label="Breadcrumb"><a href="../index.html">Home</a> / <a href="../index.html#samples">Samples</a> / <span aria-current="page">Case study</span></nav>' +
        '<ul class="tags" aria-label="Labels">' + tags + "</ul>" +
        "<h1>" + esc(s.title) + "</h1>" +
        '<p class="case-summary">' + esc(s.cardSummary) + "</p>" +
        (liveBtn || pdfBtn ? '<div class="btn-row">' + liveBtn + pdfBtn + "</div>" : "") +
        '<dl class="meta-grid">' +
          "<div><dt>Client</dt><dd>" + esc(s.client) + "</dd></div>" +
          "<div><dt>Industry</dt><dd>" + esc(s.industry) + "</dd></div>" +
          "<div><dt>Market</dt><dd>" + esc(s.market) + "</dd></div>" +
          "<div><dt>Content type</dt><dd>" + esc(s.contentTypes.join(", ")) + "</dd></div>" +
          "<div><dt>Primary keyword</dt><dd>" + esc(s.primaryKeyword) + "</dd></div>" +
          "<div><dt>Search intent</dt><dd>" + esc(s.searchIntent) + "</dd></div>" +
          "<div><dt>Length</dt><dd>" + esc(s.wordCount) + "</dd></div>" +
          "<div><dt>Published</dt><dd>" + esc(s.published) + "</dd></div>" +
        "</dl>" +
      "</header>" +
      '<div class="case-body">' +
        "<div>" +
          section("brief", "The brief", "<p>" + esc(s.brief) + "</p>") +
          section("challenge", "The challenge", "<p>" + esc(s.challenge) + "</p>") +
          section("work", "What I did", list(s.workPerformed)) +
          section("geo", "GEO and AEO elements used", list(s.geoElements)) +
          section("constraints", "Constraints I worked within", list(s.constraints)) +
          (s.result ? section("result", "Result", "<p>" + esc(s.result) + "</p>") : "") +
          '<p class="byline-note">' + esc(s.byline) + "</p>" +
          pager +
        "</div>" +
        '<aside class="case-aside" aria-label="Work with me">' +
          '<div class="aside-card">' +
            "<h2>Want content like this for your business?</h2>" +
            "<p>Start with one paid article and judge the research, structure and writing for yourself.</p>" +
            '<a class="btn btn--primary" data-goatcounter-click="cta-trial-case-study" href="../trial.html">Start with a paid trial</a>' +
          "</div>" +
          '<div class="aside-card">' +
            "<h2>Have a brief ready?</h2>" +
            '<p>Send it over and I\'ll reply within 24 hours on weekdays.</p>' +
            '<a class="btn btn--secondary btn--small" href="../index.html#contact">Send me your brief</a>' +
          "</div>" +
        "</aside>" +
      "</div>" +
    "</div>";

  mount.innerHTML = html;
})();
