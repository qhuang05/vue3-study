<template>
  <h2 :title="$attrs.title" class="title">child component:</h2>
  <div class="c1">id={{props.msg}}</div>
  <div :class="$style.a">data={{props.data}}</div>
  <div :class="mod1.a">data={{props.data}}</div>
  <input type="text" v-model="keyword" @change="changeHandler" @input="inputHandler" ref="inputEl" />
  <div class="g1">
    <Grandson ref="grandson">
      <template v-slot:default="slotProps">
        <div class="default-tit">默认slot: {{slotProps}}</div>
        <ul>
          <div is="vue:li" v-for="item in listData" :ref="setListEl">{{item.name}}</div>
        </ul>
      </template>
      <template #extra="slotProps">
        <div>extra slot: {{slotProps}}</div>
      </template>
    </Grandson>
  </div>
  <div class="button">
    <el-button>I am ElButton</el-button>
  </div>
</template>

<script setup lang="ts">
  import Grandson from '@/examples/grandson.vue'
  import {ref, reactive, watch, watchEffect, useAttrs, nextTick, onMounted} from 'vue'
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

  // ref和dom
  const inputEl = ref(null | HTMLElement)
  const listEl = ref([])
  const setListEl = (el) => {
    listEl.value.push(el)
  }
  const grandson = ref(null)
  onMounted(()=>{
    nextTick(()=>{
      console.log('vue3 dom', inputEl.value, listEl.value)
      inputEl.value.focus()
      console.log('vue3 component', grandson.value.data)
      // grandson.value.dClick();
    })
  })

  // 样式
  let theme = reactive({color: '#f00'})
  setTimeout(() => {
    theme.color = '#0f0'
  }, 1500);
</script>

<style lang="scss" scoped>
// v-bind
.title{
  color: v-bind('theme.color')
}
// 全局生效
// :global(.desc){
//   text-decoration: underline;
// }
// deep
.button{
  :deep(.el-button){
    color: #00f;
    background: #f00;
  }
}
</style>
<style lang="scss" module>
  .a{
    color: red;
  }
</style>
<style lang="scss" module="mod1">
  .a{
    color: orange;
  }
</style>