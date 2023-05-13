<template>
  <h3>Vue3 当前求和为: {{ sum }}</h3>
  <button @click="sum++">点我+1</button>
  <h3>Vue3 当前的信息为：{{ msg }}</h3>
  <button @click="msg += '!'">点我加叹号！</button>
  <hr>
  <h3>姓名：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <h3>薪资：{{ person.job.j1.salary }}</h3>
  <button @click="person.name += '!'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'
export default {
  name: 'MyDemoVue-6',
  setup() {
    let sum = ref(0)
    let msg = ref('你好呀')
    let person = reactive({     // 此处虽使用了ref,但底层是求助了reactive的
      name: '张三',
      age: 20,
      job: {
        j1: {
          salary: 1000
        }
      }
    })

    // watchEffect 不用指明监视哪个属性 , 而且 感觉好像默认开启了：初始 自动调用 一次
    // watchEffect 所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
    watchEffect(() => {
      const x1 = sum.value
      const x2 = msg.value
      const x3 = person.name
      const x4 = person.job.j1.salary
      console.log('watchEffect 所指定的回调执行了');
    })

    return { sum, msg, person }
  },
}
</script>

