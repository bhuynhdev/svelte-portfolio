<section id="hero">
	<div class="text">
		<div class="intro">
			<h1>
				Hi, I'm Bao Huynh, <br class="break" />
				a <span class="highlight">Full-stack developer</span>.
			</h1>
			<p class="description">
				I&apos;m a passionate software developer striving to make web applications that look great
				and perform great using modern technologies.
			</p>
		</div>
		<div class="cta">
			<a href="#projects" class="cta__main">See my works</a>
			<a href="#contact" class="cta__sub">Contact me</a>
		</div>
	</div>
	<div class="image">
		<img src="/undraw_code_thinking_re_gka2.svg" alt="" class="illustration" />
	</div>
</section>

<style lang="scss">
	.break,
	.illustration {
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
		animation-delay: 200ms;

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

	@media (hover) {
		.cta a {
			transform: scale(1);
			transition: transform 200ms ease;
		}
		.cta a:hover {
			transform: scale(1.1);
			text-decoration: underline;
		}
	}

	@media screen and (min-width: 60em) {
		.break {
			display: inline;
		}

		.illustration {
			display: block;
			max-height: 800px;
		}

		section {
			display: grid;
			grid-template-columns: 1fr 47%;
			place-items: center;
			.description {
				width: 90%;
			}
		}

		.cta {
			flex-direction: row;
			justify-content: flex-start;
			gap: 2.5em;
		}
	}
</style>
