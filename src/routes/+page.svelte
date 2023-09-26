<script lang="ts">
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
			Lorem ipsum dolor sit amet consectetur. Lorem in ipsum facilisis mauris in. Aliquam sit
			ultrices tellus libero vitae nunc. Arcu magna sodales et phasellus leo. <br /><br />Sagittis
			proin lectus lectus egestas tempus et. Amet sit pellentesque diam gravida pellentesque nunc
			tortor sit volutpat. Feugiat nibh quisque iaculis morbi sapien sed enim diam sed. Leo id
		</p>

		<!-- TEAM -->
		<div class="bg-slate-200 bg-opacity-20 p-7 grid gap-3">
			<h3>Team</h3>
			<div class="grid gap-3 text-right w-fit" style="grid-template-columns:auto auto;">
				<img
					class="w-20 h-20 rounded-md"
					alt="profile"
					src="https://randomuser.me/api/portraits/men/10.jpg"
				/>
				<div class="m-2 ml-4 grid">
					<h4 class="text">Michael Collins</h4>
					<sub class="text-opacity-50 text-sm ml-auto">Product/Engineering</sub>
				</div>
				<img
					class="w-20 h-20 rounded-md"
					alt="profile"
					src="https://randomuser.me/api/portraits/women/11.jpg"
				/>
				<div class="m-2 ml-4 flex flex-col">
					<h4 class="text">Laure Claret</h4>
					<sub class="text-opacity-50 text-sm ml-auto">Engineering</sub>
				</div>
				<img
					class="w-20 h-20 rounded-md"
					alt="profile"
					src="https://randomuser.me/api/portraits/men/22.jpg"
				/>
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
			Lorem ipsum dolor sit amet consectetur. Lorem in ipsum facilisis mauris in. Aliquam sit
			ultrices tellus libero vitae nunc. Arcu magna sodales et phasellus leo. <br /><br />Sagittis
			proin lectus lectus egestas tempus et. Amet sit pellentesque diam gravida pellentesque nunc
			tortor sit volutpat. Feugiat nibh quisque iaculis morbi sapien sed enim diam sed. Leo id
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
		bottom: 0;
		top: unset;
		height: auto;
		width: 100%;
	}
</style>
