<template>
  <h2>Vue3 当前求和为: {{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <h4>当前点击时鼠标的坐标为：
    x:{{ point.x }} , y:{{ point.y }}
  </h4>
</template>

<script>
import { ref } from 'vue'
import savePoint from '../hooks/usePoint.js'

export default {
  name: 'MyDemoVue3',
  setup() {
    let sum = ref(0)

    let point = savePoint()

    return { sum, point }
  },
}
</script>

