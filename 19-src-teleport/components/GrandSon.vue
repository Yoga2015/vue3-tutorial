<template>
  <div id="GrandSon">
    <h3>我是GrandSon组件 ( 孙 )</h3>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
  name: 'myGrandSon',
  components: { Dialog }
}
</script>

<style>
#GrandSon {
  background-color: orange;
  padding: 10px;
}
</style>