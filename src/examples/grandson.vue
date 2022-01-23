<template>
  <h2 class="title">Grandson component:</h2>
  <div class="desc">这是一段描述内容</div>
  <div>
    <slot :data="data"></slot>
    <slot name="extra" :data="data2"></slot>
  </div>
</template>

<script setup lang="ts">
  import {reactive, inject} from 'vue'
  let data = reactive({x: 10, y: 20})
  let data2 = reactive({xx: 10, yy: 20})

  const injectData = inject('provideData');
  console.log('grandson injectData=', injectData);
</script>

<style lang="scss" scoped>
:slotted(.default-tit){
  color: #0f0;
}
</style>