<script lang="ts">
	import { ArrowDownSolid } from 'svelte-awesome-icons'; 
	import type { UtilityTypes } from '$lib/types';
	import UtilityTypeIcon from './utilityTypeIcon.svelte';

	export let type: UtilityTypes;
	export let subTitle: string;

	const bgGround = {
		water: 'bg-blue-100',
		electricity: 'bg-yellow-100',
		gas: 'bg-orange-100'
	};
</script>

<div class="w-full lg:w-6/12 xl:w-3/12 px-4">
	<div
		class={`relative flex flex-col min-w-0 break-words ${bgGround[type]} rounded mb-6 xl:mb-0 shadow-lg`}>
		<div class="flex-auto p-4">
			<div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-slate-400 uppercase font-bold text-xs">{type}</h5>
                    <span class="font-semibold text-xl text-slate-700">{subTitle}</span>
                </div>
                <div class="relative w-auto pl-4 flex-initial"> 
                    <UtilityTypeIcon type={type} />
                </div>
            </div>
			<p class="text-sm text-slate-400 mt-4"> 
				<span class="mr-2 text-red-500"><ArrowDownSolid /> 3.48%</span>
				<span class="whitespace-nowrap">Since last week </span>
			</p>
		</div>
	</div>
</div>
