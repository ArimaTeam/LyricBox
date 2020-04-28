importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
const staticAssets = [
	'/',
	'/index.html',
	'/global.css',
	'/build/bundle.css',
	'/build/bundle.js',
	'/images/*',
	'/favicon.png'
];

workbox.precaching.precacheAndRoute(staticAssets);
workbox.routing.registerRoute(
	/\.(?:png|gif|jpg|jpeg|webp|svg|js|css|html)$/,
	new StaleWhileRevalidate({
		cacheName : 'static-resources'
	})
);
