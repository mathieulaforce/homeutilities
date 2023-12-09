<script>
	import { setContext } from "svelte";
 
	import { TvSolid, BoltSolid, DropletSolid, FireSolid } from "svelte-awesome-icons";
	const iconCtx = {
    size: '20',
	display: 'inline'
  };
  setContext('iconCtx', iconCtx);
</script>
<nav
	class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
>
	<div
		class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
	>
		<button
			class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
			type="button"><i class="fas fa-bars" /></button
		>
		<a
			class="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
			href="/notus-svelte/">Home utilities</a
		>

		<div
			class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden"
		>
			<hr class="my-4 md:min-w-full" />
			<!-- <h6
			class="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
		>
			Title
		</h6> -->
			<ul class="md:flex-col md:min-w-full flex flex-col list-none">
				<li class="items-center">
					<a
						href="/"
						class="text-xs uppercase py-3 font-bold block text-red-500 hover:text-red-600"
						>
						<i class="mr-2 text-sm opacity-75"><TvSolid class="inline"/></i>
						Dashboard</a
					>
				</li>
			</ul>
			<hr class="my-4 md:min-w-full" />
			<h6
			class="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
		>
			Utilities
		</h6>
			<ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">

				<li class="items-center">
					<a
						href="/utility/water"
						class="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
						>
						<i class="mr-2 text-sm opacity-75"><DropletSolid class="inline"/></i>
						Water</a
					>
				</li>
				<li class="items-center">
					<a
					href="/utility/electricity"
						class="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
						>
						<i class="mr-2 text-sm opacity-75"><BoltSolid class="inline"/></i>
						electricity</a
					>
				</li>
				<li class="items-center">
					<a
					href="/utility/gas"
						class="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
						>
						<i class="mr-2 text-sm opacity-75 inline"><FireSolid class="inline"/></i>
						gas</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
