<template>
  <h2>我是Vue3 , 一个人的信息</h2>
  姓：<input type="text" v-model="person.firstName"><br>
  名：<input type="text" v-model="person.lastName"><br>
  全名：{{ person.fullName }}<br>
  全名：<input type="text" v-model="person.fullName">

  <h2>在 Vue3 中 使用 计算属性 computed </h2>
  1、按需导入 computed 函数
  2、执行 某个computed函数 时，在其 回调参数 中 return 基于 响应式 数据 做 计算 的 值，用 变量 接收

  <h2>计算属性 的 工作原理 </h2>
  计算属性 ，第一次 自动调用，是指 Html页面 初始渲染 时， 就会默认 自动调用 一次。<br>
  计算属性 ，第二次 自动调用，是 当 计算属性 依赖 的 数据源 发生了变化，计算属性 就会 自动调用 重新求值。<br>
  也就说，只要 数据源 一发生变化，计算属性 就会触发 自动调用 的， 会有第三次、第四次......<br>

</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'MyDemo',
  setup() {
    let person = reactive({    // 正常人的信息数据
      firstName: '李',
      lastName: '四',
    })

    // Vue3 计算属性:

    // 1、计算全名 -- 简写版 （没有考虑计算属性被修改的情况）
    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName
    // })

    // 2、计算全名 -- 完整版 （考虑 读 和 写）
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArr = value.split('-');   // 将 字符串 转成 数组，并以 - 隔开
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      }
    })

    return {
      person
    }
  },
}
</script>
