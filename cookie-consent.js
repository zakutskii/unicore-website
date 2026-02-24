(function () {
  var STORAGE_KEY = "unicore_cookie_consent_v1";

  function getConsent() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      return;
    }
  }

  function injectScriptOnce(src) {
    if (document.querySelector('script[src="' + src + '"]')) {
      return;
    }
    var script = document.createElement("script");
    script.defer = true;
    script.src = src;
    document.head.appendChild(script);
  }

  function loadVercelTracking() {
    injectScriptOnce("/_vercel/insights/script.js");
    injectScriptOnce("/_vercel/speed-insights/script.js");
  }

  function hideBanner() {
    var banner = document.getElementById("cookie-consent-banner");
    if (!banner) {
      return;
    }
    banner.classList.remove("is-visible");
    banner.setAttribute("aria-hidden", "true");
  }

  function showBanner() {
    var banner = document.getElementById("cookie-consent-banner");
    if (!banner) {
      return;
    }
    banner.classList.add("is-visible");
    banner.setAttribute("aria-hidden", "false");
  }

  function handleAccept() {
    setConsent("accepted");
    loadVercelTracking();
    hideBanner();
  }

  function handleDecline() {
    setConsent("rejected");
    hideBanner();
  }

  function bindBannerEvents() {
    var accept = document.getElementById("cookie-consent-accept");
    var decline = document.getElementById("cookie-consent-decline");

    if (accept) {
      accept.addEventListener("click", handleAccept);
    }
    if (decline) {
      decline.addEventListener("click", handleDecline);
    }
  }

  function initCookieConsent() {
    bindBannerEvents();

    var consent = getConsent();
    if (consent === "accepted") {
      loadVercelTracking();
      hideBanner();
      return;
    }

    if (consent === "rejected") {
      hideBanner();
      return;
    }

    showBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCookieConsent);
  } else {
    initCookieConsent();
  }
})();
