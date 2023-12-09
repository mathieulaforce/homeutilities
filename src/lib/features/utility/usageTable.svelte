<script lang="ts">
	import type { UtilityType } from "$lib/types";
	import UtilityTypeIcon from "./utilityTypeIcon.svelte";

	export let type: UtilityType;
	const bgGround = {
		water: 'bg-blue-',
		electricity: 'bg-yellow-',
		gas: 'bg-orange-'
	};
	const textColor = {
		water: 'text-blue-500',
		electricity: 'text-yellow-500',
		gas: 'text-orange-500'
	};
	const textDarkerColor = {
		water: 'text-blue-700',
		electricity: 'text-yellow-700',
		gas: 'text-orange-700'
	};

</script>
<div class="px-4">
	<div class="relative flex flex-col min-w-0 break-words {bgGround[type]}100 w-full mb-6 shadow-lg rounded">
		<div class="rounded-t mb-0 px-4 py-3 border-0">
			<div class="flex flex-wrap items-center">
				<UtilityTypeIcon {type}/>
				<div class="relative w-full px-4 max-w-full flex-grow flex-1">
					<h3 class="font-semibold text-base {textDarkerColor[type]}"> {type}</h3>
				</div>
				<!-- <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
					<button
						class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="button">See all</button>
				</div> -->
			</div>
		</div>
		<div class="block w-full overflow-x-auto">
			<table class="items-center w-full bg-transparent border-collapse">
				<thead class="thead-light "
					><tr
						><th
							class="px-6 {bgGround[type]}50 {textColor[type]} align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
							>Date</th>
						<th
							class="px-6 {bgGround[type]}50 {textColor[type]} align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
							>Meter reading</th>
						<th
							class="px-6 {bgGround[type]}50 {textColor[type]} align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
							Usage</th>
					</tr></thead>
				<tbody class="{textDarkerColor[type]}">
					<tr
						><th
							class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
							>21/10/2023</th>
						<td
							class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							553</td>
						<td
							class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							31 m³</td>
						</tr>
						<tr
						><th
							class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
							>21/10/2023</th>
						<td
							class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							553</td>
						<td
							class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							31 m³</td>
						</tr>
						<tr
						><th
							class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
							>21/10/2023</th>
						<td
							class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							553</td>
						<td
							class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
							31 m³</td>
						</tr></tbody>
			</table>
		</div>
	</div>
</div>
