<template>
  <h2>我是 Test组件 </h2>
  <h4>当前点击时鼠标的坐标为：
    x:{{ point.x }} , y:{{ point.y }}
  </h4>
</template>

<script>
import savePoint from '../hooks/usePoint.js'
export default {
  name: 'MyTest',
  setup() {

    const point = savePoint()

    return {
      point
    }

  }
}
</script>
