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
  import {ref, reactive, toRefs, computed, watch, watchEffect, provide, onMounted} from 'vue'
  let data1 = ref('')
  data1.value = 'hello'

  let com1 = computed(()=>{
    return data1.value+'-y/m/d'
  })

  let data2 = reactive({id: 100, details: {name: 'Mary', age: 20}})

  const changeHandler = () => {
    data1.value = 'hello world'
    data2.details.name = 'Lucy'
  }
  
  const confirmChange = (data) => {
    console.log('confirmChange == ', data)
    data2.details.name = data;
    delete data2.details.options;
  }
  const inputChange = (data) => {
    console.log('inputChange == ', data)
    data2.details.name = data;
  }

  onMounted(()=>{
    data2.details.options = {k: 100, v: 200};
  })

  // watch和watchEffect
  watch(data1, (nv ,ov) => {
    console.log('watch data1>>', nv);
  })
  watch(()=>data2.details, (nv, ov) => {
    console.log('watch data2>>', nv)
  }, {
    // immediate: true
    deep: true
  })
  watchEffect(()=>{
    // watchEffect每次初始化时会执行一次回调函数来自动获取依赖; 
    // 无法获取到原值，只能得到变化后的值
    console.log('watchEffect>>', data1, data2);
  })

  // v-model使用
  let foo = ref('100')
  let bar = ref('abc')
  const modelChanged = (val) => {
    console.log('modelChanged=', val)
  }
  
  // provide, inject使用
  provide('provideData', {data1, data2})
</script>

<style scoped lang="scss">

</style>
