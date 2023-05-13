<template>
  <h3>Vue3 当前求和为: {{ sum }}</h3>
  <button @click="sum++">点我+1</button><br>
  <h2>当前点击时鼠标的坐标为： x:{{ point.x }} , y:{{ point.y }}</h2>
</template>

<script>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'

export default {
  name: 'MyDemoVue3',
  setup() {
    let sum = ref(0)
    let point = reactive({
      x: 0,
      y: 0
    })

    // 获取 鼠标在整个页面上的坐标
    // 首先页面得已加载完毕吧，也就是组件已挂载后，才能获取得了 鼠标在整个页面上的坐标
    let savePoint = (event) => {
      // console.log(event.pageX, event.pageY)
      point.x = event.pageX
      point.y = event.pageY
    }

    onMounted(() => {
      window.addEventListener('click', savePoint)
    })

    // 主要是 Demo组件 在用 鼠标点击 获取坐标 功能 ，
    // 所以在 Demo组件 卸载前 ，去掉 鼠标点击 获取坐标 功能
    onBeforeUnmount(() => {
      window.removeEventListener('click', savePoint)
    })

    return { sum, point }
  },
}
</script>

