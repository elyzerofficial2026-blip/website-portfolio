/* =========================================================================
   forms.js — validation and sending for the brief form and the trial form.

   SET THESE TWO VALUES (see README, section D):
   ========================================================================= */
var FORM_CONFIG = {
  // Your Formspree form ID, e.g. "xyzabcd" from https://formspree.io/f/xyzabcd
  formspreeId: "[[FORMSPREE_FORM_ID]]",
  // Where the email fallback goes
  contactEmail: "elyzerofficial2026@gmail.com"
};

(function () {
  "use strict";
  var forms = document.querySelectorAll("form[data-form]");
  if (!forms.length) return;

  var connected = FORM_CONFIG.formspreeId && FORM_CONFIG.formspreeId.indexOf("[[") === -1;
  var endpoint = "https://formspree.io/f/" + FORM_CONFIG.formspreeId;

  var messages = {
    valueMissing: "Please fill in this field.",
    typeMismatchEmail: "Please enter a valid email address, like name@company.com.",
    typeMismatchUrl: "Please enter a full web address, starting with https://",
    tooShort: "Please add a little more detail."
  };

  function errorFor(input) {
    var v = input.validity;
    if (v.valid) return "";
    if (v.valueMissing) return messages.valueMissing;
    if (v.typeMismatch && input.type === "email") return messages.typeMismatchEmail;
    if (v.typeMismatch && input.type === "url") return messages.typeMismatchUrl;
    if (v.tooShort) return messages.tooShort;
    return "Please check this field.";
  }

  function showError(input, msg) {
    var field = input.closest(".field");
    var out = document.getElementById(input.id + "-error");
    if (field) field.classList.toggle("has-error", !!msg);
    if (out) out.textContent = msg;
    if (msg) input.setAttribute("aria-invalid", "true");
    else input.removeAttribute("aria-invalid");
  }

  function mailtoFrom(form) {
    var subject = form.getAttribute("data-subject") || "Project enquiry";
    var lines = [];
    var data = new FormData(form);
    data.forEach(function (value, key) {
      if (key.charAt(0) === "_" || key === "company_website") return;
      if (String(value).trim()) {
        var label = form.querySelector('[name="' + key + '"]');
        var name = label && label.getAttribute("data-label") ? label.getAttribute("data-label") : key;
        lines.push(name + ": " + value);
      }
    });
    return "mailto:" + FORM_CONFIG.contactEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n\n"));
  }

  Array.prototype.forEach.call(forms, function (form) {
    form.setAttribute("novalidate", "");
    var status = form.querySelector(".form-status");
    var submit = form.querySelector('button[type="submit"]');
    var submitLabel = submit ? submit.textContent : "";
    var inputs = Array.prototype.filter.call(form.querySelectorAll("input, select, textarea"), function (el) {
      return !el.closest(".hp") && el.type !== "hidden";
    });

    Array.prototype.forEach.call(inputs, function (input) {
      input.addEventListener("blur", function () {
        if (input.value.trim() !== "" || input.getAttribute("aria-invalid")) showError(input, errorFor(input));
      });
      input.addEventListener("input", function () {
        if (input.getAttribute("aria-invalid")) showError(input, errorFor(input));
      });
    });

    function setStatus(kind, html) {
      status.className = "form-status" + (kind ? " is-" + kind : "");
      status.innerHTML = html;
      if (html) status.focus();
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      setStatus("", "");

      // Honeypot: real people never fill it.
      var trap = form.querySelector('.hp input');
      if (trap && trap.value) return;

      var firstBad = null;
      Array.prototype.forEach.call(inputs, function (input) {
        var msg = errorFor(input);
        showError(input, msg);
        if (msg && !firstBad) firstBad = input;
      });
      if (firstBad) {
        setStatus("error", "Some details are missing or need a fix. Please check the highlighted fields.");
        firstBad.focus();
        return;
      }

      var mail = mailtoFrom(form);

      if (!connected) {
        setStatus("info", "Opening your email app with your details filled in. If nothing opens, email me at <a href=\"mailto:" + FORM_CONFIG.contactEmail + "\">" + FORM_CONFIG.contactEmail + "</a>.");
        window.location.href = mail;
        return;
      }

      if (submit) { submit.disabled = true; submit.textContent = "Sending…"; }
      form.setAttribute("aria-busy", "true");

      fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          form.reset();
          setStatus("success", form.getAttribute("data-success"));
          if (typeof countEvent === "function") countEvent("form-sent-" + form.getAttribute("data-form"));
        })
        .catch(function () {
          setStatus("error", "Sorry, your message didn't go through. Nothing was sent. You can <a href=\"" + mail.replace(/"/g, "&quot;") + "\">send the same details by email</a> instead, or write to <a href=\"mailto:" + FORM_CONFIG.contactEmail + "\">" + FORM_CONFIG.contactEmail + "</a>.");
        })
        .then(function () {
          if (submit) { submit.disabled = false; submit.textContent = submitLabel; }
          form.removeAttribute("aria-busy");
        });
    });
  });
})();
