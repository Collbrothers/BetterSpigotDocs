module.exports = {
    lang: 'en-US',
    title: 'BetterSpigotDocs',
    description: 'A modern and open source version of Spigot\'s documentation',
    themeConfig: {
        sidebarDepth: 3,
        sidebar: {
            "/guide/": [
                {
                    text: 'Introduction',
                    link: '/guide/',
                    children: [
                        // SidebarItem
                        {
                            text: 'What is spigot',
                            link: '/guide/#what-is-spigot',
                        },
                        {
                            text: 'How to use spigot',
                            link: '/guide/#how-to-use-spigot',
                        },
                    ],
                },
                {
                    text: "Installation",
                    link: "/guide/installation", children:
                        [
                            {
                                text: "Requirements",
                                link: "/guide/installation.md#requirements",
                            },
                            {
                                text: "Do's and don'ts",
                                link: "/guide/installation.md#do-s-don-ts"
                            },
                            {
                                text: "Different Operating systems",
                                link: "/guide/installation.md#different-operating-systems",
                                children: [
                                    {
                                        text: "Windows",
                                        link: "/guide/installation.md#windows"
                                    },
                                    {
                                        text: "MacOS",
                                        link: "/guide/installation.md#macos"
                                    },
                                    {
                                        text: "Linux",
                                        link: "/guide/installation.md#linux"
                                    }
                                ]
                            }
                        ]
                },
                {
                    text: "Contributing",
                    link: "/guide/contributing"
                }
],
            "/docs/": [
                {
                    text: "Player",
                    link: "/docs/player.html",
                    children: [
                        {
                            text: "breakBlock",
                            link: "/docs/player.html#breakBlock"
                        }
                    ]
                }
            ]
},
        logo: 'https://hub.spigotmc.org/img/spigot.png',
    },
}