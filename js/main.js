/* ============================================================
   SINGING COWBOY NASHVILLE — main.js
   ============================================================ */

(function () {
  "use strict";

  /* ---------- mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });
  }

  /* ---------- mobile sticky CTA clearance ---------- */
  function checkFooterCta() {
    if (window.innerWidth < 900) {
      document.body.classList.add("has-footer-cta");
    } else {
      document.body.classList.remove("has-footer-cta");
    }
  }
  checkFooterCta();
  window.addEventListener("resize", checkFooterCta);

  /* ---------- booking form: reveal GIVE THE COWBOY THE DIRT ---------- */
  var packageSelect = document.getElementById("package");
  var dirtReveal = document.getElementById("dirt-reveal");
  if (packageSelect && dirtReveal) {
    function syncDirt() {
      var v = packageSelect.value || "";
      var personalized = v.indexOf("dirt") !== -1 || v.indexOf("full") !== -1 || v.indexOf("300") !== -1 || v.indexOf("250") !== -1;
      dirtReveal.classList.toggle("show", personalized);
    }
    packageSelect.addEventListener("change", syncDirt);
    syncDirt();
  }

  /* ---------- booking form submit → compose email ---------- */
  var bookForm = document.getElementById("booking-form");
  if (bookForm) {
    bookForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(bookForm);
      function g(name) {
        var v = fd.get(name);
        return v ? String(v).trim() : "";
      }
      var lines = [
        "NEW SINGING COWBOY INQUIRY",
        "===========================",
        "STEP 1 — THE EVENT",
        "Celebration date: " + g("date"),
        "Preferred surprise time: " + g("time"),
        "Type of celebration: " + g("celebration"),
        "Hotel / Airbnb / venue: " + g("location"),
        "Approx. number of guests: " + g("people"),
        "Package: " + g("package"),
        "",
        "STEP 2 — CONTACT (private, for coordination only)",
        "Organizer's name: " + g("name"),
        "Email: " + g("email"),
        "Mobile: " + g("phone"),
        "",
        "STEP 4 — GIVE THE COWBOY THE DIRT 🔥",
        "Guest of honor's first name: " + g("guest"),
        "Fiancé/partner's first name: " + g("dirt-partner"),
        "How they met: " + g("dirt-meet"),
        "Funny relationship stories: " + g("dirt-stories"),
        "Inside jokes: " + g("dirt-jokes"),
        "Embarrassing stories: " + g("dirt-embarrassing"),
        "Nicknames: " + g("dirt-nicknames"),
        "Dating disasters: " + g("dirt-disasters"),
        "Favorite drinks: " + g("dirt-drinks"),
        "Weird habits: " + g("dirt-habits"),
        "Exes worth mentioning: " + g("dirt-exes"),
        "Things the Cowboy SHOULD sing about: " + g("dirt-should"),
        "Things the Cowboy should NOT mention: " + g("dirt-shouldnot"),
        "Tell the Cowboy anything else: " + g("dirt-anything"),
        "",
        "Extra details: " + g("notes")
      ];
      var body = encodeURIComponent(lines.join("\n"));
      var subject = encodeURIComponent("Booking: " + g("guest") + " — " + g("celebration"));
      window.location.href = "mailto:book@singingcowboynashville.com?subject=" + subject + "&body=" + body;
    });
  }

  /* ---------- follow-up dirt form (private, after booking) ---------- */
  var dirtForm = document.getElementById("dirt-form");
  if (dirtForm) {
    dirtForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(dirtForm);
      function g(name) {
        var v = fd.get(name);
        return v ? String(v).trim() : "";
      }
      var lines = [
        "PRIVATE DIRT SUBMISSION (follow-up)",
        "===================================",
        "Your name: " + g("fu-name"),
        "Email/phone: " + g("fu-contact"),
        "Guest of honor: " + g("fu-guest"),
        "Celebration date: " + g("fu-date"),
        "",
        "THE DIRT 🔥",
        "-----------",
        "Guest of honor's first name: " + g("fu-guest"),
        "Fiancé/partner's first name: " + g("fu-partner"),
        "How they met: " + g("fu-meet"),
        "Funny relationship stories: " + g("fu-stories"),
        "Inside jokes: " + g("fu-jokes"),
        "Embarrassing stories: " + g("fu-embarrassing"),
        "Nicknames: " + g("fu-nicknames"),
        "Dating disasters: " + g("fu-disasters"),
        "Favorite drinks: " + g("fu-drinks"),
        "Weird habits: " + g("fu-habits"),
        "Exes worth mentioning: " + g("fu-exes"),
        "Things the Cowboy SHOULD sing about: " + g("fu-should"),
        "Things the Cowboy should NOT mention: " + g("fu-shouldnot"),
        "Anything else: " + g("fu-anything")
      ];
      var body = encodeURIComponent(lines.join("\n"));
      var subject = encodeURIComponent("Private Dirt: " + g("fu-guest"));
      window.location.href = "mailto:book@singingcowboynashville.com?subject=" + subject + "&body=" + body;
    });
  }

  /* ---------- year in footer ---------- */
  var yr = document.querySelectorAll("[data-year]");
  var now = new Date().getFullYear();
  yr.forEach(function (el) { el.textContent = now; });
})();
