import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

export const MOBILE_BREAK_POINT = 768;

// Create a writable store to hold the window size
const windowSize = writable({
	width: browser ? window.innerWidth : 0,
	height: browser ? window.innerHeight : 0
});

if (browser) {
	// Add an event listener to update the store when the window size changes
	window.addEventListener('resize', () => {
		windowSize.set({ width: window.innerWidth, height: window.innerHeight });
	});
}

// Create a derived store to hold the current screen size category
export const screenSize = derived(windowSize, ($windowSize) => {
	if ($windowSize.width < 640) return 'xs';
	if ($windowSize.width < 768) return 'sm';
	if ($windowSize.width < 1024) return 'md';
	if ($windowSize.width < 1280) return 'lg';
	return 'xl';
});

export const mobile = derived(windowSize, ($windowSize) => $windowSize.width < MOBILE_BREAK_POINT);
