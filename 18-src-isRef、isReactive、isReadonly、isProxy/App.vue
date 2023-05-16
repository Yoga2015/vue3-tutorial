<template>
  <h3>我是App组件, {{ name }}--{{ price }}</h3>
  <h3>我是App组件, {{ name }}--{{ price }}</h3>
  <h3>我是App组件, {{ name }}--{{ price }}</h3>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'myApp',
  setup() {
    let car = reactive({ name: '比亚迪', price: '20k' })
    return {
      ...toRefs(car)
    }
  }
}
</script>
