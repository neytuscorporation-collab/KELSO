/* Service worker mínimo: permite instalar KELSO como app. No guarda datos en caché. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
