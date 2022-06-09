<h1>{`<a>: The Anchor element`}</h1>

<p>
	The a HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages,
	files, email addresses, locations in the same page, or anything else a URL can address.
</p>

<h3>kinds</h3>
<div class="spaces">
	<a href="a">anchor</a>
	<a href="a" class:dis={true}>anchor {`class:dis={true}`}</a>
	<a href="a" aria-busy={true}>anchor {`aria-busy={true}`}</a>
</div>

<h3>types (default)</h3>
<p>$type-decoration: true;</p>
<p>$type-disabled: true;</p>
<p>$type-loading: true;</p>

<h3>sizes</h3>
<p>min 80 B | max 538 B</p>

<style lang="scss">
	@use '../../../../styles/scss/elements/a.scss' with (
		$type-decoration: true,
		$type-disabled: true,
		$type-loading: true
	);

	.spaces {
		gap: 0.5rem;
		display: grid;
	}
</style>
