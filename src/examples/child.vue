<template>
  <h2>child component:</h2>
  <div>id={{props.id}}</div>
  <div>data={{props.data}}</div>
  <input type="text" v-model="keyword" @change="changeHandler" @input="inputHandler" />
  <!-- <button @click="changeHandler">click me</button> -->
</template>

<script setup lang="ts">
  import {ref, defineProps, defineEmits} from 'vue'
  const props = defineProps({
    id: Number,
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
</script>

<style scoped lang="scss">

</style>