<template>
  <h3>当前求和为: {{ sum }}</h3>
  <button @click="sum++">点我+1</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MyDemo',
  setup() {
    let sum = ref(0)

    return {
      sum
    }
  },
}
</script>

