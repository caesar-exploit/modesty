module.exports = {
	plugins: [
		require('autoprefixer'),
		require('cssnano')({
			preset: 'advanced',
			plugins: {
				'css-declaration-sorter': { order: 'smacss' }
			}
		})
	]
};
