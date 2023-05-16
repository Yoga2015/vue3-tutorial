<template>
  <div id="Child">
    <h3>我是Child组件</h3>
    {{ sum }}
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'myChild',
  
  // setup() {
  //   let sum = ref(0)
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({ sum })
  //     }, 3000)
  //   })
  // }

  async setup() {
    let sum = ref(0)
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum })
      }, 3000)
    })

    return await p

  }
}
</script>

<style>
#Child {
  background-color: skyblue;
  padding: 10px;
}
</style>