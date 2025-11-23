<script lang="ts">
    import { setContext, onDestroy } from "svelte";
    import { writable } from "svelte/store";
    import type { ExpandableScreenContextValue } from "./context";
    import { DEFAULT_LAYOUT_ID } from "./context";

    export let defaultExpanded: boolean = false;
    export let onExpandChange: ((expanded: boolean) => void) | null = null;
    export let layoutId: string = DEFAULT_LAYOUT_ID;
    export let triggerRadius: string = "100px";
    export let contentRadius: string = "24px";
    export let animationDuration: number = 0.3;
    export let lockScroll: boolean = true;

    const isExpanded = writable<boolean>(defaultExpanded);

    function expand() {
        isExpanded.set(true);
        onExpandChange?.(true);
    }

    function collapse() {
        isExpanded.set(false);
        onExpandChange?.(false);
    }

    const context: ExpandableScreenContextValue = {
        isExpanded,
        expand,
        collapse,
        layoutId,
        triggerRadius,
        contentRadius,
        animationDuration,
        lockScroll,
    };

    setContext<ExpandableScreenContextValue>("expandable-screen", context);

    // Lock body scroll when expanded
    const unsubscribe = isExpanded.subscribe((val) => {
        if (lockScroll) {
            document.body.style.overflow = val ? "hidden" : "unset";
        }
    });

    onDestroy(() => {
        unsubscribe();
        if (lockScroll) document.body.style.overflow = "unset";
    });
</script>

<slot />
