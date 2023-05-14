<template>
  <h3>当前的x的值是: {{ x }}</h3>
  <button @click="x++">点我x+1</button>
  <hr>

  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.j1.salary }} K</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, ref, toRefs, shallowReactive, shallowRef } from 'vue'
export default {
  name: 'MyDemo',
  setup() {
    // shallowReative ：只处理 对象 中 第一层 的属性 ，
    //                  并 仅将 这一层的属性 转变成 响应式的（浅响应式）
    // let person = shallowReactive({
    let person = reactive({
      name: '张三',
      age: 20,
      job: {
        j1: {
          salary: 30
        }
      }
    })

    // let x = ref(0)
    let x = shallowRef(0)

    return {
      x,
      ...toRefs(person)
    }
  },
}
</script>

