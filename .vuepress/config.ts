import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'osu! 新人群',
            description: '这里写网站描述',
        }
    },
    theme: defaultTheme({
        locales: {
            '/': {
                navbar: [
                    // 导航栏
                    {
                        text: "osu! 新人群介绍",
                        children: [
                            {
                                text: "介绍",
                                link: "/jieshao/"
                            }, {
                                text: "历史",
                                link: "/lishi/"
                            },
                        ]
                    },
                    {
                        text: '更多',
                        children: [
                            {
                                text: "群活动",
                                children: ["/huodong/qunsai/"]
                            },
                            "/lishi/mingrentang.md",
                            {
                                text: "群内 bot",
                                children: ["/bot/"]
                            },
                        ]
                    },
                    {
                        text: "Meta",
                        children: ["/meta/gongxianzhinan.md", "/meta/gongxianzhe.md"]
                    },
                ],
                sidebar: {
                    // 边栏
                    "/jieshao/": ["/jieshao/README.md", "/jieshao/xilie.md"],
                    "/huodong/qunsai/": ["/huodong/qunsai/README.md", "/huodong/qunsai/1.md"],
                    "/meta/": ["/meta/gongxianzhinan.md", "/meta/gongxianzhe.md"],
                    "/lishi/": ["/lishi/", "/lishi/mingrentang.md"],
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
