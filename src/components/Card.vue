<!-- =============================
 - name: Card.vue
 - author: yang
 - description: Card.vue file  vue3组件示例 单文件组件
 - time: 2021/5/9
============================= -->
<template>
  <div class="w-full bg-white shadow rounded hover:bg-purple-200">
    <div class="border-b border-gray-300">
      <slot name="title"></slot>
    </div>
    <div class="p-2">
      <slot></slot>
    </div>
  </div>
</template>