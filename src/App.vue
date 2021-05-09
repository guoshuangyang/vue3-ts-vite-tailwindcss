<template>
  <img class="mx-auto" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld class="text-center py-2" msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="w-1/2 mx-auto">
    <Card>
      <template #title>
        <div class="p-2 font-bold text-xl">
          vite + ts + tailwindcss
        </div>
      </template>
      卡片组的测试
    </Card>
  </div>
  <div class="mx-auto w-full flex justify-between px-4 bg-white fixed bottom-0">
    <p>Copyright (c) 2021 <a href="https://github.com/guoshuangyang" class="text-black cursor-pointer">洋洋洋</a></p>
    <p>{{version}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './components/Card.vue'
import HelloWorld from './components/HelloWorld.vue'
import { version } from "../package.json";
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Card
  },
  data(){
    return {
      version
    }
  }
})
</script>

<style lang="scss">
#app{
  background: #efefef;
}
</style>
