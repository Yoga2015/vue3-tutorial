import { reactive, onMounted, onBeforeUnmount } from "vue"

export default function () {

  // 1、实现鼠标 "打点" 相关的数据
  let point = reactive({
    x: 0,
    y: 0
  })

  // 2、实现鼠标 “打点” 相关的方法
  // 获取 鼠标在整个页面上的坐标
  let savePoints = (event) => {
    // console.log(event.pageX, event.pageY)
    point.x = event.pageX
    point.y = event.pageY
  }

  // 3、实现鼠标 "打点" 相关的生命周期钩子
  onMounted(() => {
    window.addEventListener('click', savePoints)
  })

  // 主要是 Demo组件 在用 鼠标点击 获取坐标 功能 ，
  // 所以在 Demo组件 卸载前 ，去掉 鼠标点击 获取坐标 功能
  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoints)
  })

  return point
}
