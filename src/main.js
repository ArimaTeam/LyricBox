import App from './App.svelte';
import './serviceWorker';
const app = new App({
	target : document.body,
	props  : {
		name : 'world'
	}
});

export default app;
