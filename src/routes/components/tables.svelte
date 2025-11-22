<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index";
  import India from "./india.svelte";
  import Singapore from "./singapore.svelte";
  import Europe from "./europe.svelte";
</script>

<main class="flex flex-col items-center justify-center h-screen p-4">
    <Tabs.Root value="india" class="w-full">
    <Tabs.List class="bg-accent rounded-t-lg w-fit mb-4">
        <Tabs.Trigger value="india">India</Tabs.Trigger>
        <Tabs.Trigger value="singapore">Singapore</Tabs.Trigger>
        <Tabs.Trigger value="europe">Europe</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="india">
        <India />
    </Tabs.Content>
    <Tabs.Content value="singapore">
        <Singapore />
    </Tabs.Content>
    <Tabs.Content value="europe">
        <Europe />
    </Tabs.Content>
    </Tabs.Root>
</main>