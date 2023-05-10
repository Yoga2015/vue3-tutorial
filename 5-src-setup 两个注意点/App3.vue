<template>
  <Demo @hello="showHelloMsg" msg="hello" school="清华大学">
    <template #qwe>
      <span>walking</span>
    </template>
    <template #asd>
      <span>walking</span>
    </template>
  </Demo>
  <hr>
  <Test>

  </Test>
</template>

<script>
import Demo from './components/Demo.vue'
import Test from './components/toRefs-test.vue'
export default {
  name: 'App',
  components: {
    Demo, Test
  },
  setup() {
    // 方法
    function showHelloMsg(value) {
      alert(`你好,你触发了hello事件,我收到的参数是: ${value}`);
    }

    return {
      showHelloMsg
    }
  }
}
</script>

