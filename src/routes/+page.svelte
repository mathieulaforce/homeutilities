<script lang="ts">
	//https://demos.creative-tim.com/notus-svelte/admin/dashboard
	import UtilityCard from '$lib/features/utility/utilityCard.svelte';
	import UsageTable from '$lib/features/utility/usageTable.svelte';
	import type { DataType } from '$lib/types'; 
	import Header from '$lib/ui/header.svelte';
	import MainContent from '$lib/ui/mainContent.svelte';
	export let data: DataType;
</script>

<div class="relative">
	<Header title="Dashboard">
		<div>
			<div class="flex flex-wrap justify-center">
				{#each data.utilities as utility}
					<UtilityCard type={utility.type} subTitle={`${utility.usage} ${utility.unit}`} />
				{/each}
			</div>
		</div>
	</Header>
	<MainContent>
		<div class="flex flex-wrap">
			<div class="w-full md:w-fit mb-12 xl:mb-0">
				<UsageTable type="water" />
			</div>
			<div class="w-full md:w-fit mb-12 xl:mb-0">
				<UsageTable type="electricity" />
			</div>
			<div class="w-full md:w-fit mb-12 xl:mb-0">
				<UsageTable type="gas" />
			</div>
		</div>
	</MainContent>
</div>
