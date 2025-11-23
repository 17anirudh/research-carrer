<!-- src/lib/ExpandableScreenTrigger.svelte -->
<script lang="ts">
    import { getContext } from "svelte";
    import { fade, scale } from "svelte/transition";
    import { derived } from "svelte/store";
    import type { ExpandableScreenContextValue } from "./context";

    const ctx = getContext<ExpandableScreenContextValue>("expandable-screen");
    if (!ctx)
        throw new Error(
            "ExpandableScreenTrigger must be used inside ExpandableScreen",
        );

    const { isExpanded, expand, layoutId, triggerRadius } = ctx;
    const expanded = derived(isExpanded, ($) => $);
</script>

{#if $expanded === false}
    <div class="inline-block relative">
        <!-- Morphing background element (visual only) -->
        <div
            class="absolute inset-0 transform-gpu will-change-transform"
            style="border-radius: {triggerRadius}; transition: border-radius 200ms ease, transform 200ms ease;"
            aria-hidden="true"
            on:click|stopPropagation={expand}
        ></div>

        <!-- Use a real button for accessibility. It natively supports Enter/Space and is announced correctly. -->
        <button
            type="button"
            class="relative cursor-pointer bg-transparent border-0 p-0"
            aria-expanded={$expanded}
            aria-controls={`${layoutId}-content`}
            on:click|stopPropagation={expand}
            in:fade={{ delay: 50, duration: 250 }}
            out:fade={{ duration: 180 }}
        >
            <!-- Inner element handles scale -->
            <span
                in:scale={{ start: 0.92, duration: 220 }}
                out:scale={{ start: 0.92, duration: 180 }}
                class="inline-block"
            >
                <slot />
            </span>
        </button>
    </div>
{/if}
