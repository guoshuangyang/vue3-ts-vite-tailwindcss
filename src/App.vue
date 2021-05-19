<template>
  <router-view/>
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
      version,
      tabSwitch: null
    }
  }
})
</script>

<style lang="scss">
#app{
  background: #efefef;
}
</style>
