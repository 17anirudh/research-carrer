<!-- src/lib/ExpandableScreenBackground.svelte -->
<script lang="ts">
    import { getContext } from "svelte";
    import type { ExpandableScreenContextValue } from "./context";

    export let trigger: any = null;
    export let content: any = null;
    export let className: string = "";

    const ctx = getContext<ExpandableScreenContextValue>("expandable-screen");
    if (!ctx)
        throw new Error(
            "ExpandableScreenBackground must be used inside ExpandableScreen",
        );

    const { isExpanded } = ctx;
</script>

{#if $isExpanded && content}
    <div class={className}>{@html content}</div>
{:else if !$isExpanded && trigger}
    <div class={className}>{@html trigger}</div>
{/if}
