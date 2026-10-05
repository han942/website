// Enter the GA4 web data stream's Measurement ID here (for example, G-ABC123DEF4).
// Tracking stays off until this value is set.
(function () {
  var measurementId = 'G-4KVVYR7QND';

  if (!/^G-[A-Z0-9]+$/.test(measurementId)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  var tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
  document.head.appendChild(tag);
})();
