importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
const staticAssets = [
	'/',
	'/index.html',
	'/global.css',
	'/build/bundle.css',
	'/build/bundle.js',
	'/favicon.png'
];

workbox.precaching.precacheAndRoute(staticAssets);
