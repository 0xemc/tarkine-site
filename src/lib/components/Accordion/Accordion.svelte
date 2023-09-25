<script lang="ts">
	import IcBaselineAdd from '~icons/ic/baseline-add';
	import IcBaselineMinus from '~icons/ic/baseline-minus';
	export let title: string;
	let isOpen = false;

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div
	class={`accordion relative w-20 h-full bg-accent2 ${$$restProps.class}`}
	class:isOpen
	on:click={toggle}
	on:keydown={(e) => e.key === 'Enter' && toggle()}
	role="button"
	tabindex="0"
>
	{#if isOpen}
		<div class="content w-full">
			<span class="label w-fit border-b-2 pr-4" class:isOpen>{title} </span>

			<slot />
		</div>
		<IcBaselineMinus class="m-5 w-10 h-10 absolute left-0 bottom-0" />
	{:else}
		<span class="label">{title}</span>
		<IcBaselineAdd class="m-5 w-10 h-10" />
	{/if}
</div>

<style>
	.accordion {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		transition: width 0.4s ease;
	}
	.accordion.isOpen {
		width: 400px;
	}
	.label {
		display: flex;
		align-items: center;
		writing-mode: vertical-rl;
		font-family: 'Roboto';
		font-size: 2rem;
		padding: 1rem;
		margin-top: 1.5rem;
	}
	.label.isOpen {
		writing-mode: unset;
	}
</style>
