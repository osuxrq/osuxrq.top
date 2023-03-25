---
title: 贡献指南
lang: zh-CN
---
# 贡献指南
若您发现本站内容有任何错误或遗漏，欢迎通过以下方式贡献。

## 基本步骤
若要贡献，请遵循下列步骤。

1. 点右上角 GitHub，fork 仓库，然后 `git clone` 到本地。
2. 下载安装 [Node.js](https://nodejs.org/zh-cn)。
3. 在克隆的文件夹运行 `npm install`。
4. 添加或修改页面。
5. 预览修改验证效果。
6. 运行 `git add <修改的页面>`，然后再运行 `git push`。
7. 创建 Pull Request，以把修改合并回原仓库。

::: warning 请管理组注意
虽然管理组有直接修改的权限，但为了避免冲突，最好不要直接修改仓库，请发送 Pull Request。
:::

## 如何创建页面
### 创建 .md 文件
在合适的文件夹创建合适的文件，后缀为 `.md`。文件夹路径和文件名会影响网页的路径。文件名为“README.md”则为该目录。

例如，“/huodong/qunsai/README.md”的 URL 是“/huodong/qunsai/”，“/huodong/qunsai/1.md”的 URL 是“/huodong/qunsai/1”。

然后创建页面标题：

```md
# 标题
内容
```

::: details 过时的信息

~~然后在文件中添加 Header：~~

```
---
title: 群赛
lang: zh-CN
---
```

无需添加 Header，但是添加也没有坏处。

:::

后面写正文，使用 Markdown 语法，不要再使用一级标题。

如果不会 Markdown，自行搜索 Markdown 语法，非常好学。最基础的就是起新段落要换两行。

参考资料：

- [Markdown 基本语法](https://markdown.com.cn/basic-syntax/)
- [VuePress 默认主题的 Markdown 容器](https://v2.vuepress.vuejs.org/zh/reference/default-theme/markdown.html)
- [VuePress Markdown](https://v2.vuepress.vuejs.org/zh/guide/markdown.html)

### 修改导航栏和边栏（如果需要）
如果增加、删除或重命名了文件，可能需要在 .vuepress/config.ts 中修改导航栏和边栏以便在其中增加页面。

关于导航栏和边栏的使用可以参考 [VuePress 官方文档](https://v2.vuepress.vuejs.org/zh/)。也可以查看他们的[导航栏配置](https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/configs/navbar/zh.ts)，[边栏配置](https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/configs/sidebar/zh.ts)，[主配置](https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/config.ts)。

## 实时查看效果

::: tip
推荐使用 [Visual Studio Code](https://code.visualstudio.com/) 打开克隆下来的文件夹。
:::

在文件夹内首先运行 `npm install`，再运行 `npm run docs:dev`，然后点击显示的链接即可查看效果。如果不熟悉 VuePress，请务必在提交 Pull Request 前检查。

## 著作权
除非另有声明，本站内容采用 CC BY-NC-SA 4.0 授权。当你贡献时，视为你将你贡献的内容同样使用 CC BY-NC-SA 4.0 进行授权。