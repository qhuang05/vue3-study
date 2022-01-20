<template>
  <h2 v-bind="$attrs">child component 2:</h2>
  <div>props: {{props.modelValue}}, {{props.bar}}</div>
  <button @click="change1">change1</button>
  <button @click="change2">change2</button>
</template>

<script setup lang="ts">
  import {ref, defineProps, defineEmits, watch, watchEffect, useAttrs} from 'vue'
  const props = defineProps({
    modelValue: String | Number,
    bar: String | Number
  })
  const emit = defineEmits(['update:modelValue', 'update:bar'])
  const change1 = ()=>{
    emit('update:modelValue', 200);
  }
  const change2 = () => {
    emit('update:bar', 'def')
  }
</script>

<style scoped lang="scss">

</style>