import { reactive, onMounted, onBeforeUnmount } from "vue"

// 一、声明函数
function savePoint() {

  // 1、实现鼠标 "打点" 相关的数据
  let point = reactive({
    x: 0,
    y: 0
  })

  // 2、实现鼠标 “打点” 相关的方法
  // 获取 鼠标在整个页面上的坐标
  // 首先页面得已加载完毕吧，也就是组件已挂载后，才能获取得了 鼠标在整个页面上的坐标
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

// 二、暴露 函数      供外界使用
export default savePoint
