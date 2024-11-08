<template>
  <div class="alumnlist">
    <div>
      <div v-for="(list, year) in userList" :key="year" class="panel">
        <div v-if="errorText" class="single-year-panel">
          <button @click="loadYear" class="panel-header">
            {{ year }} 年
            <span v-if="errorText">{{ errorText }}</span>
          </button>
        </div>

        <div v-if="!errorText" class="single-year-panel">
          <button @click="togglePanel(year)" class="panel-header">
            {{ year }} 年
          </button>

          <transition name="slide-fade">
            <div
              class="panel-content"
              :style="{ maxHeight: getMaxHeight(year) }"
            >
              <ul>
                <li v-for="user in list" :key="user.uid">
                  <a
                    :href="user.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ user.name }}</a
                  >
                  <span>{{ getTime(user) }}</span>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

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
const isActive = ref(false);

// 加载所有年份数据
const loadYear = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

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
    const data = await response.json();
    userList.value[year] = data; // 填充数据
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

// 获取展开面板的最大高度
const getMaxHeight = (year) => {
  const itemCount = userList.value[year]?.length || 0;
  return activeYear.value === year ? `${itemCount * 50 + 20}px` : "0px"; // 根据条目数量计算高度
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

<style scoped>
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
  background-color: var(--c-tip-bg);
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 100%;
  z-index: 1;
}

.panel-content {
  width: 93%;
  overflow: hidden;
  scrollbar-width: none;
  background-color: var(--c-bg-lighter);
  padding: 1rem;
  padding-top: 0.5rem;
  margin-top: -0.6rem;
  border-radius: 0.3rem;
  z-index: 0;
  transition: max-height 0.5s ease-in-out; /* 过渡动画 */
}

.content.expanded {
  max-height: 1000px;
  transition: max-height 0.5s ease-in-out;
}

.panel-content ul {
  list-style-type: none;
  padding: 0;
}

.panel-content li {
  margin-bottom: 0.5rem;
}

/* 过渡效果 */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.slide-fade-enter, .slide-fade-leave-to {
  max-height: 0;
}
</style>
