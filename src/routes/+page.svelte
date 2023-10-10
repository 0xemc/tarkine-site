<script lang="ts">
	import michael from '$lib/assets/images/michael_profile.png';
	import laure from '$lib/assets/images/laure_profile_3.jpg';
	import justin from '$lib/assets/images/justin_profile.jpeg';
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import { mobile } from '$lib/stores/responsive';
	let direction: 'horizontal' | 'vertical';
	$: {
		direction = $mobile ? 'horizontal' : 'vertical';
	}
</script>

<h1 class={`subtext`}>
	Environmental analytics,<br /> for better decision-making
</h1>

<div class={`accordion-group ${direction}`}>
	<Accordion title="About" class="bg-accent2" {direction}
		><p class="m-7">
			We are a team of engineers & designers dedicated to building products that provide insights
			and information about natural and man-made systems using remote-sensing tools, leveraging new
			technologies to allow better decision making on the ground.
			<br /><br />We use satellite data, machine learning and cryptographic technology to enable
			detailed, automated and provable decision making
		</p>

		<!-- TEAM -->
		<div class="bg-slate-200 bg-opacity-20 p-7 grid gap-3">
			<h3>Team</h3>
			<div class="grid gap-3 text-right w-fit" style="grid-template-columns:auto auto;">
				<img class="w-20 h-20 rounded-md" alt="profile" src={michael} />
				<div class="m-2 ml-4 grid">
					<h4 class="text">Michael Collins</h4>
					<sub class="text-opacity-50 text-sm ml-auto">Product & Engineering</sub>
				</div>
				<img class="w-20 h-20 rounded-md" alt="profile" src={laure} />
				<div class="m-2 ml-4 flex flex-col">
					<h4 class="text">Laure Claret</h4>
					<sub class="text-opacity-50 text-sm ml-auto">Engineering</sub>
				</div>
				<img class="w-20 h-20 rounded-md" alt="profile" src={justin} />
				<div class="m-2 ml-4 flex flex-col">
					<h4 class="text">Justin Pybus</h4>
					<sub class="text-opacity-50 text-sm ml-auto">Design</sub>
				</div>
			</div>
		</div>
		<!-- CONTACT -->
		<div class="p-7">
			<h3>Contact</h3>
			<p>
				<a class="text-xl" href="mailto:michael@tarkine.io">michael@tarkine.io</a><br />
				<a href="tel:+61429142912">+61 429 142 912</a>
			</p>
		</div>
	</Accordion>
	<Accordion title="TkToken" class="bg-accent3" {direction}>
		<div class="flex w-full h-full justify-center items-center text-2xl p-10">En route...</div>
	</Accordion>

	<Accordion title="Carbonmap" class="bg-foreground" {direction}>
		<p class="m-7">
			Carbonmap is an effort to enable high fidelity accounting and tracking of natural carbon
			stores via satellite imagery. Machine learning models are run over designated sections of
			forests at specified intervals in order to extract changes in tree cover, stored carbon and
			other biodiversity metrics.
		</p>

		<video controls class="w-full">
			<source src="" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</Accordion>
</div>

<style>
	.subtext {
		position: absolute;
		bottom: 6rem;
		padding-bottom: 10px;
		font-weight: 300;
		font-size: 4.5rem;
		line-height: initial;
	}

	@media (max-width: 768px) {
		.subtext {
			/* bottom: 14rem; */
			top: 6rem;
			color: slategray;
			font-size: 2.1rem;
		}
	}
	.accordion-group {
		display: flex;
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
	}
	.accordion-group.horizontal {
		flex-direction: column;
		bottom: env(safe-area-inset-bottom);
		/* bottom: 0; */
		top: unset;
		height: auto;
		width: 100%;
	}
</style>
