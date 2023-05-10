<template>
  <h3>Vue3 当前求和为: {{ sum }}</h3>
  <button @click="sum++">点我+1</button>

  <h3>Vue3 当前的信息为：{{ msg }}</h3>
  <button @click="msg += '!'">点我加叹号！</button>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'MyDemoVue3',
  setup() {
    let sum = ref(0)
    let msg = ref('你好呀')

    // 监听 sum  --  简写版 (只读)      Vue3 允许同时 写多个watch

    // 情况一：监视 ref 所定义 的 一个响应式数据 ，并且 在 页面一挂载 的时候，就会自动触发一次监听 sum 
    // watch(sum, (newValue, oldValue) => {
    //   console.log(`Vue3 中 sum的值 被修改了, 修改前: ${oldValue},修改后：${newValue}`);
    // }, { immediate: true})

    // watch(msg, (newValue, oldValue) => {
    //   console.log(`Vue3 中 msg 的值 被修改了, 修改前: ${oldValue},修改后：${newValue}`);
    // }, { immediate: true})

    // 情况二：监视 ref 所定义 的 多个响应式数据  (一个数据 就用 一个变量 来装，多个数据 就用 数组 来装)
    watch([sum, msg], (newValue, oldValue) => {
      console.log(`Vue3 中 msg 的值 被修改了, 修改前: ${oldValue},修改后：${newValue}`);
    }, { immediate: true })

    return {
      sum, msg
    }
  },

}
</script>

