<script lang="ts">
	import IcBaselineAdd from '~icons/ic/baseline-add';
	import IcBaselineMinus from '~icons/ic/baseline-minus';
	export let direction: 'vertical' | 'horizontal' = 'vertical';
	export let title: string;
	export let isOpen = false;

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div
	class={`accordion relative bg-accent2 ${$$restProps.class} ${direction}`}
	class:isOpen
	on:click={toggle}
	on:keydown={(e) => e.key === 'Enter' && toggle()}
	role="button"
	tabindex="0"
>
	{#if isOpen}
		<div class="content w-full h-full">
			<span class="label w-fit border-b-2" class:isOpen>{title}</span>
			<slot />
		</div>
		<div class="minus-icon">
			<IcBaselineMinus class="w-8 h-8" />
		</div>
	{:else}
		<span class="label">{title}</span>
		<div class="add-icon">
			<IcBaselineAdd class="w-8 h-8" />
		</div>
	{/if}
</div>

<style>
	.accordion {
		width: 5rem;
		display: flex;
		height: 100%;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		transition: width 0.2s ease;
	}
	.accordion.vertical.isOpen {
		width: 40vw;
	}

	.accordion.horizontal {
		flex-direction: row;
		width: 100%;
	}

	.label {
		display: flex;
		align-items: center;
		writing-mode: vertical-rl;
		font-family: 'Roboto';
		font-size: 2rem;
		padding: 1rem 1.5rem;
		margin-top: 1.5rem;
	}

	.accordion.horizontal .label {
		writing-mode: unset;
		margin: 0;
		padding: 0.7rem 1.5rem;
	}
	.label.isOpen {
		writing-mode: unset;
	}

	.minus-icon {
		margin: 1rem;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	.add-icon {
		margin: 1rem;
	}

	@media (max-width: 768px) {
		.accordion.isOpen {
			height: 60vh;
			overflow: scroll;
		}
	}

	@media (max-width: 768px) {
		.minus-icon {
			top: 0;
			right: 0;
			left: unset;
			bottom: unset;
		}
	}

	@media (max-width: 768px) {
		.label {
			font-size: 1.5rem;
		}
	}
</style>
