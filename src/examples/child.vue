<template>
  <h2 :title="$attrs.title">child component:</h2>
  <div>id={{props.msg}}</div>
  <div>data={{props.data}}</div>
  <input type="text" v-model="keyword" @change="changeHandler" @input="inputHandler" />
  <Grandson>
    <template v-slot:default="slotProps">
      <div>默认slot: {{slotProps}}</div>
      <ul>
        <li v-for="item in listData">{{item.name}}</li>
      </ul>
    </template>
    <template #extra="slotProps">
      <div>extra slot: {{slotProps}}</div>
    </template>
  </Grandson>
</template>

<script setup lang="ts">
  import Grandson from '@/examples/grandson.vue'
  import {ref, watch, watchEffect, useAttrs} from 'vue'
  const props = defineProps({
    msg: String,
    data: Object
  })
  const emit = defineEmits(['change', 'input']);

  let keyword = ref('');
  const changeHandler = () => {
    emit('change', keyword.value);
  }
  const inputHandler = () => {
    emit('input', keyword.value)
  }

  // const attrs = useAttrs();
  // console.log('attrs=', attrs)

  watch(()=>props.msg, (nv, ov) => {
    keyword.value = nv
  })

  let listData = ref([{id:1, name: 'vue'}, {id:2, name: 'react'}])
</script>

<style scoped lang="scss">

</style>