<script setup>
import { ref } from 'vue'

fetch("https://xrq.365246692.xyz:40002/bot/alumni").then(res => {
  return res.json()
}).then(data => {
  userList.value = data.reduce((all, item) => {
    let key = item.date[0]
    if (!all[key]) {
      all[key] = []
    }
    all[key].push(item)
    return all
  }, {})
  errorText.value = ''
}).catch(e => {
  console.error(e)
  errorText.value = e
})

const errorText = ref('loading...')
const userList = ref({})

/**
 * 时间格式化
 * @param {[number]} user.date
 */
function getTime(user) {
  return `(${user.date[0]}/${user.date[1]}/${user.date[2]})`
}
</script>

<template>
  <div v-if="errorText">
    {{ errorText }}
  </div>
  <details v-if="!errorText" v-for="[year, list] in Object.entries(userList)" class="hint-container details">
    <summary>
      {{ year }} 年
    </summary>
    <ul>
      <li v-for="user in list">
        <a :href="user.url" target="_blank" rel="noopener noreferrer">{{ user.name }}</a>
        {{ getTime(user) }}
      </li>
    </ul>
  </details>
</template>

<style scoped>

</style>
