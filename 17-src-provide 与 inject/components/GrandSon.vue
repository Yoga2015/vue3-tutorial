<template>
  <div id="GrandSon">
    <h3>我是GrandSon组件 ( 孙 )</h3>
    <!-- <h3>接收 祖宗 传递的数据：{{ carMsg }}</h3> -->
    <h3>接收祖宗传递过来的数据：
        {{ carMsg.name }}--{{ carMsg.price }}
    </h3>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  name: 'myGrandSon',
  setup() {
    let carMsg = inject('car')  //接收祖宗传递的数据
    console.log(carMsg);
    return { carMsg }
  }
}
</script>

<style>
#GrandSon {
  background-color: orange;
  padding: 10px;
}
</style>