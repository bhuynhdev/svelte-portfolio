<script>
	const experiences = [
		{
			title: 'Full-stack intern',
			company: 'Siemens',
			companyLink: 'https://www.sw.siemens.com/en-US/',
			date: 'Jan 2022 - present',
			bullets: [
				'Collaborated effectively in a team of 4 to prototype a SaSS product',
				'Inspected and modified HTML, JavaScript, and JSON code to simplify the web UI and improve User Experience by 20%',
				'Fixed defects, and wrote automated Jenkin tests to improve code coverage by 5%',
				'Presented POC demo successfully to 6 upper managers and stakeholders'
			]
		},
		{
			title: 'Full-stack intern',
			company: 'EyeQ Tech',
			companyLink: 'https://eyeq.tech/',
			date: 'Jan 2021 - Aug 2021',
			bullets: [
				'Spearheaded the migration of backend codebase from Express to NestJS, Typescript, and MongoDB',
				"Refactored company's flagship <strong>React.js</strong> hotel management app used by 6 hotels across the nation, reducing codebase by 30%",
				'Increased test coverage by 70% through high-quality unit tests using Jest',
				"Authored a Flask API to manage the company email server's functionalities",
				'Constructed a CI/CD pipeline to save operation speed by 20%'
			]
		}
	];
</script>

<section class="experience" id="experience">
	<h2>My Experiences</h2>
	<ul class="timeline">
		{#each experiences as experience, i (i)}
			<li class="timeline-item">
				<div>
					<h3>
						{experience.title}
						<span class="company-highlight"
							>@ <a href={experience.companyLink} target="_blank" rel="noopenner rereferrer"
								>{experience.company}</a
							></span
						>
					</h3>
					<p class="date">{experience.date}</p>
					<div class="bullet-points">
						<ul>
							{#each experience.bullets as bulletPoint, i (i)}
								<li>{@html bulletPoint}</li>
							{/each}
						</ul>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	.timeline {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 3em;
		position: relative;
		h3 {
			font-size: 1.25rem;
		}
		.date {
			margin-bottom: 0.75em;
			color: #555;
		}
		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			height: 100%;
			width: 1px;
			background-color: black;
		}
	}

	.timeline-item {
		margin-top: 5px;
		margin-left: 15px;
		background-color: #efefef;
		padding: 1em 1.5em;
		border-radius: 10px;
		position: relative;
		&::before {
			--dot-size: 15px;
			content: '';
			position: absolute;
			top: -10px;
			left: -15px;
			transform: translate(-50%);
			width: var(--dot-size);
			height: var(--dot-size);
			border-radius: 50%;
			background-color: #333;
		}
	}

	.bullet-points ul {
		list-style-type: disc;
		margin-left: 0.75em;
	}

	.company-highlight {
		color: #505050;
	}

	@media screen and (min-width: 70em) {
		.timeline::before {
			left: 50%;
			transform: translateX(-50%);
		}

		.timeline-item {
			--spacer: 30px; /* Space between text and timeline bar */
			width: calc(50% - var(--spacer));
			&:nth-child(odd) {
				align-self: flex-start;
				margin-left: 0;
				border-top-right-radius: 0px;
				&::before {
					left: calc(100% + var(--spacer));
				}
			}
			&:nth-child(even) {
				align-self: flex-end;
				border-top-left-radius: 0px;
				&::before {
					left: calc(-1 * var(--spacer));
				}
			}
		}
	}

	@media (hover) {
		.company-highlight {
			a {
				position: relative;
				&::before {
					content: '';
					position: absolute;
					display: block;
					left: 0;
					bottom: -2.5px;
					width: 100%;
					height: 2px;
					background-color: #0f0f0f;
					transform: scaleX(0%);
					transform-origin: left;
					transition: transform 300ms ease;
				}
			}
			&:hover,
			:focus-within {
				a::before {
					transform: scaleX(100%);
				}
			}
		}
	}
</style>
