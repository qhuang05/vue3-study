<template>
  <div>
    <h3>toRow, markRow的使用</h3>
    <button @click="change1">click me</button>
    <div>{{state1}}</div>
    <button @click="change2">click me 2</button>
    <div>{{state2}}</div>
  </div>
</template>

<script setup lang="ts">
  import { toRaw, markRaw, ref, reactive } from 'vue';
  // toRaw: 从Reactive或Ref中得到原始数据，作用：做一些不想被监听的事情(提升性能)
  // 每次修改都会被追踪, 都会更新UI界面, 但是这样其实是非常消耗性能的。所以如果我们有一些操作不需要追踪, 不需要更新UI界面, 
  // 那么这个时候, 我们就可以通过toRaw方法拿到它的原始数据, 对原始数据进行修改
  // 这样就不会被追踪, 这样就不会更新UI界面, 这样性能就好了
  let state1 = reactive({name: 'AAA', details: {age: 20, sex: 1}});
  let data1 = toRaw(state1);
  const change1 = () => {
    data1.name = 'BBB';
    console.log(state1, data1)
  }

  // markRaw: 将数据标记为永远不能追踪的数据，一般在编写自己的第三方库时使用
  let data2 = markRaw({name: 'AAA', details: {age: 20, sex: 1}});
  let state2 = reactive(data2);
  const change2 = () => {
    state2.name = 'CCC';
    console.log(state2, data2);
  }
</script>

<style scoped>

</style>