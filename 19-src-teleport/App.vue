<template>
  <div id="App">
    <h3> 我是App组件 ( 祖 ) </h3>
    <Child></Child>
  </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
  name: 'myApp',
  components: { Child },
}
</script>

<style>
#App {
  background-color: gray;
  padding: 10px;
}
</style>