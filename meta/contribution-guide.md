---
title: 贡献指南
lang: zh-CN
---

# 贡献指南

欢迎为本站提交内容修改或补充。
本站使用 [VuePress](https://v2.vuepress.vuejs.org/zh/) 构建，内容使用 Markdown 编写。

## 基本步骤

若要贡献，请遵循下列步骤。

1. 在网站中点击右上角 GitHub 跳转至仓库
2. Fork 仓库并克隆`git clone`到本地
3. 下载安装 [Node.js](https://nodejs.org/zh-cn)。
4. 运行 `npm install` 安装依赖
5. 修改或新增页面
6. 本地预览、验证您的修改或新增效果
7. 提交更改并发起 Pull Request

::: warning 管理组须知
虽然管理组有直接修改的权限，但为避免冲突，请通过 Pull Request 提交更改，避免直接修改仓库。
:::

## 如何创建页面

### 新建 Markdown 文件

在合适的文件夹创建合适的`.md`文件。文件路径将直接决定页面URL。文件名为“README.md”则为该目录。

- `/folder/README.md` → `/folder/`
- `/folder/page.md` → `/folder/page`

页面结构：

```md
# 页面标题
正文内容
```

::: details 过时的信息

~~然后在文件中添加 frontmatter：~~

```plaintext
---
title: 群赛
lang: zh-CN
---
```

:::tip
无需添加 frontmatter，但添加也无妨。
:::

正文使用 Markdown 语法，不再使用一级标题。

如果不会 Markdown，请自行搜索 Markdown 语法.

参考资料：

- [Markdown 基本语法](https://markdown.com.cn/basic-syntax/)
- [VuePress 默认主题的 Markdown 容器](https://v2.vuepress.vuejs.org/zh/reference/default-theme/markdown.html)
- [VuePress Markdown](https://v2.vuepress.vuejs.org/zh/guide/markdown.html)

### 更新导航（可选）

如果增加、删除或重命名了文件，并且有必要添加到导航栏或边栏中，
在 .vuepress/config.ts 中更新导航栏和侧边栏配置。

参考文档：

[VuePress 官方文档](https://v2.vuepress.vuejs.org/zh/)

[导航栏配置](https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/configs/navbar/zh.ts)
[侧边栏配置](https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/configs/sidebar/zh.ts)
[主配置](https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/config.ts)

## 本地实时查看效果

::: tip
推荐使用 VS Code 进行开发。
:::
启动开发服务器：

```bash
npm install    # 安装依赖
npm run docs:dev  # 启动预览
```

点击显示的本地链接即可查看效果。如不熟悉 VuePress，请务必在提交 Pull Request 前检查。

## 许可声明

除非另有说明，本站内容采用 CC BY-NC-SA 4.0 协议授权。
提交贡献即表示您同意将内容置于相同协议之下。
