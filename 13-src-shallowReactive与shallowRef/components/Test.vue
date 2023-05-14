<template>
  <h3>当前的x的值是: {{ x }}</h3>
  <button @click="x++">点我x+1</button>
</template>

<script>
import { shallowRef } from 'vue'
export default {
  name: 'MyTest',
  setup() {

    // let x = ref(0)   基本数据类型
    let x = shallowRef(0)

    console.log(x);

    return {
      x
    }
  },
}
</script>

