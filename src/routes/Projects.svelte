<section>
	<h2>My Projects</h2>
	<div class="projects">
		<div class="project-item">
			<img src="/lego-g094009400.jpg" alt="Lego car" />
			<div class="headline">
				<h3 class="name">Robot simulation</h3>
				<span class="separator">|</span>
				<div class="links">
					<a href="https://github.com"><i class="fa-brands fa-github" aria-label="Repository" /></a>
					<a href="https://netlify.com"><i class="fa-solid fa-link" aria-label="Live site" /></a>
				</div>
			</div>
			<p>A warehouse robot program that scans barcode and picks packages autonomously</p>
			<ul class="technologies" aria-label="Technologies list">
				{#each ['Python', 'Matplotlib'] as skill}
					<li class="pill">{skill}</li>
				{/each}
			</ul>
		</div>

		<div class="project-item">
			<img
				src="/timeblock.png"
				alt="Calendar on the wall with text Timeblocker Calendar plus Todolist"
			/>
			<div class="headline">
				<h3 class="name">Todo calendar</h3>
				<span class="separator">|</span>
				<div class="links">
					<a href="https://github.com"><i class="fa-brands fa-github" aria-label="Repository" /></a>
					<a href="https://netlify.com"><i class="fa-solid fa-link" aria-label="Live site" /></a>
				</div>
			</div>
			<p>
				A full-stack web app that integrates a calendar and a todolist with a score system for
				increasing productivity
			</p>
			<ul class="technologies" aria-label="Technologies list">
				{#each ['JavaScript', 'React', 'MongoDB', 'Express.js'] as skill}
					<li class="pill">{skill}</li>
				{/each}
			</ul>
		</div>

		<div class="project-item">
			<img src="/mosaic.png" alt="Mosaic effect with a zoomed out section" />
			<div class="headline">
				<h3 class="name">Photomosaic maker</h3>
				<span class="separator">|</span>
				<div class="links">
					<a href="https://github.com"><i class="fa-brands fa-github" aria-label="Repository" /></a>
				</div>
			</div>
			<p>
				An automation script for creating photomosaics - an image made of thousands smaller photos
			</p>
			<ul class="technologies" aria-label="Technologies list">
				{#each ['Python', 'Pillow'] as skill}
					<li class="pill">{skill}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
	.projects {
		margin-top: 3em;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		justify-content: center;
		max-width: 100%;
		gap: 5em;
	}

	.project-item {
		transform: scale(1);
		transition: transform 400ms ease;
		img {
			border-radius: 5px;
			box-shadow: 2px 4px 5px rgba(0, 0, 0, 30%);
			margin-bottom: 1em;
			width: 100%;
			aspect-ratio: 4/3;
			object-fit: cover;
		}

		.technologies {
			display: flex;
			flex-direction: row;
			gap: 0.6em;
			.pill {
				font-size: 0.75rem;
				padding: 0.25em 1em;
				background-color: #e5e5e5;
				border-radius: 15px;
			}
		}

		&:hover {
			transform: scale(1.075);
		}
	}

	.headline {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.75em;
		.name,
		.separator {
			font-size: 1.5rem;
		}
		.links {
			display: flex;
			gap: 0.5em;
			font-size: 1.3em;
			align-items: center;
		}
	}
</style>
