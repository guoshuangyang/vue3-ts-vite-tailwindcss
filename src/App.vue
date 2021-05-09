<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="w-1/2 mx-auto">
    <Card>
      <template #title>
        <div class="p-2 font-bold">
          vite + ts + tailwindcss
        </div>
      </template>
      hhhhhhhh
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './components/Card.vue'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Card
  }
})
</script>

<style lang="scss">
#app{
  background: #efefef;
}
</style>
