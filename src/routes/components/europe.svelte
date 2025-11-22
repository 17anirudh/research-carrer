<script lang="ts">
    import * as Table from "$lib/components/ui/table/index";
    import * as Avatar from "$lib/components/ui/avatar/index";
    import * as Tooltip from "$lib/components/ui/tooltip/index";
    import { PlaneIcon } from "@lucide/svelte";
    import { Badge } from "$lib/components/ui/badge/index";
    import { buttonVariants } from "$lib/components/ui/button";

    interface Item {
        avatar: string;
        name: string;
        website: string;
        portal: string;
    }
    const euItems: Array<Item> = [
        {
            avatar: "https://www.bosch.com/media/tech/tech_images/apple-touch-icon.png",
            name: "Bosh Research",
            website: "https://www.bosch.com/research/",
            portal: "https://jobs.bosch.com/en",
        },
        {
            avatar: "https://jobs.siemens.com/portal/144/favicon.ico",
            name: "Siemens AI Lab",
            website:
                "https://www.siemens.com/global/en/company/innovation/research-development/tech-spaces/ai-lab.html",
            portal: "https://jobs.siemens.com/en_US/externaljobs/SearchJobs/Research",
        },
        {
            avatar: "https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fwww.bmw.in%2Fen%2Findex.html",
            name: "BMW Research Center",
            website:
                "https://www.bmwgroup.jobs/de/en/job-fields/research-and-development.html",
            portal: "https://www.bmwgroup.jobs/de/en/job-fields/research-and-development.html#727309582",
        },
        {
            avatar: "https://ethz.ch/etc/designs/ethz/img/icons/ETH-APP-Icons-Theme-white/192-xxxhpdi.png",
            name: "ETH Zurich AI Center",
            website: "https://ai.ethz.ch/",
            portal: "NA",
        },
        {
            avatar: "https://www.tno.nl/en/favicon.png",
            name: "TNO Research",
            website: "https://www.tno.nl/en/",
            portal: "https://www.tno.nl/en/careers/",
        },
    ];
</script>

<main>
    <Badge
        variant="default"
        class="bg-purple-600 text-white flex items-center gap-2"
    >
        <PlaneIcon class="animate-bounce text-amber-300" /> Europe
    </Badge>
    <Table.Root class="w-4/5 mt-3.5">
        <Table.Header>
            <Table.Row>
                <Table.Head class="w-[100px] text-amber-50 uppercase"
                    >Avatar</Table.Head
                >
                <Table.Head class="text-amber-50 uppercase">Name</Table.Head>
                <Table.Head class="text-amber-50 uppercase">Website</Table.Head>
                <Table.Head class="text-amber-50 uppercase">Portal</Table.Head>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {#each euItems as item (item)}
                <Table.Row>
                    <!-- Avatar -->
                    <Table.Cell class="font-medium">
                        <Avatar.Root>
                            <Avatar.Image src={item.avatar} alt={item.name} />
                            <Avatar.Fallback
                                >{item.name.split(" ")[0].charAt(0) +
                                    item.name
                                        .split(" ")[1]
                                        .charAt(0)}</Avatar.Fallback
                            >
                        </Avatar.Root>
                    </Table.Cell>
                    <!-- Name -->
                    <Table.Cell>{item.name}</Table.Cell>
                    <!-- Website -->
                    <Table.Cell>
                        <Tooltip.Provider>
                            <Tooltip.Root>
                                <Tooltip.Trigger
                                    class={`${buttonVariants({ variant: "link" })} cursor-pointer`}
                                >
                                    <a href={item.website} target="_blank"
                                        >Website</a
                                    >
                                </Tooltip.Trigger>
                                <Tooltip.Content>
                                    <a href={item.website} target="_blank"
                                        >{item.website}</a
                                    >
                                </Tooltip.Content>
                            </Tooltip.Root>
                        </Tooltip.Provider>
                    </Table.Cell>
                    <!-- Application Portal -->
                    <Table.Cell>
                        <Tooltip.Provider>
                            <Tooltip.Root>
                                <Tooltip.Trigger
                                    class={`${buttonVariants({ variant: "link" })} cursor-pointer`}
                                >
                                    <a href={item.portal} target="_blank"
                                        >Portal</a
                                    >
                                </Tooltip.Trigger>
                                <Tooltip.Content>
                                    <a href={item.portal} target="_blank"
                                        >{item.portal}</a
                                    >
                                </Tooltip.Content>
                            </Tooltip.Root>
                        </Tooltip.Provider>
                    </Table.Cell>
                </Table.Row>
            {/each}
        </Table.Body>
    </Table.Root>
</main>
