<template>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.j1.salary }} K</h3>
  <h3 v-if="person.car">座驾信息：{{ person.car }}</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
</template>

<script>
import { reactive, toRefs, toRaw } from 'vue'
export default {
  name: 'MyDemo',
  setup() {
    let person = reactive({
      name: '张三',
      age: 20,
      job: {
        j1: {
          salary: 30
        }
      },
    })

    function showRawPerson() {
      const p = toRaw(person)    // 将一个 由 reactive 生成的 响应式对象 person  转为  普通对象
      console.log(p);
    }

    function addCar() {
      let car = { name: '比亚迪', price: '50w' }
      person.car = car
    }

    return {
      ...toRefs(person),  // person中有多少个属性就拆分多少个属性出来到模板上用
      person,  // 再次 返回 person 是为了 添加一台车 时用。
      showRawPerson, addCar
    }
  },
}
</script>

