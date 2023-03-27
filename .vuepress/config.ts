import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    head: [
        ["script", { "src": "/js/image-scale.js" }],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'osu! 新人群',
            description: '一个为新人而生的群聊团体。',
        }
    },
    theme: defaultTheme({
        locales: {
            '/': {
                navbar: [
                    // 导航栏
                    "/introduction/how-to-join.md",
                    {
                        text: "介绍",
                        children: [
                            "/introduction/",
                            "/history/",
                        ]
                    },
                    {
                        text: "管理",
                        children: [
                            "/people/README.md",
                            {
                                text: '管理列表',
                                children: [
                                    "/people/owner.md",
                                    "/people/administrators.md",
                                    "/people/alumni.md",
                                ]
                            },
                        ]
                    },
                    {
                        text: '活动',
                        children: [
                            "/events/README.md",
                            {
                                text: "活动列表",
                                children: [
                                    "/events/matches/",
                                    "/events/chart/",
                                    "/events/collections/"
                                ]
                            }
                        ]
                    },
                    {
                        text: '更多',
                        children: [
                            {
                                text: "机器人",
                                children: ["/bot/"]
                            },
                            {
                                text: "其他",
                                children: [
                                    {
                                        text: "新人群的回忆",
                                        link: "https://meme.osuxrq.top/"
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        text: '贡献',
                        children: [
                            {
                                text: "贡献者",
                                children: ["/meta/contributor.md"]
                            },
                            {
                                text: "贡献指南",
                                children: ["/meta/contribution-guide.md"]
                            },
                        ]
                    },
                ],
                sidebar: {
                    // 边栏
                    "/introduction/": [
                        "/introduction/README.md",
                        "/introduction/how-to-join.md",
                        "/introduction/series.md",
                    ],
                    "/events/matches/": [
                        "/events/matches/README.md",
                        "/events/matches/26.md",
                        "/events/matches/27.md"
                    ],
                    "/events/charts/": [
                        "/events/charts/README.md",
                    ],
                    "/events/collections/": [
                        "/events/collections/README.md",
                    ],
                    "/meta/": [
                        "/meta/contributor.md",
                        "/meta/contribution-guide.md"
                    ],
                    "/history/": [
                        "/history/README.md",
                    ],
                    "/people/": [
                        "/people/README.md",
                        "/people/owner.md",
                        "/people/administrators.md",
                        "/people/alumni.md",
                    ],
                    "/bot/": ["/bot/"],
                },
                editLink: true,
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: "上次更新",
                contributorsText: "贡献者",
                tip: '提示',
                warning: '注意',
                danger: '警告',
                notFound: [
                    '这里什么都没有。',
                    '我们怎么到这儿来了？',
                    '这是一个四〇四页面。',
                    '我们好像进入了错误的链接。',
                ],
                backToHome: '返回首页',
                openInNewWindow: '在新窗口打开',
            },
        },
        repo: 'osuxrq/osuxrq.top',
        lastUpdated: true,
        contributors: true,
        docsRepo: 'osuxrq/osuxrq.top',
        docsBranch: 'main',
    }),
})
