<template>
  <h3>Vue2 当前求和为: {{ sum }}</h3>
  <button @click="sum++">点我+1</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MyDemo',

  // Vue2 的 watch 监听器
  watch: {
    // 监听 sum  --  简写版   (只读)
    // sum(newValue, oldValue) {
    //   console.log(`sum的值 被修改了, 修改前: ${oldValue},修改后：${newValue}`);
    // }

    // 监听 sum  --  完整版   (考虑 读、写)
    sum: {
      immediate: true,   // 一挂载 就 自动监听 一次
      deep: true,     // 开启深度监听 sum 内部 ，
      handler(newValue, oldValue) {
        console.log(`Vue2 中 sum的值 被修改了, 修改前: ${oldValue},修改后：${newValue}`);
      }
    }
  },

  setup() {
    let sum = ref(0)

    return {
      sum
    }
  },
  
}
</script>

