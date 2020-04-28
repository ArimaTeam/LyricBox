console.log(navigator);

if ('serviceWorker' in navigator) {
	try {
		navigator.serviceWorker.register('/sw.js');
		console.log();
		console.log('sw registerd');
	} catch (error) {
		console.log('sw filed with error: ', error);
	}
}
