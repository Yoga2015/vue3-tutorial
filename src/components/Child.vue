<template>
  <div id="Child">
    <h3>我是Child组件 ( 子 )</h3>
    <GrandSon></GrandSon>
  </div>
</template>

<script>
import GrandSon from './GrandSon.vue'
export default {
  name: 'myChild',
  components: { GrandSon }
}
</script>

<style>
#Child {
  background-color: skyblue;
  padding: 10px;
}
</style>