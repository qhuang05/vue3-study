<template>
  <div>{{data1}}, {{data11}}</div>
  <div>{{data2}}</div>
  <button @click="changeHandler">change</button>
  <Child :id="data2.id" :data="data2" @change="confirmChange" @input="inputChange"></Child>
</template>

<script setup lang="ts">
  import Child from '@/examples/child.vue'
  import {ref, reactive, toRefs, computed, watch, watchEffect, onMounted} from 'vue'
  let data1 = ref('')
  data1.value = 'hello'
  watch(data1, (nv, ov) => {
    console.log('watch data1', nv)
  })
  watchEffect(() => {})

  let data11 = computed(()=>{
    return data1.value+'-y/m/d'
  })
  
  let data2 = reactive({id: 100, details: {name: 'Mary', age: 20}})

  const changeHandler = () => {
    data1.value = 'hello world'
    data2.details.name = 'Lucy'
  }

  const confirmChange = (data) => {
    console.log('confirmChange == ', data)
  }
  
  const inputChange = (data) => {
    console.log('inputChange == ', data)
  }
</script>

<style scoped lang="scss">

</style>
