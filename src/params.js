import { writable } from 'svelte/store';
export const params = writable('/');
export const selectedSort = writable({ filterOption: 0, filterMode: false });
export const homeY = writable(0);
export const favoriteY = writable(0);
export const searchY = writable(0);
export const validSelectedItems = writable([]);
export const limit = writable(5);
export const previousLink = writable('/');
if (!JSON.parse(localStorage.getItem('searchHistory'))) {
	localStorage.setItem('searchHistory', JSON.stringify([]));
}
if (!JSON.parse(localStorage.getItem('favorites'))) {
	localStorage.setItem('favorites', JSON.stringify([]));
}
if (!JSON.parse(localStorage.getItem('history'))) {
	localStorage.setItem('history', JSON.stringify([]));
}
