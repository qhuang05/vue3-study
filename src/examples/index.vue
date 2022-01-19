<template>
  <div>{{msg}}</div>
  <button @click="changeMsg">change</button>
</template>

<script setup lang="ts">
  import {ref, reactive, watch, watchEffect, onMounted} from 'vue'
  let msg = ref();
  msg.value = 'hello'
  watch(msg, (nv, ov) => {
    console.log('watch msg', nv)
  })
  watchEffect(msg, (nv, ov) => {
    
  })
  const changeMsg = () => {
    msg.value = 'hello world'
  }
</script>

<style scoped lang="scss">

</style>
