<template>
  <Example></Example>
  <Ele></Ele>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello World" /> -->
  <!-- <el-button>I am ElButton</el-button> -->
</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import Example from '@/examples/index.vue'
import Ele from '@/examples/element/index.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
