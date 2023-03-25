import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
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
                    {
                        text: "介绍",
                        children: [
                            {
                                text: "简介",
                                link: "/introduction/"
                            }, {
                                text: "历史",
                                link: "/history/"
                            },
                        ]
                    },
                    {
                        text: '更多',
                        children: [
                            {
                                text: "群活动",
                                children: ["/events/ocnc/"]
                            },
                            {
                                text: "名人堂",
                                children: ["/history/alumni.md"]
                            },
                            {
                                text: "群内 bot",
                                children: ["/bot/"]
                            },
                        ]
                    },
                    {
                        text: '贡献',
                        children: [
                            {
                                text: "贡献者",
                                children: ["/meta/contributer.md"]
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
                        "/introduction/series.md"
                    ],
                    "/events/ocnc/": [
                        "/events/ocnc/README.md",
                        "/events/ocnc/26.md",
                        "/events/ocnc/27.md"
                    ],
                    "/meta/": [
                        "/meta/contributer.md",
                        "/meta/contribution-guide.md"
                    ],
                    "/history/": [
                        "/history/README.md",
                        "/history/owner.md",
                        "/history/alumni.md",
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
