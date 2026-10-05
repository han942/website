# Anthony Han — Personal Website

Abstract information about myself, just take a look on my academic & professional journey.

## Live Site

<https://han942.github.io/website/>

## Google Analytics 4

1. In [Google Analytics](https://analytics.google.com/), create a GA4 property and a **Web** data stream for `https://han942.github.io/website/`.
2. Copy its Measurement ID (`G-...`) from **Admin → Data streams → your web stream**.
3. Set `measurementId` in `assets/js/analytics.js` to that ID, then publish the site. This enables page views on the homepage and the Global Supermarket dashboard.
4. Visit the published site and check **Reports → Realtime** in Analytics to confirm that your visit is recorded.

Until the Measurement ID is set, the analytics script sends no data. GA4 reports visit activity and aggregate attributes; it does not reveal visitors' names or identities.
