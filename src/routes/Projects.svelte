<script>
	const projects = [
		{
			name: 'Robot simulation',
			desc: 'A warehouse robot program that scans barcode and picks packages autonomously',
			img: {
				src: '/lego-g094009400.jpg',
				alt: 'Lego car'
			},
			github: 'https://github.com/bhuynhdev/ENED-1120-Robotics-Proj5',
			skills: ['Python', 'Matplotlib'],
			blogpost: 'project-ened-robot'
		},
		{
			name: 'Todo calendar',
			desc: 'A full-stack web app that integrates a calendar and a todolist with a score system for	increasing productivity',
			img: {
				src: '/timeblock.png',
				alt: 'Calendar on the wall with text Timeblocker Calendar plus Todolist'
			},
			github: 'https://github.com/bhuynhdev/Habitica-Calendia',
			site: 'https://timeblock-calendar.up.railway.app/',
			skills: ['JavaScript', 'React', 'MongoDB', 'Express.js'],
			blogpost: 'project-todo-calendar'
		},
		{
			name: 'Photomosaic maker',
			desc: 'An automation script for creating photomosaics - an image made of thousands smaller photos',
			img: {
				src: '/mosaic.png',
				alt: 'Mosaic effect with a zoomed out section'
			},
			github: 'https://github.com/bhuynhdev/photomosaics',
			skills: ['Python', 'Pillow']
		}
	];
</script>

<section class="projects" id="projects">
	<h2>My Projects</h2>
	<div class="project-list">
		{#each projects as project, i (i)}
			<div class="project-item">
				<div class="thumbnail">
					<img src={project.img.src} alt={project.img.alt} />
				</div>
				<div class="info">
					<div class="headline">
						<h3 class="name">
							{#if project.blogpost}
								<!-- Anchor tag if blog link exists -->
								<a href={`/blog/${project.blogpost}`}>{project.name}</a>
							{:else}
								<!-- Else just project name -->
								{project.name}
							{/if}
						</h3>
						<span class="separator">|</span>
						<div class="links">
							{#if project.github}
								<a href={project.github} target="_blank" rel="noopener noreferrer"
									><i class="fa-brands fa-github" aria-label="Repository" /></a
								>
							{/if}
							{#if project.site}
								<a href={project.site} target="_blank" rel="noopener noreferrer"
									><i class="fa-solid fa-link" aria-label="Live site" /></a
								>
							{/if}
						</div>
					</div>
					<p>{project.desc}</p>
					<ul class="technologies" aria-label="Technologies list">
						{#each project.skills as skill, i (i)}
							<li class="pill">{skill}</li>
						{/each}
					</ul>
					{#if project.blogpost}
						<div class="read-more-wrapper">
							<a href={`/blog/${project.blogpost}`} class="read-more">Read more</a>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.projects {
		background-color: #f8f8f8;
	}

	.project-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		justify-content: center;
		max-width: 100%;
		gap: 5em;
	}

	.project-item {
		transform: scale(1);
		transition: transform 400ms ease;
		display: grid;
		grid-template-rows: max-content 1fr;
	}

	.thumbnail {
		margin-bottom: 15px;
		position: relative;
		img {
			border-radius: 5px;
			width: 100%;
			aspect-ratio: 4 / 3;
			box-shadow: 2px 4px 5px rgba(0, 0, 0, 30%);
			object-fit: cover;
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

	.technologies {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.6em;
		.pill {
			font-size: 0.75rem;
			padding: 0.25em 1em;
			background-color: #e5e5e5;
			border-radius: 15px;
		}
	}

	.read-more-wrapper {
		display: grid;
		place-items: center;
	}

	.read-more {
		font-size: 0.85rem;
		margin-top: 5px;
		padding: 0.3em 0.75em;
		display: block;
		border-radius: 3px;
		border: 1px solid #333;
		width: fit-content;
		&::after {
			content: '\f178';
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
			margin-left: 5px;
		}
	}

	@media (hover) {
		// Hover effect for Read more button
		.read-more {
			grid-area: 1 / 1 / 2 / 2;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 0.25em 0.75em;
			border-radius: 2px;
			border: 1px solid #f0f0f0;
			background-color: transparent;
			color: #f8f8f8;
			opacity: 0;
			cursor: pointer;
			transition: opacity 200ms linear;
		}

		.project-item:hover {
			transform: scale(1.05);

			.read-more {
				opacity: 1;
			}

			.thumbnail::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-radius: 5px;
				background-image: linear-gradient(rgba(0 0 0 / 0.5), rgba(0 0 0 / 0.65));
			}
		}
	}
</style>
