<script>
	import SkillIcon from '$lib/components/SkillIcon.svelte';
</script>

<section class="skills" id="skills">
	<h2>Skills</h2>
	<div class="content-wrapper">
		<div class="skill-category">
			<div class="headline">
				<h3>Frontend</h3>
				<p>Crafting smooth frontend</p>
			</div>
			<ul class="list">
				{#each ['React', 'Angular', 'JavaScript', 'Typescript', 'HTML', 'SASS', 'Nextjs', 'TailwindCSS'] as skill}
					<li class="skill-item">
						<SkillIcon iconName={skill} size={40} />
					</li>
				{/each}
			</ul>
		</div>
		<div class="skill-category">
			<div class="headline">
				<h3>Backend</h3>
				<p>Creating scaleable backend</p>
			</div>
			<ul class="list">
				{#each ['Nodejs', 'Express', 'NestJS', 'MongoDB', 'MySQL', 'Python', 'FastAPI', 'Flask'] as skill}
					<li class="skill-item">
						<SkillIcon iconName={skill} size={40} />
					</li>
				{/each}
			</ul>
		</div>
		<div class="skill-category">
			<div class="headline">
				<h3>Developer tools</h3>
				<p>Use the right tool</p>
			</div>
			<ul class="list">
				{#each ['Azure', 'Git', 'Github', 'Heroku', 'Jest', 'VsCode'] as skill}
					<li class="skill-item">
						<SkillIcon iconName={skill} size={40} />
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
	.content-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2em;
		> * {
			flex: 1;
		}
	}

	.skill-category {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.list {
		margin-top: 2em;
		display: flex;
		gap: 1.5em 2.25em;
		flex-wrap: wrap;
		justify-content: center;
		.skill-item {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 12px;
			transform: scale(1);
			transition: transform 200ms;
			&:hover {
				transform: scale(1.15);
			}
		}
	}

	@media screen and (min-width: 60em) {
		.content-wrapper {
			flex-direction: row;
			gap: 4em;
			align-items: flex-start;
		}
	}
</style>
