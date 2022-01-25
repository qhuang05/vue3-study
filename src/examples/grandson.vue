<template>
  <h2 class="title">Grandson component:</h2>
  <div class="desc">这是一段描述内容</div>
  <div>
    <slot :data="data"></slot>
    <slot name="extra" :data="data2"></slot>
  </div>
  <div>
    {{store.state.count}}
    <button @click="dClick">debounce click</button>
    <button @click="tClick">throttle click</button>
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash'
  import {reactive, inject} from 'vue'
  import {useStore} from 'vuex'
  let data = reactive({x: 10, y: 20})
  let data2 = reactive({xx: 10, yy: 20})

  const injectData = inject('provideData')
  console.log('grandson injectData=', injectData)

  const store = useStore()
  const dClick = _.debounce(()=> {
    console.log('debounce===')
    store.commit('increase', 2);
  }, 1000, {leading: true})

  const tClick = _.throttle(()=>{
    console.log('throttle===')
    store.dispatch('asyncIncrease', 1);
  }, 1000)

  // 组件暴露自己的数据
  defineExpose({data, data2, dClick})
</script>

<style lang="scss" scoped>
:slotted(.default-tit){
  color: #0f0;
}
</style>