<template>
  <div id="App">
    
    <h3> 我是App组件 </h3>

    <Suspense>

      <template v-slot:default>
        <!-- 如果组件很快 就回来了，就展示在这个template里 -->
        <Child></Child>
      </template>

      <template v-slot:fallback>
        <!-- 如果组件很慢 才回来了，就展示在这个template里 -->
        <h3>稍等，加载中...</h3>
      </template>

    </Suspense>

  </div>
</template>

<script>
// 静态引入
// import Child from './components/Child.vue'
import { defineAsyncComponent } from 'vue';
// 异步引入
const Child = defineAsyncComponent(() => import('./components/Child.vue'))
export default {
  name: 'myApp',
  components: { Child },
}
</script>

<style>
#App {
  background-color: gray;
  padding: 10px;
}
</style>