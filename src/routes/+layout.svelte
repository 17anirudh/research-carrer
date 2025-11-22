<script lang="ts">
    import "./app.css";
    import favicon from "$lib/assets/favicon.ico";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<main
    class="bg-neutral-900 text-neutral-100 min-h-screen w-screen overflow-x-clip"
>
    {@render children()}
</main>
