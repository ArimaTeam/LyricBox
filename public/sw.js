importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
// let req = new XMLHttpRequest();
// req.open('GET','./filesToCache.json',true)

let staticAssets = [
	'/',
	'/*',
	'/index.html',
	'/global.css',
	'/build/bundle.css',
	'/build/bundle.js',
	'/images/',
	'/favicon.png'
];
staticAssets = [
	...staticAssets,
	...JSON.parse(
		'["/public/build/bundle.css","/public/build/bundle.css.map","/public/build/bundle.js","/public/build/bundle.js.map","/public/favicon.png","/public/filesToCache.json","/public/global.css","/public/images/Ed_Sheeran_-_Beautiful_People.png","/public/images/Group 19 (1).png","/public/images/Group 19.png","/public/images/Group 19.svg","/public/images/Group 27.png","/public/images/Group 27.svg","/public/images/Group 30 (1).png","/public/images/Group 30.png","/public/images/Group 33 (1).svg","/public/images/Group 33.svg","/public/images/Group 36.svg","/public/images/Group.png","/public/images/Group.svg","/public/images/Vector (1).png","/public/images/Vector (1).svg","/public/images/Vector (2).png","/public/images/Vector (2).svg","/public/images/Vector (3).png","/public/images/Vector (3).svg","/public/images/Vector (4).png","/public/images/Vector (5).png","/public/images/Vector.svg","/public/images/icons/icon-128x128.png","/public/images/icons/icon-144x144.png","/public/images/icons/icon-152x152.png","/public/images/icons/icon-192x192.png","/public/images/icons/icon-384x384.png","/public/images/icons/icon-512x512.png","/public/images/icons/icon-72x72.png","/public/images/icons/icon-96x96.png","/public/images/music/Group 33 (2).svg","/public/images/music/Group 33.png","/public/images/music/Group 36.png","/public/images/music/dj 1.png","/public/images/music/dj 1.svg","/public/images/music/guitar 1.png","/public/images/music/guitar 1.svg","/public/images/music/piano 1 (1).svg","/public/images/music/piano 1.png","/public/images/music/piano 1.svg","/public/images/music/sliders.png","/public/images/music/trumpet 1.png","/public/images/music/trumpet 1.svg","/public/images/star.png","/public/index.html","/public/manifest.json","/public/sw.js","/public/workbox-sw.js"]'
	)
];
console.log(staticAssets);

workbox.precaching.precacheAndRoute(staticAssets);
workbox.routing.registerRoute(
	/\.(?:png|jpg|jpeg|svg|gif)$/,
	new workbox.strategies.CacheFirst({
		cacheName : 'my-image-cache'
	})
);
