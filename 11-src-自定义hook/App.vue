<template>
  <button @click="isShowDemo = !isShowDemo">
    切换隐藏/显示Demo组件
  </button>
  <Demo3 v-if="isShowDemo"></Demo3>
  <hr>
  <Test></Test>
</template>

<script>
import { ref } from 'vue';
import Demo3 from './components/Demo3.vue'
import Test from './components/Test.vue'

export default {
  name: 'App',
  components: { Demo3, Test },
  setup() {

    let isShowDemo = ref(true)

    return {
      isShowDemo
    }

  },
}
</script>

