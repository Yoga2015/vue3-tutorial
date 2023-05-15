<template>
  <div id="App">
    <h3>我是App组件, {{ name }}--{{ price }}</h3>
  </div>
</template>

<script>
import { ref, reactive, readonly, toRefs, isRef, isReactive, isReadonly, isProxy } from 'vue'
export default {
  name: 'myApp',
  setup() {
    let sum = ref(0)
    let car = reactive({ name: '比亚迪', price: '20k' })
    let car2 = readonly(car)

    // isRef:  检查一个值是否为 一个 ref对象
    console.log(isRef(sum));    // true

    // isReactive ： 检查一个对象 是否是由 reactive 创建的响应式代理
    console.log(isReactive(car));    // true

    // isReadonly  ： 检查一个对象 是否是 由 readonly 创建的只读代理
    console.log(isReadonly(car2));    // true

    // isProxy ： 检查一个对象 是否是 由 reactive 或者 readonly 方法 创建的代理
    console.log(isProxy(car));     // true
    console.log(isProxy(car2));     // true
    console.log(isProxy(sum));  // false  ref () 底层 使用的是 Object.defineProperty , 不是 Proxy


    return {
      ...toRefs(car)
    }
  }
}
</script>
