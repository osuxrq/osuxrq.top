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
                    // 导航栏示例
                    {
                        text: '更多',
                        children: [
                            {
                                text: "群活动",
                                children: ["/huodong/qunsai/"]
                            },
                            "/",
                        ]
                    },
                    {
                        text: "Meta",
                        children: ["/meta/gongxian.md", "/meta/gongxianzhe.md"]
                    },
                ],
                sidebar: {
                    // 边栏示例
                    "/huodong/qunsai/": ["/huodong/qunsai/README.md", "/huodong/qunsai/1.md"],
                    "/meta/": ["/meta/gongxian.md", "/meta/gongxianzhe.md"],
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
