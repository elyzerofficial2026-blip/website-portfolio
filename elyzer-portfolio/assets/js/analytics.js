/* =========================================================================
   analytics.js — privacy-friendly visit counts with GoatCounter.
   No cookies, no personal data, no banner needed.

   SET YOUR CODE (see README, section D2). Until you do, nothing loads.
   If your dashboard is https://elyzer.goatcounter.com, the code is "elyzer".
   ========================================================================= */
var GOATCOUNTER_CODE = "[[GOATCOUNTER_CODE]]";

(function () {
  "use strict";
  if (!GOATCOUNTER_CODE || GOATCOUNTER_CODE.indexOf("[[") !== -1) return;
  // Skip visits while you preview the site on your own computer.
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) || location.protocol === "file:") return;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", "https://" + GOATCOUNTER_CODE + ".goatcounter.com/count");
  // Clicks are counted below, so GoatCounter's own click binding is turned off.
  s.setAttribute("data-goatcounter-settings", '{"no_events": true}');
  document.head.appendChild(s);

  // Count clicks on anything marked data-goatcounter-click="name",
  // including buttons that are drawn later by JavaScript.
  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-goatcounter-click]") : null;
    if (!el || !window.goatcounter || !window.goatcounter.count) return;
    window.goatcounter.count({
      path: el.getAttribute("data-goatcounter-click"),
      title: el.getAttribute("data-goatcounter-title") || el.textContent.trim().slice(0, 80),
      event: true
    });
  });
})();

/* Used by forms.js to count successful form sends. */
function countEvent(name) {
  if (window.goatcounter && window.goatcounter.count) {
    window.goatcounter.count({ path: name, title: name, event: true });
  }
}
