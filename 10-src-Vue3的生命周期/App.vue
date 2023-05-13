<template>
  <button @click="isShowDemo = !isShowDemo">
    切换隐藏/显示Demo组件
  </button>
  <Demo2 v-if="isShowDemo"></Demo2>
</template>

<script>
import { ref } from 'vue';
// import Demo from './components/Demo.vue'
import Demo2 from './components/Demo2.vue'

export default {
  name: 'App',
  components: { Demo2 },
  setup() {

    let isShowDemo = ref(true)

    return {
      isShowDemo
    }

  },
}
</script>

