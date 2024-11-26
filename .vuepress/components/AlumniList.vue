<template>
  <div class="alumni-list">
    <div v-for="(list, year) in userList" :key="year" class="panel">
      <div class="single-year-panel">
        <button
          @click="errorText ? loadYear : togglePanel(year)"
          class="panel-header"
        >
          {{ year }} 年
          <span v-if="errorText">{{ errorText }}</span>
        </button>

        <transition name="slide-fade">
          <div
            v-if="!errorText"
            class="panel-content"
            :style="{ maxHeight: getMaxHeight(year) }"
          >
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
import { ref, onMounted, nextTick } from "vue";
import Card from "./Card.vue";

interface User {
  uid: string;
  name: string;
  url: string;
  date: number[];
}

const url = "https://xrq.365246692.xyz:40002/bot/alumni";
const errorText = ref("loading...");
const userList = ref<{ [key: string]: User[] }>({});
const loadingList = ref<number[]>([]);
const activeYear = ref(null);
const currentColumns = ref(1);

// 加载所有年份数据
const loadYear = async () => {
  try {
    const response = await fetch(url);
    const data: number[] = await response.json();

    const years = {};
    data.forEach((year) => (years[year] = [])); // 初始化年份数据结构
    userList.value = years;

    await loadAllLists(); // 预加载所有年份的用户数据

    errorText.value = "";
  } catch (error) {
    console.error(error);
    errorText.value = "加载失败，请检查浏览器或网络";
  }
};

// 加载特定年份的用户数据
const loadList = async (year) => {
  if (userList.value[year].length > 0) return;

  loadingList.value.push(year);
  try {
    const response = await fetch(`${url}?year=${year}`);
    userList.value[year] = await response.json(); // 填充数据
  } catch (error) {
    console.error(error);
    errorText.value = "加载失败，请检查浏览器或网络";
  } finally {
    loadingList.value = loadingList.value.filter((item) => item !== year);
  }
};

// 预加载所有年份的用户数据
const loadAllLists = async () => {
  for (const year in userList.value) {
    if (userList.value[year].length === 0) {
      await loadList(year);
    }
  }
};

// 切换展开/收起面板
const togglePanel = (year) => {
  activeYear.value = activeYear.value === year ? null : year;
};

// 计算当前有几列
const getColumnsCount = () => {
  const container = document.querySelector(".panel-content");
  if (!container) return;

  const containerWidth = container.clientWidth;
  // 200px 最小宽度 + 1rem(16px) gap
  currentColumns.value = Math.floor((containerWidth - 32) / (200 + 16)) || 1;
};

const getMaxHeight = (year) => {
  if (activeYear.value !== year) return "0px";

  const itemCount = userList.value[year]?.length || 0;

  if (currentColumns.value === 1) {
    const cardHeight = 70;
    const rows = Math.ceil(itemCount / currentColumns.value);
    const totalHeight = 32 + rows * cardHeight + (rows - 1) * 16;
    return `${totalHeight}px`;
  } else {
    return `${itemCount * 50 + 20}px`;
  }
};

// 时间格式化
const getTime = (user) => {
  return `(${user.date[0]}/${user.date[1]}/${user.date[2]})`;
};

// 初始化数据加载
onMounted(() => {
  loadYear();
  window.addEventListener("resize", () => {
    if (activeYear.value) {
      // 强制重新计算当前打开面板的高度
      nextTick(() => {
        const style = (document.querySelector(".panel-content") as HTMLElement)
          ?.style;
        if (style) {
          style.maxHeight = getMaxHeight(activeYear.value);
        }
      });
    }
  });
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
