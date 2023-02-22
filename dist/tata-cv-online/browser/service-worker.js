importScripts('https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js');
$FILES = ["offline.html"];
$CACHE_STORE = "tatabooking";

self.addEventListener("beforeinstallprompt", e => {
    // Prevent Chrome 76 and later from showing the mini-infobar
    // e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    showInstallPromotion();
},{passive: true});

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches
            .open($CACHE_STORE)
            .then(cache => {
                return cache.addAll($FILES);
            })
            .catch(err => {
                return self.skipWaiting();
            })
    );
},{passive: true});

self.addEventListener("fetch", event => {}),{passive: true};
