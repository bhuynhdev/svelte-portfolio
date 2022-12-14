<section id="hero">
	<div class="text">
		<div class="intro">
			<h1>
				Hi, I'm Bao Huynh,<br class="headline-break" /> a
				<span class="highlight">Full-stack developer</span>.
			</h1>
			<p class="description">
				I&apos;m a passionate software developer striving to make applications that look smooth and
				perform great using modern technologies.
			</p>
		</div>
		<div class="cta">
			<a href="#projects" class="cta__main">See my works</a>
			<a href="#contact" class="cta__sub">Contact me</a>
		</div>
		<ul class="socials">
			<li>
				<a href="https://github.com/bhuynhdev" target="_blank" rel="noopener noreferrer">
					<i class="fa-brands fa-github" aria-label="Github" />
				</a>
			</li>
			<li>
				<a href="https://linkedin.com/in/bhuynhuc" target="_blank" rel="noopener noreferrer">
					<i class="fa-brands fa-linkedin" aria-label="Linkedin" />
				</a>
			</li>
			<li>
				<a href="https://twitter.com/bhuynhtweet" target="_blank" rel="noopener noreferrer">
					<i class="fa-brands fa-twitter" aria-label="Twitter" />
				</a>
			</li>
			<li>
				<a href="https://instagram.com/unflinch_camel" target="_blank" rel="noopener noreferrer">
					<i class="fa-brands fa-instagram" aria-label="Instagram" />
				</a>
			</li>
		</ul>
	</div>
	<div class="image">
		<img src="/undraw_code_thinking_re_gka2.svg" alt="" class="illustration" />
		<img src="/plus-accent.svg" alt="plus signs" class="accent plus-accent" />
		<img src="/curly-accent.svg" alt="plus signs" class="accent curly-accent" />
		<img src="/diamond-dot-accent.svg" alt="plus signs" class="accent diamond-accent" />
		<div class="accent cube accent-bottom-right">TS</div>
		<div class="accent cube accent-top-left">JS</div>
	</div>
</section>

<style lang="scss">
	.headline-break,
	.image {
		display: none;
	}

	section {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2em;
		.intro {
			margin-bottom: 2em;
			h1 {
				margin-bottom: 0.75em;
			}
		}

		> * {
			margin-top: 3rem;
		}
	}

	.highlight {
		padding: 5px;
		white-space: nowrap;
		color: #f5f5f5;
		position: relative;
		// background-color: #111;
		background-image: linear-gradient(to right, transparent 50%, black 50%);
		background-size: 200%;
		animation: expand 600ms ease-out forwards;
		animation-delay: 400ms;

		@keyframes expand {
			from {
				background-position: 0;
			}
			to {
				background-position: -100%;
			}
		}
	}

	.cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5em;
		font-size: 1.1em;
		a {
			width: 17ch;
			text-align: center;
			padding: 0.75em;
			border-radius: 5px;
		}

		&__main {
			color: #f5f5f5;
			background-color: #0f0f0f;
		}

		&__sub {
			border: 1px solid #0f0f0f;
		}
	}

	.socials {
		display: flex;
		gap: 1em;
		font-size: 2.25em;
		justify-content: center;
		align-items: center;
		margin-bottom: 0;
	}

	@media (hover) {
		.cta a {
			transform: scale(1);
			transition: transform 200ms ease;
		}
		.cta a:hover {
			transform: scale(1.07);
			text-decoration: underline;
		}
	}

	@media screen and (min-width: 60em) {
		section {
			display: grid;
			grid-template-columns: 1fr 47%;
			align-items: center;
			justify-content: space-between;
			.headline-break {
				display: inline;
			}
			.description {
				width: 90%;
			}
		}

		.cta {
			flex-direction: row;
			justify-content: flex-start;
			gap: 2.5em;
		}

		.socials {
			justify-content: flex-start;
		}

		.image {
			display: block;
			position: relative;

			.accent {
				position: absolute;
			}
			.illustration {
				max-height: 800px;
			}
		}

		.plus-accent {
			z-index: -1;
			width: 100px;
			right: -16px;
			bottom: -25px;
		}

		.curly-accent {
			z-index: -1;
			width: 60px;
			right: 0px;
			top: -40px;
		}

		.diamond-accent {
			z-index: -1;
			width: 4.5em;
			left: 23%;
			top: -50px;
		}

		.cube {
			--side-width: 6px;
			font-weight: 650;
			font-family: Poppins;
			width: 55px;
			height: 50px;
			background-color: var(--front-color);
			border-right: var(--side-width) solid var(--right-color);
			border-top: var(--side-width) solid var(--top-color);
			display: grid;
			place-items: center;
			animation: float 1.5s ease infinite alternate;

			&:after {
				content: '';
				position: absolute;
				inset: auto auto 100% 0; // left 0px bottom 100%
				border: calc(var(--side-width) * 0.51) solid transparent;
				border-left: calc(var(--side-width) * 0.51) solid white;
				border-top: calc(var(--side-width) * 0.51) solid white;
			}

			&:before {
				content: '';
				position: absolute;
				inset: auto auto 0 100%; // bottom 0 left 100%
				border: calc(var(--side-width) * 0.51) solid transparent;
				border-bottom: calc(var(--side-width) * 0.51) solid white;
				border-right: calc(var(--side-width) * 0.51) solid white;
			}

			@keyframes float {
				from {
					transform: translateY(0);
				}
				to {
					transform: translateY(15px);
				}
			}
		}

		.accent-top-left {
			width: 50px;
			// background-image: url('/js_logo.png');
			--front-color: hsl(54, 93%, 53%);
			--right-color: hsl(54, 90%, 43%);
			--top-color: hsl(54, 90%, 68%);
			position: absolute;
			top: calc(-50px - 1em);
			left: 20%;
			animation-delay: 0.5s;
		}
		.accent-bottom-right {
			// background-image: url('/css_logo.png');
			--front-color: hsl(243, 100%, 69%);
			--right-color: hsl(243, 100%, 65%);
			--top-color: hsl(243, 100%, 80%);
			position: absolute;
			bottom: calc(-50px - 1em);
			left: 80%;
		}
	}
</style>
