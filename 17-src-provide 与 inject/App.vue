<template>
  <div id="App">
    <h3>我是App组件 ( 祖 ) , {{ name }}--{{ price }}</h3>
    <Child></Child>
  </div>
</template>

<script>
import Child from './components/Child.vue'
import { provide, reactive, toRefs } from 'vue'
export default {
  name: 'myApp',
  components: { Child },
  setup() {
    let car = reactive({ name: '比亚迪', price: '20k' })
    provide('car', car)  // 给自己的后代组件 传递 数据
    return { ...toRefs(car) }
  }
}
</script>

<style>
#App {
  background-color: pink;
  padding: 10px;
}
</style>