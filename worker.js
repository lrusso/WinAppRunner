const filesToCache = [
	"WinAppRunner.htm",
	"WinAppRunner.json",
	"WinAppRunner.png",
	"WinAppRunnerFavIcon_16x16.png",
	"WinAppRunnerFavIcon_192x192.png",
	"WinAppRunnerFavIcon_512x512.png",
	"WinAppRunnerShare.png",
	"WinAppRunnerSystem.htm",
	"WinAppRunnerSystem.js",
	"WinAppRunnerSystem.wasm",
	"WinAppRunnerSystem.zip"
];

const staticCacheName = "winapprunner-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});