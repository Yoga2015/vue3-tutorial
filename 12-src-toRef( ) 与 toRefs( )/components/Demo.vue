<template>
  <h2>使用 toRef 和 toRefs </h2>
  <h5>{{ person }}</h5>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.j1.salary }} K</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'MyDemoVue-6',
  setup() {
    let person = reactive({
      name: '张三',
      age: 20,
      job: {
        j1: {
          salary: 30
        }
      }
    })

    return {
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // salary: toRef(person.job.j1, 'salary'),
      person,
      ...toRefs(person)
    }
  },
}
</script>

