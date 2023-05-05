<template>
  <h1>一个人的信息</h1>
  <h3>我叫 {{ name }}</h3>
  <h3>我今年 {{ age }}</h3>
  <button @click="sayhi">打招呼</button>
</template>

<script>
// 引入 渲染函数 h
import { h } from 'vue'
export default {
  name: 'App',

  // 此处只是测试一下 setup 函数 ，暂时不考虑响应式的问题
  setup() {

    // 数据
    let name = '李四'
    let age = 20

    // 方法
    function sayhi() {
      alert(`我叫 ${name}, 我 ${age} 岁了，你好呀！`)
    }

    // setup函数的返回值 ：返回一个对象 （常用）
    return {
      // name: name,
      // age: age,
      // sayhi:sayhi     可以简写
      name,
      age,
      sayhi
    }

    // setup函数的返回值 ：返回一个渲染函数 
    // return () => h('h1', 'walking')

  }

}
</script>

