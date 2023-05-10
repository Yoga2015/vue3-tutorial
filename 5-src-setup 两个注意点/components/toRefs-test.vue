<template>
  <div>
    <!-- 
      <h3>{{ obj.name }}</h3>
      <h3>{{ obj.gender }}</h3>
      <h3>{{ obj.age }}</h3> 
    -->

    <!-- 通过 ES6 的 ... 扩展运算符 ,可以直接使用 {{name}} 就能访问到对象中的属性 -->
    <h3>{{ name }}</h3>
    <h3>{{ gender }}</h3>
    <h3>{{ age }}</h3>

    <div>
      <button @click="name = 'juejin'">改变姓名</button>
      <button @click="gender = '女'">改变性别</button>
      <button @click="age = '20'">改变年龄</button>
    </div>
    
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'MyTest',
  setup() {

    let sum = ref(0)
    const obj = reactive({
      name: 'walking',
      gender: '男',
      age: '18'
    })

    return {
      // obj,    让模板上可以使用 {{obj.属性}} 访问到 obj对象中的属性
      // ...obj,  让模板上可以直接使用 {{属性}} 访问到 obj对象中的属性
      ...toRefs(obj)  // 直接使用 {{属性}} 访问到 obj对象中的属性，并且 属性 变成 响应式数据
    }
  }
}
</script>

<style></style>