<template>
  <h2>Grandson component:</h2>
  <slot :data="data"></slot>
  <slot name="extra" :data="data2"></slot>
</template>

<script setup lang="ts">
  import {reactive, inject} from 'vue'
  let data = reactive({x: 10, y: 20})
  let data2 = reactive({xx: 10, yy: 20})

  const injectData = inject('provideData');
  console.log('grandson injectData=', injectData);
</script>

<style scoped lang="scss">

</style>