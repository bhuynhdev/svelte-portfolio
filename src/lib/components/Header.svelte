<script>
	import { onMount } from 'svelte';

	let isHeaderScrolled = false;

	onMount(() => {
		document.onscroll = () => {
			isHeaderScrolled = document.documentElement.scrollTop >= 50;
		};
	});
</script>

<header class:header-scrolled={isHeaderScrolled}>
	<a href="/">BHUYNH.DEV</a>
	<input type="checkbox" id="nav-toggle" class="toggle" />
	<label for="nav-toggle" class="burger">
		<span />
	</label>
	<nav>
		<ul>
			<li class="nav-item">
				<a href="/#about">About</a>
			</li>
			<li class="nav-item">
				<a href="/#experience">Experiences</a>
			</li>
			<li class="nav-item">
				<a href="/#projects">Projects</a>
			</li>
			<li class="nav-item">
				<a href="/#contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<!-- STYLE -->
<style lang="scss">
	header {
		--header-text: #0f0f0f;
		z-index: 999;
		position: fixed;
		top: 0;
		left: 0;
		font-size: 1.2rem;
		color: var(--header-text);
		padding: 0.7rem var(--space-x);
		width: 100%;
		display: flex;
		justify-content: space-between;
		background-color: transparent;

		a:hover,
		a:focus {
			color: #000;
		}
	}

	.header-scrolled {
		background-color: #f9f9f9;
		box-shadow: 0px 1.5px 8px rgba(#111, 0.15);
	}

	nav {
		width: 100%;
		position: absolute;
		background-color: inherit;
		right: 0;
		top: 100%;
		padding-right: inherit; // Need to inherit padding from <header> because <nav> is absolute positioned (thus taken out of flow)
		ul {
			margin: 0;
			// Extra bottom padding on mobile
			padding-bottom: 10px;
			list-style-type: none;
			display: flex;
			flex-direction: column;
			text-align: right;
			gap: 0.7em;
			font-weight: 500;
			letter-spacing: 0.5px;
			a {
				opacity: 0;
				transition: opacity 100ms ease-in-out;
			}
		}

		transform: scaleY(0);
		transform-origin: top;
		transition: transform 350ms ease;
	}

	.toggle {
		display: none;
		&:checked ~ nav {
			transform: scaleY(1);
			ul a {
				opacity: 1;
				transition: opacity 150ms ease-in-out 125ms;
			}
		}
	}

	.burger {
		cursor: pointer;
		position: absolute;
		height: 100%;
		top: 0;
		right: 0;
		margin-right: var(--space-x);
		display: flex;
		align-items: center;

		span,
		span::before,
		span::after {
			display: block;
			background: #000;
			height: 2.2px;
			width: 1.75em;
			border-radius: 1px;
			position: relative;
		}

		span::before {
			content: '';
			position: absolute;
			bottom: 8px;
		}

		span::after {
			content: '';
			position: absolute;
			top: 8px;
		}
	}

	@media screen and (min-width: 70em) {
		header {
			// Expand header padding a bit on desktop
			padding: 1.35vw var(--space-x);
		}

		.burger {
			display: none;
		}

		nav {
			all: unset;
			ul {
				padding: 0;
				flex-direction: row;
				gap: 2vw;
				justify-content: flex-end;
				align-items: center;
				a {
					opacity: 1;
				}
			}
		}

		@media (hover) {
			.nav-item {
				position: relative;
				&::before {
					content: '';
					width: 50%;
					height: 2.5px;
					background-color: #0f0f0f;
					position: absolute;
					bottom: -3px;
					left: 50%;
					transform: translateX(-50%) scaleX(0%);
					border-radius: 5px;
					transition: transform 300ms ease;
				}
				&:hover::before {
					transform: translateX(-50%) scaleX(100%);
				}
			}
		}
	}
</style>
