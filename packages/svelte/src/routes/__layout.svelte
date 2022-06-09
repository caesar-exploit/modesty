<div class="container">
	<slot />
</div>

<style lang="scss" global>
	.container {
		margin-inline: auto;
		width: min(100% - 2rem, 768px);
	}
	html,
	body {
		line-height: 1.4;
		font-size: 20px;
		font-family: system-ui, -apple-system, 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans',
			sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
		margin: 0;
	}
	* {
		box-sizing: border-box;
	}
</style>
