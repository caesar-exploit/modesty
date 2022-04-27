import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	adapter: adapter(),
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '$sneaky: red;'
				}
			}
		}
	},
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				prependData: '$sneaky: red;'
			}
		})
	]
};

export default config;
