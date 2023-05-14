<template>
  <h3>当前的sum的值是: {{ sum }}</h3>
  <button @click="sum++">点我sum+1</button><br>

  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.j1.salary }} K</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, ref, toRefs, readonly, shallowReadonly } from 'vue'
export default {
  name: 'MyDemo',
  setup() {
    let sum = ref(0)
    let person = reactive({
      name: '张三',
      age: 20,
      job: {
        j1: {
          salary: 30
        }
      }
    })

    sum = readonly(sum)
    // sum = readReadonly(sum)    // 无意义，因为 sum 就一层的
    console.log(sum);

    // person = readonly(person)    // 此时 person 的属性 都不能修改
    person = shallowReadonly(person)   // 此时 只有 salary 可以修改
    console.log(person);

    return {
      sum,
      ...toRefs(person)
    }
  },
}
</script>

