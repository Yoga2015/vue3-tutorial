<template>
  <h1>一个人的信息</h1>
  <h3 v-show="person.name">我叫 {{ person.name }}</h3>
  <h3>年龄： {{ person.age }}</h3>
  <h3 v-show="person.sex">性别：{{ person.sex }} </h3>
  <h4>工作: {{ person.job.type }}</h4>
  <h4>工作薪水: {{ person.job.salary }}</h4>
  <h4>爱好: {{ person.hobby }}</h4>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加一个sex 属性</button>
  <button @click="deleteName">删除一个name 属性</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',

  setup() {
    // 正常人的信息应该是下面这样的数据结构的
    let person = reactive({
      name: '李四',
      age: 25,
      job: {
        type: '前端工程师',
        salary: '30K'
      },
      hobby: ['篮球', '羽毛球', '排球']
    })

    function changeInfo() {
      person.name = '老六',
        person.age = 30,
        person.job.type = '后端工程师'
      person.job.salary = '60k'
      person.hobby[0] = '吃饭'    // 通过索引 来读取、修改数组
    }

    function addSex() {
      // 添加 属性  给 person对象
      person.sex = '男'
      // 通过 Object.keys() 遍历  person对象中的属性
      console.log(Object.keys(person))
    }

    function deleteName() {
      // 删除 属性  给 person对象
      delete person.name
      console.log(Object.keys(person))
    }

    return {
      person, changeInfo, addSex, deleteName
    }
  }
}
</script>

