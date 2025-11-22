<script lang="ts">
    import Tables from "./components/tables.svelte";
    import EarthGlobe from "$lib/components/ui/globe/globe1.svelte";
    import { Button } from "$lib/components/ui/button/index";
    import { Spinner } from "$lib/components/ui/spinner/index";
    import { onMount } from "svelte";

    let loading: boolean = $state(true);
    onMount(() => {
        console.log("Page loaded");
        setTimeout(() => {
            loading = false;
        }, 1500);
    });
</script>

<div class="flex flex-col p-7 gap-7">
    {#if loading}
        <div class="flex items-center gap-3 h-screen w-screen justify-center">
            <p class="text-2xl animate-pulse">Loading the list......</p>
            <Spinner class="size-20 text-green-500" />
        </div>
    {:else}
        <Button
            class="text-4xl"
            variant="link"
            onclick={() => {
                window.location.reload();
            }}>RESEARCH COMPANIES</Button
        >
        <EarthGlobe
            scale={1.1}
            baseColor={[0.65, 0.898, 0.141]}
            markerColor={[0.65, 0.898, 0.141]}
            glowColor={[0.65, 0.898, 0.141]}
        />
        <p class="text-lg text-center leading-7 not-first:mt-6">
            Comphrehensive list of research companies in select contries along
            with their website and application portals.
        </p>
        <Tables />
    {/if}
</div>
