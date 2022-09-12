<section id="hero">
	<h1>I'm Bao Huynh and I'm<br />a <span class="highlight">Full-stack developer</span>.</h1>
	<p>
		I&apos;m a passionate software developer striving to make web applications that look great and
		perform great using modern technologies.
	</p>
</section>

<style lang="scss">
	section {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	p {
		width: 50%;
		margin-top: 2em;
	}

	.highlight {
		padding: 5px;
		color: #f5f5f5;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #111;
			z-index: -1;
			animation: expand 450ms ease-out forwards;
			animation-delay: 350ms;
			transform-origin: left;
			transform: scaleX(0);
		}

		@keyframes expand {
			to {
				transform: scaleX(100%);
			}
		}
	}
</style>
