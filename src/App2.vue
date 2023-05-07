<template>
  <h2>我是Vue3 , 默认使用 Proxy 代理的效果</h2>
  <h3>姓名：{{ person.name }} </h3>
  <h3>年龄：{{ person.age }}</h3>
  <h3 v-show="person.sex">性别：{{ person.sex }} </h3>
  <h3>爱好: {{ person.hobby }}</h3>
  <button @click="addSex">添加一个sex 属性</button>
  <button @click="deleteName">删除一个name 属性</button>
  <button @click="changeHobby">修改第一个爱好的名称</button>
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
      hobby: ['篮球', '羽毛球', '排球']
    })

    function addSex() {
      // 给 person 对象 添加 属性
      person.sex = '男'
      // 通过 Object.keys() 遍历  person对象中的属性
      console.log(Object.keys(person));
    }

    function deleteName() {
      delete person.name
      console.log(Object.keys(person));
    }

    function changeHobby() {
      person.hobby[0] = '足球'
    }

    return {
      person, addSex, deleteName, changeHobby
    }
  }

}
</script>

