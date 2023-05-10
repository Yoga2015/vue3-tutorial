<template>
  <div>
    <!-- 通过 ES6 的 ... 扩展运算符 ,可以直接使用 {{name}} 就能访问到对象中的属性 -->
    <h3>{{ sum }}</h3>
    <button @click="sum++">点我+1</button>

  </div>
</template>

<script>
import { reactive, toRef } from 'vue'
export default {
  name: 'MyTest',
  setup() {

    let sum = ref(0)

    return {
      sum,    // 让模板上可以使用 {{obj.属性}} 访问到 obj对象中的属性
      // ...obj,  让模板上可以直接使用 {{属性}} 访问到 obj对象中的属性
      // ...toRefs(obj)  // 直接使用 {{属性}} 访问到 obj对象中的属性，并且 属性 变成 响应式数据
    }
  }
}
</script>

<style></style>