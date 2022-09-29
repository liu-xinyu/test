<template>
  <div>
    <div class="calendar"></div>
  </div>
</template>
    

<script lang="ts" setup>
import { onMounted } from 'vue'
import { apiGetUserInfo } from '../api/user'
function getUserInfo() {
  const param = {
    user_name: '10001',
    password: 'Mike',
  }
  apiGetUserInfo(param).then((res) => {
    console.log(res)
  })
}

onMounted(() => {
  getUserInfo()
})
</script>