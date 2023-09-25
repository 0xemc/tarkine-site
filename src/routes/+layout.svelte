<script>
	import '../app.postcss';
	import background from '$lib/assets/images/background.jpg';
	import logo from '$lib/assets/images/logo.png';
</script>

<img alt="background" class="background" src={background} />
<div class="content p-16 h-full">
	<img alt="logo" class="logo" src={logo} />
	<slot />
</div>

<style>
	.background {
		position: absolute;
		min-width: 100vw;
		min-height: 100vh;
	}
	.content {
		position: relative;
	}
	.logo {
		width: 260px;
		height: 85px;
	}
</style>
