<template>
  <h3>姓名：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <h3>薪资：{{ person.job.j1.salary }}</h3>
  <button @click="person.name += '!'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, watch } from 'vue'

export default {
  name: 'MyDemoVue-4',
  setup() {
    let person = reactive({
      name: '张三',
      age: 20,
      job: {
        j1: {
          salary: 1000
        }
      }
    })

    // 监听 person
    /*
       情况一：监视 reactive 所定义的 一个响应式数据 的 全部属性 
            1、注意：此处无法正确的获取 oldValue
            2、注意：强制开启了深度监视 （deep配置为false也无效）
    */
    watch(person, (newValue, oldValue) => {
      console.log('person 变化了', newValue, oldValue);
    }, { deep: false })   // deep配置为false也无效


    // 情况二：监视 reactive 所定义的 一个响应式数据 的 某一个属性
    // watch(() => person.name, (newValue, oldValue) => {
    //   console.log('person的name 变化了', newValue, oldValue);
    // })
    // watch(() => person.age, (newValue, oldValue) => {
    //   console.log('person的age 变化了', newValue, oldValue);
    // })

    // 情况三：监视 reactive 所定义的 一个响应式数据 的 某些属性
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log('person 的 name 或 age 变化了', newValue, oldValue);
    // })

    // 特殊情况 监视 reactive 所定义的 一个响应式数据 的 对象中的某个属性，所以 deep配置有效
    watch(() => person.job, (newValue, oldValue) => {
      console.log('person 的 job 变化了', newValue, oldValue);
    }, { deep: true })

    return {
      person
    }
  },

}
</script>

