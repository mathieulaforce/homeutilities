<script lang="ts">
	//https://demos.creative-tim.com/notus-svelte/admin/dashboard  
	export let title: string;
	export let color: string = "red";
</script>
<nav
		class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-between flex items-center p-4">
		<div
			class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4 py-4">
			<a
				class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
				href=".">{title}</a>
		</div>
	</nav>
	<div class="relative bg-{color}-500 md:pt-32 pb-32 pt-12">
		<div class="px-4 md:px-10 mx-auto w-full">
			<slot></slot>
		</div>
	</div>