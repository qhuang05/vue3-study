<template>
  <h2>child component:</h2>
  <div>id={{props.id}}</div>
  <div>data={{props.data}}</div>
  <!-- <input type="text" /> -->
  <button @click="changeHandler">click me</button>
</template>

<script setup lang="ts">
  import {defineProps, defineEmits} from 'vue'
  const props = defineProps({
    id: Number,
    data: Object
  })

  // const changeHandler = 
</script>

<style scoped lang="scss">

</style>