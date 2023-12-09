<script lang="ts"> 
	import { BoltSolid, DropletSolid, FireSolid } from 'svelte-awesome-icons';

    export let type: "water" | "electricity" | "gas"; 
</script>

{#if type == "water"}
    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
        <DropletSolid />
    </div>
	 
{:else if type == "electricity"}
    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-yellow-500">
        <BoltSolid />
    </div>
	 
{:else}
    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
        <FireSolid />
    </div>
{/if}
 