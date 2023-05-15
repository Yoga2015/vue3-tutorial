<template>
  <input type="text" v-model="keyword">
  <h3>{{ keyword }}</h3>
</template>

<script>
import { ref, customRef } from 'vue';
export default {
  name: 'App',
  setup() {
    function myRef(value, delay) {
      // console.log(`--myRef--`, value);
      let timeout
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从 myRef 这个容器中读取数据了,我把${value}给他了`);
            track() // 通知 Vue 追踪 value的变化 （提前 和 get 商量一下，让他认为这个value是有用的）
            return value
          },
          set(newValue) {
            console.log(`有人把myRef这个容器中的数据改为了: ${newValue} `);
            // 加个防抖 ：为了延迟更新
            clearTimeout(timeout)
            timeout = setTimeout(() => {
              value = newValue
              trigger()  // 数据发生改变后，等500毫秒后 ，再通知 Vue 去重新解析模板
            }, delay)    // 灵活性更强，让 调用者 自己 传入 延迟时间
          }
        }
      })
    }

    // let keyword = ref('hello')  // 使用 Vue提供的 ref
    // let keyword = myRef('hello')  // 使用 程序员自定义的 ref
    let keyword = myRef('hello', 400)  // 使用 程序员自定义的 ref

    return { keyword }

  },
}
</script>

