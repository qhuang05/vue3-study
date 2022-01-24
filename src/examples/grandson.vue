<template>
  <h2 class="title">Grandson component:</h2>
  <div class="desc">这是一段描述内容</div>
  <div>
    <slot :data="data"></slot>
    <slot name="extra" :data="data2"></slot>
  </div>
  <div>
    <button @click="dClick">debounce click</button>
    <button @click="tClick">throttle click</button>
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash'
  import {reactive, inject} from 'vue'
  let data = reactive({x: 10, y: 20})
  let data2 = reactive({xx: 10, yy: 20})

  const injectData = inject('provideData');
  console.log('grandson injectData=', injectData);

  const dClick = _.debounce(()=> {
    console.log('debounce===')
  }, 1000, {leading: true})

  const tClick = _.throttle(()=>{
    console.log('throttle===')
  }, 1000);
</script>

<style lang="scss" scoped>
:slotted(.default-tit){
  color: #0f0;
}
</style>