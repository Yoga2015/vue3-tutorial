<template>
  <input type="text" v-model="keyword">
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',
  setup() {

    let keyword = ref('hello')

    return {
      keyword
    }
  },
}
</script>

