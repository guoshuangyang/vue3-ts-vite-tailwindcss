<!-- =============================
 - name: index.vue
 - author: yang
 - description: index.vue file is ready for 
 - time: 2021/5/12
============================= -->
<template>
  <div class="pb-6">
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <p>9</p>
    <router-view/>
    <router-view/>
  </div>
  <nut-tabbar class="fixed bottom-0" @tab-switch="tabSwitch">
    <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
    <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
    <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
    <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
  </nut-tabbar>
  <nut-backtop :right="100"></nut-backtop>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {Toast} from "@nutui/nutui";
export default defineComponent({
  name: 'Main',
  methods: {
    tabSwitch: (value:any) => {
      console.log(value)
      // let {Toast} = context.config.globalProperties.Toast
      console.log(this)
      // this.Toast.text(value.index);
    }
  },

})
</script>

<style scoped>

</style>