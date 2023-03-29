import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    head: [
        ["script", { "src": "/js/image-scale.js" }],
        ["link", {
            "rel": "icon",
            "href": "/images/hero.png",
        }],
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
                        link: "/introduction/"
                    },
                    {
                        text: "管理",
                        link: "/people/"
                    },
                    {
                        text: '活动',
                        children: [
                            "/events/README.md",
                            {
                                text: "活动列表",
                                children: [
                                    "/events/matches/",
                                    "/events/charts/",
                                    "/events/collections/"
                                ]
                            }
                        ]
                    },
                    {
                        text: '更多',
                        children: [
                            "/misc/bots/",
                            {
                                text: "新人群的回忆",
                                children: [
                                    {
                                        text: "开启回忆",
                                        link: "https://meme.osuxrq.top/"
                                    },
                                    {
                                        text: "回忆指南",
                                        link: "/misc/meme/"
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Meta',
                        children: [
                            "/meta/contribution-guide",
                            "/meta/contributors.md",
                            "/meta/events.md",
                        ]
                    },
                ],
                sidebar: {
                    // 边栏
                    "/introduction/": [
                        "/introduction/README.md",
                        "/introduction/how-to-join.md",
                        "/introduction/series.md",
                        "/introduction/history.md",
                    ],
                    "/events/": [
                        "/events/README.md",
                        {
                            text: "群赛",
                            children: [
                                "/events/matches/README.md",
                                "/events/matches/24.md",
                                "/events/matches/25.md",
                                "/events/matches/26.md",
                                "/events/matches/27.md",
                            ],
                        },
                        {
                            text: "悬赏",
                            children: [
                                "/events/charts/README.md",
                            ],
                        },
                        {
                            text: "集锦",
                            children: [
                                "/events/collections/README.md",
                            ],
                        },
                    ],
                    "/meta/": [
                        "/meta/contribution-guide.md",
                        "/meta/contributors.md",
                        "/meta/events.md",
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
                },
                logo: "/images/hero.png",
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
