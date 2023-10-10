<script>
	import '../app.postcss';
	import background from '$lib/assets/images/background.jpg';
	import logo from '$lib/assets/images/logo.png';
</script>

<div class="background" style="background-image: url({background});" />
<div class="content p-5 lg:p-16 h-full">
	<img alt="logo" class="logo" src={logo} />
	<slot />
</div>

<style>
	.background {
		position: absolute;
		width: 100vw;
		height: 100vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.content {
		position: relative;
	}
	.logo {
		width: 260px;
		height: 85px;
	}

	@media (max-width: 768px) {
		.logo {
			width: 160px;
			height: 51px;
		}
	}
</style>
