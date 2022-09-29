<template>
    <div>
        <div @click="toSetupClass">管理分类</div>
    </div>
</template>
    

<script lang="ts" setup>
import { useRouter } from 'vue-router';
let router = useRouter()
let toSetupClass = () => {
    router.push({ name: 'setupClass' })
}
</script>