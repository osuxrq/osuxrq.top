<template>
  <div class="alumni-list">
    <div v-for="(list, year) in userList" :key="year" class="panel">
      <div class="single-year-panel">
        <button @click="togglePanel(year)" class="panel-header">
          {{ year }} 年
        </button>

        <transition name="slide-fade">
          <div class="panel-content" :style="{ maxHeight: getMaxHeight(year) }">
            <Card :users="list">
              <template #extra="{ user }">
                <span class="user-date">{{ getTime(user) }}</span>
              </template>
            </Card>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Card from "./Card.vue";

interface User {
  uid: string;
  name: string;
  url: string;
  date: number[];
}

const url = "https://osuxrq.com/api/alumni";
const userList = ref<{ [key: string]: User[] }>({
  "2023": [],
  "2024": [],
});
const activeYear = ref(null);

// 加载所有年份数据
const loadYear = async () => {
  try {
    const response = await fetch(url);
    const years = await response.json();

    // 用实际年份更新 userList
    const newUserList = {};
    years.forEach((year) => {
      newUserList[year] = userList.value[year] || [];
    });
    userList.value = newUserList;

    // 加载每个年份的数据
    await Promise.all(Object.keys(newUserList).map(loadYearData));
  } catch (error) {
    console.error(error);
  }
};

// 加载特定年份的用户数据
const loadYearData = async (year) => {
  try {
    // await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟加载延迟,可用于测试Card组件的骨架屏
    const response = await fetch(`${url}?year=${year}`);
    userList.value[year] = await response.json(); // 填充数据
  } catch (error) {
    console.error(error);
  }
};

// 切换展开/收起面板
const togglePanel = (year) => {
  activeYear.value = activeYear.value === year ? null : year;
};

const getMaxHeight = (year) => {
  if (activeYear.value !== year) return "0px";

  const container = document.querySelector(".panel-content");
  if (!container) return "0px";

  const itemCount = userList.value[year]?.length || 4;
  const cardHeight = 70;
  const totalHeight = 32 + itemCount * cardHeight + (itemCount - 1) * 16;
  return `${totalHeight}px`;
};

// 时间格式化
const getTime = (user) => {
  return `(${user.date[0]}/${user.date[1]}/${user.date[2]})`;
};

// 初始化数据加载
onMounted(() => {
  loadYear();
});
</script>

<style>
:root {
  --custom-tip-bg: #f9f9f9;
  --custom-bg: #ededed;
  --custom-bg-lighter: #fcfcfc;
  --custom-text: #666666;
  --custom-primary-color: #4ecdc4;
  --custom-secondary-color: #ff6b6b;
  --custom-hover-bg: rgba(255, 255, 255, 0.472);
}

html[data-theme="dark"] {
  --custom-tip-bg: #2b313a;
  --custom-bg: #22272e;
  --custom-bg-lighter: #262c34;
  --custom-text: #d1d1d1;
  --custom-primary-color: #6ee7e7;
  --custom-secondary-color: #ff8f8f;
  --custom-hover-bg: rgba(255, 255, 255, 0.05);
}

.panel {
  margin: 1rem;
}

.single-year-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.panel-header {
  cursor: pointer;
  font-size: 1.2rem;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  background-color: var(--custom-tip-bg);
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  text-align: left;
  width: 100%;
  z-index: 1;
}

.panel-content {
  width: 93%;
  overflow: hidden;
  scrollbar-width: none;
  background-color: var(--custom-bg);
  padding: 0.5rem 1rem 1rem;
  margin-top: -0.6rem;
  border-radius: 0.3rem;
  z-index: 0;
  transition: max-height 0.5s ease-in-out; /* 过渡动画 */
}

.user-date {
  font-size: 0.8rem;
  color: var(--custom-text);
}

/* 过渡效果 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  max-height: 0;
}
</style>
