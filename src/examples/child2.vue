<template>
  <h2 v-bind="$attrs">child component 2:</h2>
  <div>props: {{props.modelValue}}, {{props.bar}}, {{props.list}}</div>
  <button @click="change1" v-autofocus>change1</button>
  <button @click="change2">change2</button>
</template>

<script setup lang="ts">
  import {ref, inject} from 'vue'
  // const props = defineProps({
  //   modelValue: String|Number,
  //   bar: String
  // })

  // const props = withDefaults(defineProps(), {
  //   modelValue: {
  //     type: String|Number,
  //     default: ''
  //   },
  //   bar: {
  //     type: String,
  //     default: ''
  //   }
  // })
  
  type ListItem = {
    id: number,
    name: string
  }
  interface Props{
    modelValue: string|number,
    bar?: string,
    // list?: Array<Object>
    // list?:Object[]
    list?: Array<Object<ListItem>>
  }
  const props = withDefaults(defineProps<Props>(),{
    modelValue: '',
    list: ()=>[]
  })
  
  const emit = defineEmits(['update:modelValue', 'update:bar'])
  const change1 = ()=>{
    emit('update:modelValue', 200);
  }
  const change2 = () => {
    emit('update:bar', 'def')
  }

  const injectData = inject('provideData');
  console.log('child injectData=', injectData)
</script>

<style scoped lang="scss">

</style>