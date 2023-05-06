<template>
  <h1>一个人的信息</h1>
  <h3>我叫 {{ name }}</h3>
  <h3>我今年 {{ age }}</h3>
  <h4>工作: {{ job.type }}</h4>
  <h4>工作薪水: {{ job.salary }}</h4>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('李四')
    let age = ref(25)
    console.log(name);  // RefImpl {..., _rawValue: '李四', _value: '李四'}
    console.log(age);   // RefImpl {..., _rawValue: 25, _value: 25}

    let job = ref({
      type: '前端工程师',
      salary: '30K'
    })
    console.log(job.value);    //  Proxy(Object) {type: '前端', salary: '40K'}
    console.log(job.value.type);    // 前端工程师

    function changeInfo() {
      name.value = '老六',
        age.value = 30,

        job.value.type = '后端工程师'
      job.value.salary = '60k'
    }

    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

