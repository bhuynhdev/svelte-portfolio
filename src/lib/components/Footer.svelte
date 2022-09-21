<footer class="footer">
	<nav class="nav">
		<ul class="links">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="#about">About</a>
			</li>
			<li>
				<a href="#projects">Projects</a>
			</li>
			<li>
				<a href="#contact">Contact</a>
			</li>
		</ul>
	</nav>
	<div class="socials">
		<ul>
			<li>
				<a href="https://github.com/bhuynhdev">
					<img src="/icons/github.svg" alt="Github icon" width="32" />
				</a>
			</li>
			<li>
				<a href="https://linkedin.com/in/bhuynhuc">
					<img src="/icons/linkedin.svg" alt="LinkedIn icon" width="32" />
				</a>
			</li>
			<li>
				<a href="https://twitter.com/bhuynhtweet">
					<img src="/icons/twitter.svg" alt="Twitter icon" width="32" />
				</a>
			</li>
			<li>
				<a href="https://instagram.com">
					<img src="/icons/instagram.svg" alt="Instagram icon" width="32" />
				</a>
			</li>
		</ul>
	</div>
	<p>© 2022 Bao Huynh</p>
</footer>

<style lang="scss">
	.footer {
		background-color: #f8f8f8;
		text-align: center;
		padding: 0.5rem;
		font-size: 1.1rem;
	}

	.nav {
		display: flex;
		justify-content: center;
	}

	.links {
		display: flex;
		gap: 1em;

		li a:hover {
			color: #28afb0;
		}
	}

	.socials {
		display: flex;
		justify-content: center;
		align-items: center;
		ul {
			display: flex;
			gap: 2em;
		}
	}
</style>
