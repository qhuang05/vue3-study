<template>
  <div>{{data1}}, {{com1}}</div>
  <div>{{data2}}</div>
  <button @click="changeHandler">change</button>
  <div style="border:1px solid #ccc">
    <p>{{foo}}</p>
    <p>{{bar}}</p>
  </div>
  <Child title="子组件1" :msg="data1" :data="data2" @change="confirmChange" @input="inputChange"></Child>
  <Child2 title="子组件2" v-model="foo" v-model:bar="bar" @update:modelValue="modelChanged" @update:bar="modelChanged"></Child2>
  
</template>

<script setup lang="ts">
  import Child from '@/examples/child.vue'
  import Child2 from '@/examples/child2.vue'
  import {ref, reactive, toRefs, computed, onMounted} from 'vue'
  let data1 = ref('')
  data1.value = 'hello'

  let com1 = computed(()=>{
    return data1.value+'-y/m/d'
  })

  const changeHandler = () => {
    data1.value = 'hello world'
    data2.details.name = 'Lucy'
  }
  
  let data2 = reactive({id: 100, details: {name: 'Mary', age: 20}})

  const confirmChange = (data) => {
    console.log('confirmChange == ', data)
    data2.details.name = data;
  }
  const inputChange = (data) => {
    console.log('inputChange == ', data)
    data2.details.name = data;
  }

  // v-model使用
  let foo = ref('100')
  let bar = ref('abc')
  const modelChanged = (val) => {
    console.log('modelChanged=', val)
  }
</script>

<style scoped lang="scss">

</style>
