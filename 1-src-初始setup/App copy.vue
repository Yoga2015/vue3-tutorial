<script setup>
// 1、引入 ref 函数
import { ref } from 'vue'

// 2、定义数据
let name = ref('李四');
let age = ref(18);

// 3、操作数据
function sayhi() {
  alert(`我叫 ${name}, 我 ${age.value++} 岁了，你好呀！`)
}
</script>

<template>
  <!-- 模板中 -->
  <div>
    <h1>一个人的信息</h1>
    <h3>我叫 {{ name }}</h3>
    <h3>我今年 {{ age }}</h3>
    <button @click="sayhi">打招呼</button>
  </div>
</template>



