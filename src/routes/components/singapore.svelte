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
    const singaporeItems: Array<Item> = [
        {
            avatar: "https://sail.sea.com/img/favicon.png",
            name: "Sea AI Labs",
            website: "https://sail.sea.com/",
            portal: "https://sail.sea.com/carrer",
        },
        {
            avatar: "https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fwww.a-star.edu.sg%2F",
            name: "A* Star",
            website: "https://www.a-star.edu.sg/",
            portal: "https://careers.a-star.edu.sg/",
        },
        {
            avatar: "https://e.huawei.com/marketingcloud/pep/static/assets/favicon/favicon.ico",
            name: "Huwavei Singapore Research Center",
            website:
                "https://e.huawei.com/sg/special_topic/event/apac/openlab-asia-pacific",
            portal: "https://career.huawei.com/reccampportal/globle/huawei-special-recruitment-en.html",
        },
        {
            avatar: "https://nus.edu.sg/images/default-source/identity-images/NUS_logo_full-horizontal.jpg",
            name: "Grab AI Lab NUS",
            website: "https://ids.nus.edu.sg/Grab-NUS-AI-Lab.html",
            portal: "https://ids.nus.edu.sg/opportunities-job-openings.html",
        },
        {
            avatar: "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/favicon_1/favicon.ico",
            name: "ByteDance AI Lab - Singapore",
            website: "https://seed.bytedance.com/en/",
            portal: "https://seed.bytedance.com/en/career?view_from=homepage_tab",
        },
    ];
</script>

<main>
    <Badge
        variant="default"
        class="bg-purple-600 text-white flex items-center gap-2"
    >
        <PlaneIcon class="animate-bounce text-amber-300" /> Singapore
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
            {#each singaporeItems as item (item)}
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
