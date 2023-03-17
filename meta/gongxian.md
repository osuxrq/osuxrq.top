---
title: 如何贡献
lang: zh-CN
---
## 基本步骤
若要贡献，请遵循下列步骤。

1. 点右上角 GitHub，fork 仓库，然后 `git clone` 到本地。
2. 下载安装 [Node.js](https://nodejs.org/zh-cn)。
3. 在克隆的文件夹运行 `npm install`。
4. 添加或修改页面。
5. 预览修改验证效果。
6. `git add <修改的页面>`, `git push`。
7. 创建 Pull Request，以把修改合并回原仓库。

::: warning
虽然管理组有直接修改的权限，但为了避免冲突，最好不要直接修改仓库。
:::

## 如何创建页面
### 创建 .md 文件
在合适的文件夹创建合适的文件，后缀为 `.md`。文件夹路径和文件名会影响网页的路径。文件名为“README.md”则为该目录。

例如，“/huodong/qunsai/README.md”的 URL 是“/huodong/qunsai/”，“/huodong/qunsai/1.md”的 URL 是“/huodong/qunsai/1”。

然后在文件中添加 Header：

```
---
title: 群赛
lang: zh-CN
---
```

后面写正文，使用 Markdown 语法，不要再使用一级标题。

如果不会 Markdown，自行搜索 Markdown 语法，非常好学。最基础的就是起新段落要换两行。

### 修改导航栏和边栏（如果需要）
在 .vuepress/config.ts 中修改导航栏和边栏以便在其中增加页面。

这里需要至少另外一人学会如何修改并承担起维护任务。

## 实时查看效果

::: tip
推荐使用 [Visual Studio Code](https://code.visualstudio.com/) 打开克隆下来的文件夹。
:::

在文件夹内运行 `npm run docs:dev`，然后点击显示的链接即可查看效果。如果不熟悉 VuePress，请务必在提交 Pull Request 前检查。
