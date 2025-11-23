<script lang="ts">
    import ExpandableScreen from "$lib/components/ui/expandable/ExpandableScreen.svelte";
    import ExpandableScreenTrigger from "$lib/components/ui/expandable/ExpandableScreenTrigger.svelte";
    import ExpandableScreenContent from "$lib/components/ui/expandable/ExpandableScreenContent.svelte";
    interface Content {
        img: string;
        title: string;
        repo: string;
        tech: string;
        desc: string;
    }
    const cards: Array<Content> = [
        {
            img: "https://raw.githubusercontent.com/17anirudh/deepfake-detection/refs/heads/master/landing.png",
            title: "Deepfake Detection",
            repo: "https://github.com/17anirudh/deepfake-detection",
            tech: "CNN + RAG",
            desc: "Advanced web application designed to combat the spread of misinformation by detecting Deepfakes in images and videos, and verifying the authenticity of text-based news articles.",
        },
        {
            tech: "Cryptography",
            title: "Hash Bytes",
            img: "https://raw.githubusercontent.com/17anirudh/hash-bytes/master/Landing.png",
            repo: "https://github.com/17anirudh/hash-bytes",
            desc: "Educational tool to quickly encrypt and decrypt any content using different cryptographic algorithms and relevant cipher modes along with explanations.",
        },
        // {
        //     description: "Hash CRUD",
        //     title: "Url shortner",
        //     src: "https://raw.githubusercontent.com/17anirudh/media/refs/heads/main/Url-shortner.png",
        //     ctaText: "Visit",
        //     ctaLink: "https://github.com/17anirudh/URL-Shortner",
        //     content: () => {
        //         return (
        //             <p>
        //                 This is a full stack web application built with the SVFM
        //                 stack (Spring Boot with Thymeleaf, Vanilla JS, Flask
        //                 with SQLAlchemy, and MySQL). It shortens long URLs into
        //                 encrypted short links using UUID + Base62 key generation
        //                 and redirects users to the original URL. This can be
        //                 fully deployed in cloud PaaS Railway, and is
        //                 cloud-native, containerized microservices having shared
        //                 persistant mySQL database.
        //             </p>
        //         );
        //     },
        // },
        // {
        //     description: "LLMs",
        //     title: "Ats Score Checker",
        //     src: "https://raw.githubusercontent.com/17anirudh/media/refs/heads/main/Ats-score.png",
        //     ctaText: "Visit",
        //     ctaLink: "https://github.com/17anirudh/ATS-Score",
        //     content: () => {
        //         return (
        //             <p>
        //                 antardvara.ssl is a local and secure ATS analyzer, which
        //                 takes in job description, qualification and your resume
        //                 sends it to internal local gemma3n:e2b based custom
        //                 model (NorthEye), which analyzes and gives you the
        //                 result
        //             </p>
        //         );
        //     },
        // },
        // {
        //     description: "Tree Classifiers",
        //     title: "NIDS Binary Classifier",
        //     src: "https://raw.githubusercontent.com/17anirudh/media/refs/heads/main/Nids-classifier.png",
        //     ctaText: "Visit",
        //     ctaLink: "https://github.com/17anirudh/NIDS",
        //     content: () => {
        //         return (
        //             <p>
        //                 This application uses machine learning models trained on
        //                 the NSL-KDD dataset to classify network traffic as
        //                 either normal or intrusive. Users can input network
        //                 parameters through a web interface, and the system
        //                 returns a binary prediction indicating whether the
        //                 traffic is benign or malicious.
        //             </p>
        //         );
        //     },
        // },
    ];
</script>

<div>
    {#each cards as card}
        <ExpandableScreen
            layoutId="my-card"
            triggerRadius="80px"
            contentRadius="18px"
        >
            <ExpandableScreenTrigger>
                <div class="p-4 bg-blue-600 text-white rounded-lg">
                    <img
                        src={card.img}
                        alt={card.title + "preview"}
                        class="w-16 h-16 rounded-full"
                    />
                    <h3 class="text-lg font-bold">
                        {card.title.toUpperCase()}
                    </h3>
                </div>
            </ExpandableScreenTrigger>

            <ExpandableScreenContent>
                <div class="p-8">
                    <h2>Expanded Content</h2>
                    <p>
                        {card.desc}
                    </p>
                </div>
            </ExpandableScreenContent>
        </ExpandableScreen>
    {/each}
</div>
