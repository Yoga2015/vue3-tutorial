<template>
  <h3>Vue3 当前求和为: {{ sum }}</h3>
  <button @click="sum++">点我+1</button>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

export default {
  name: 'MyDemoVue3',
  setup() {
    console.log("1-开始创建Demo组件-----setup()")
    let sum = ref(0)

    // 通过 组合式API 的形式 去使用 生命周期钩子
    // 所谓的 组合式 API 就是 往 setup（）函数中 塞东西
    onBeforeMount(() => {
      console.log(`----onBeforeMount----`);
    })
    onMounted(() => {
      console.log(`----onMounted----`);
    })
    onBeforeUpdate(() => {
      console.log(`----onBeforeUpdate----`);
    })
    onUpdated(() => {
      console.log(`----onUpdated----`);
    })
    onBeforeUnmount(() => {
      console.log(`----onBeforeUnmount----`);
    })
    onUnmounted(() => {
      console.log(`----onUnmounted----`);
    })

    return { sum }
  },

  // 通过 配置项的形式 使用生命周期钩子
  //#region 
  // beforeCreate() {
  //   console.log(`-----beforeCreate ----`);
  // },
  // created() {
  //   console.log(`-----created-------`);
  // },
  // beforeMount() {
  //   console.log(`-----beforeMount-------`);
  // },
  // mounted() {
  //   console.log(`-----mounted-------`);
  // },
  // beforeUpdate() {
  //   console.log(`-----beforeUpdate-------`);
  // },
  // updated() {
  //   console.log(`-----updated-------`);
  // },
  // beforeUnmount() {
  //   console.log(`-----beforeUnmount-----`);
  // },
  // unmounted() {
  //   console.log(`-----unmounted-----`);
  // }
  //#endregion
}
</script>

