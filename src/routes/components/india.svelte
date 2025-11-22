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
    const indiaItems: Array<Item> = [
        {
            avatar: "https://iisc.ac.in/wp-content/themes/iisc/images/favicon/apple-icon-72x72.png",
            name: "IISC AI Labs",
            website: "https://val.cds.iisc.ac.in/",
            portal: "https://val.cds.iisc.ac.in/openings.html",
        },
        {
            avatar: "https://www.tcs.com/etc.clientlibs/tcs/clientlibs/clientlib-site/resources/images/tcs_favicon_32.png",
            name: "TCS Research",
            website: "https://www.tcs.com/what-we-do/research",
            portal: "https://www.tcs.com/what-we-do/research",
        },
        {
            avatar: "https://cdn.samsung.com/etc/designs/smg/global/imgs/favicon.ico",
            name: "Samsung Research",
            website: "https://research.samsung.com/",
            portal: "https://research.samsung.com/careers",
        },
        {
            avatar: "https://research.adobe.com/wp-content/uploads/2016/03/cropped-favicon-192x192.png",
            name: "Abode Research",
            website: "https://research.adobe.com/",
            portal: "https://research.adobe.com/careers/bangalore/",
        },
        {
            avatar: "https://www.microsoft.com/favicon.ico?v2",
            name: "Microsoft Research",
            website: "https://www.microsoft.com/en-us/research/",
            portal: "https://careers.microsoft.com/v2/global/en/home.html?q=Research&lc=India&l=en_us&pg=1&pgSz=20&o=Relevance&flt=true",
        },
        {
            avatar: "https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fresearch.ibm.com%2F",
            name: "IBM Research",
            website: "https://research.ibm.com/",
            portal: "https://www.ibm.com/in-en/careers/research#Jobs",
        },
        {
            avatar: "https://www.mbrdi.co.in/favicon.ico",
            name: "Mercedes Benz Research",
            website: "https://www.mbrdi.co.in/",
            portal: "https://jobs.mercedes-benz.com/en?en%3Fen=&ParentOrganization=%5B484%2C205%2C251%2C142%2C140%5D&JobCategory.Code=%5B42%5D",
        },
    ];
</script>

<main>
    <Badge
        variant="default"
        class="bg-purple-600 text-white flex items-center gap-2"
    >
        <PlaneIcon class="animate-bounce text-amber-300" /> India
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
            {#each indiaItems as item (item)}
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
