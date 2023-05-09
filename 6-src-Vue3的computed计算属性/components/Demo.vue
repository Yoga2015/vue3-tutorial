<template>
  <h2>我是Vue3 , 一个人的信息</h2>
  姓：<input type="text" v-model="person.firstName"><br>
  名：<input type="text" v-model="person.lastName"><br>
  全名：{{ person.fullName }}<br>
  全名：<input type="text" v-model="person.fullName">
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

    // 计算全名 -- 简写版 （没有考虑计算属性被修改的情况）
    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName
    // })

    // 计算全名 -- 完整版 （考虑 读 和 写）
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

