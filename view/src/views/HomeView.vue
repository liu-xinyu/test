<template>
  <div class="home">
    <router-view></router-view>
    <div class="ul-box">
      <ul>
        <div class="el-tabs__active-bar is-top" style="transform: translateX(0px);"></div>
        <li @click="onClickTabs(1,'booking')">记账</li>
        <li @click="onClickTabs(2,'statistics')">统计</li>
        <li @click="onClickTabs(3,'setup')">设置</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
let onClickTabs = (num: number, path?: string) => {
  // console.log('event,num: ',  num);
  let nodes = document.getElementsByClassName('el-tabs__active-bar')
  let liWidth = document.querySelector('ul li')
  nodes[0].style.transform = 'translateX(' + liWidth!.clientWidth * (num - 1) + 'px)'
  nodes[0].style.width = liWidth!.clientWidth + 'px'
  if (path) {
    router.push({ name: path })
  }
}
onMounted(() => {
  onClickTabs(1);
})
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}

.home {
  height: 100vh;
  position: relative;
}

.el-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #409eff;
  z-index: 2;
  transition: transform .3s cubic-bezier(.645, .045, .355, 1);
  list-style: none;
}

.ul-box {
  position: absolute;
  bottom: 0;
  width: 100%;
  ul {
    // border-bottom: 1px rgb(175, 170, 170) solid;
    overflow: hidden;
    position: relative;
    li {
      float: left;
      list-style: none;
      padding: 3px 0px;
      text-align: center;
      cursor: pointer;
      width: 33%;
    }
  }
}


.ul-box::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #e4e7ed;
  z-index: 1;
}
</style>
