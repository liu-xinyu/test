<template>
  <div class="set-up-container">
    <div class="addClass">
      [管理]
      <ul>
        <li class="item" @click="showClass">+</li>
      </ul>
      <!-- <el-input v-model="money" placeholder="Please input" />
      <el-input v-model="remark" placeholder="Please input" />
      <el-button @click="addClass">创建分类</el-button>
      创建分类{{money}} -->
    </div>
    <div class="show-class" :style="{height:isShow?'30%':'0%'}">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
      </ul>
      <li>4</li>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createBill } from '../api/bill'
import { ref } from 'vue';

const money = ref(0);
const remark = ref('bv');

let addClass = () => {
  // if (money.value <= 0) {
  //   return;
  // }
  // createBill({ money: money.value + '', remark: remark.value })
}

const isShow = ref(false)
let showClass = () => {
  isShow.value = !isShow.value
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.set-up-container {
  width: 100%;
  height: 100%;
}

.item {
  list-style: none;
  width: 50px;
  height: 50px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}

.show-class {
  width: 100%;
  background: yellowgreen;
  position: fixed;
  max-height: 100%;
  overflow-y: auto;
  bottom: 30px;
  transition: 0.3s;
}
</style>
