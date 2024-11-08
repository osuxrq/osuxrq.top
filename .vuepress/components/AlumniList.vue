<script setup>
import {ref} from 'vue'
const url = 'https://xrq.365246692.xyz:40002/bot/alumni'
/**
 * 加载列表
 * @param {string} year
 */
function loadList(year) {
  if (userList.value[year].length > 0) return
  loadingList.value = [
      ...loadingList.value,
      year,
  ]
  fetch(`${url}?year=${year}`)
      .then(data => data.json())
      .then(data => {
        userList.value = {
          ...userList.value,
          [year]: data,
        }
        loadingList.value = loadingList.value.filter(n => n !== year)
      }).catch(e => {
        console.error(e)
        errorText.value = '浏览器版本过低, 无法展示'
      })
}

function loadYear() {
  errorText.value = 'loading...'
  fetch(url).then(res => {
    return res.json()
  }).then(data => {
    const obj = {}
    for (let n of data) {
      obj[n] = []
    }
    userList.value = obj
    errorText.value = ''
  }).catch(e => {
    console.error(e)
    errorText.value = '浏览器版本过低, 无法展示'
  })
}

const errorText = ref('loading...')
const loadingList = ref([])
const userList = ref({})

/**
 * 时间格式化
 * @param {[number]} user.date
 */
function getTime(user) {
  return `(${user.date[0]}/${user.date[1]}/${user.date[2]})`
}

loadYear()
</script>

<template>
  <div v-if="errorText">
    <span class="error-text">{{ errorText }}</span>
    <br>
    <button class="reload" @click="loadYear">重新加载</button>
  </div>
  <details v-if="!errorText" v-for="[year, list] in Object.entries(userList)" class="custom-container details" :ref="year">
    <summary @click="loadList(year)">
      {{ year }} 年
    </summary>
    <span v-if="loadingList.indexOf(year) > 0">加载中...</span>
    <ul>
      <li v-for="user in list" :key="user.uid">
        <a :href="user.url" target="_blank" rel="noopener noreferrer">{{ user.name }}</a>
        {{ getTime(user) }}
      </li>
    </ul>
  </details>
</template>

<style scoped lang="scss">
.error-text {
  display: block;
  margin-top: 0.8rem;
  font-size: 1.2rem;
  color: red;
}
.reload {
  margin: .5rem 0 0;
  font-size: 1.2rem;
  color: var(--c-brand);
  background: var(--c-bg);
  border: 0.1rem solid var(--c-brand);
  transition-duration: 0.2s;
  &:hover {
    color: var(--c-bg);
    background: var(--c-brand);
    cursor: pointer;
  }
}
</style>
