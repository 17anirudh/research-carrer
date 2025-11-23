<!-- src/lib/ExpandableScreenContent.svelte -->
<script lang="ts">
    import { getContext } from "svelte";
    import { fade, scale } from "svelte/transition";
    import { fly } from "svelte/transition";
    import { derived } from "svelte/store";
    import type { ExpandableScreenContextValue } from "./context";
    import { X } from "@lucide/svelte";

    export const className: string = "";
    export let showCloseButton: boolean = true;
    export let closeButtonClassName: string = "";

    const ctx = getContext<ExpandableScreenContextValue>("expandable-screen");
    if (!ctx)
        throw new Error(
            "ExpandableScreenContent must be used inside ExpandableScreen",
        );

    const { isExpanded, collapse, layoutId, contentRadius, animationDuration } =
        ctx;
    const expanded = derived(isExpanded, ($) => $);
</script>

{#if $expanded}
    <div
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2"
        aria-modal="true"
        role="dialog"
    >
        <!-- Background "morph" element: will occupy full-screen and transition border-radius -->
        <div
            class="relative flex h-full w-full overflow-y-auto transform-gpu will-change-transform"
            style="
        border-radius: {contentRadius};
        transition: border-radius {animationDuration}s ease, opacity 0.2s ease;
      "
        >
            <!-- Content slot fades in -->
            <div
                class="relative z-20 w-full"
                in:fade={{ delay: 150, duration: 400 }}
            >
                <slot />
            </div>

            {#if showCloseButton}
                <button
                    on:click|stopPropagation={collapse}
                    class={`absolute right-6 top-6 z-30 flex h-10 w-10 items-center justify-center transition-colors rounded-full ${closeButtonClassName || "text-white bg-transparent hover:bg-white/10"}`}
                    aria-label="Close"
                >
                    <X class="h-5 w-5" />
                </button>
            {/if}
        </div>
    </div>
{/if}
