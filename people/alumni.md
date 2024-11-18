---
title: 名人堂
lang: zh-CN
---
<!-- markdownlint-disable MD033 MD025 -->

# 名人堂

## 🚀 达到高阶群出群条件

<ClientOnly>
  <AlumniList/>
</ClientOnly>

## ✨ 做出卓越贡献

<Card :users="contributors">
    <template #extra="{ user }">
      <span class="contribution">{{ user.contribution }}</span>
    </template>
</Card>

::: tip
**尚未在名人堂找到自己？请[点此填写表单](https://docs.qq.com/form/page/DUnV4TlRPUUNTQ2FO)进行登记。**
:::

<script setup lang="ts">
import AlumniList from '@/AlumniList.vue'
import Card from '@/Card.vue'

const contributors = [
  {
    uid: "13552636",
    name: "- E C -",
    url: "https://osu.ppy.sh/users/13552636",
    contribution: "制作集锦"
  },
  {
    uid: "17268434",
    name: "PercyDan",
    url: "https://osu.ppy.sh/users/17268434",
    contribution: "制作集锦"
  },
  {
    uid: "19755783",
    name: "Vup",
    url: "https://osu.ppy.sh/users/19755783",
    contribution: "作为猫猫机器人的代行账号"
  }
];
</script>
