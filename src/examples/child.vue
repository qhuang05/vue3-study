<template>
  <h2 :title="$attrs.title">child component:</h2>
  <div>id={{props.msg}}</div>
  <div>data={{props.data}}</div>
  <input type="text" v-model="keyword" @change="changeHandler" @input="inputHandler" />
  <!-- <button @click="changeHandler">click me</button> -->
</template>

<script setup lang="ts">
  import {ref, defineProps, defineEmits, watch, watchEffect, useAttrs} from 'vue'
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
</script>

<style scoped lang="scss">

</style>