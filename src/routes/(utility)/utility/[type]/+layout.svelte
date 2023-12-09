<script> 
	import Footer from '$lib/ui/footer.svelte';
	import Navigation from '$lib/ui/navigation.svelte';
</script>

<div class="h-full">
	<div class="h-full flex min-h-screen flex-col md:ml-64 place-content-between">
		<Navigation />
		<slot />
		<Footer />
	</div>
</div>
