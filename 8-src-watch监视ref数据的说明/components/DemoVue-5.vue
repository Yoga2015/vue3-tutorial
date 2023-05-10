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
import { ref, watch } from 'vue'
export default {
  name: 'MyDemoVue-5',
  setup() {
    let sum = ref(0)
    let msg = ref('你好呀')
    let person = ref({     // 此处虽使用了ref,但底层是求助了reactive的
      name: '张三',
      age: 20,
      job: {
        j1: {
          salary: 1000
        }
      }
    })

    // console.log(sum);
    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum 变化了', newValue, oldValue);
    // })

    // 修改了person内部的数据，控制台也不打印，原因：person在内存中的地址还是没变的
    // watch(person, (newValue, oldValue) => {
    //   console.log('person 变化了', newValue, oldValue);
    // })

    console.log(person);

    // 修改了person内部的数据，控制台打印输出了, value的值发生了变化，其中 内存中的地址 也发生了变化，所以能深度监视
    // 监测的不再是 ref( ) 定义的数据了，而是ref( )内部求助 reactive( ) 所定义的数据。
    watch(person.value, (newValue, oldValue) => {
      console.log('person 变化了', newValue, oldValue);
    })

    watch(person.value, (newValue, oldValue) => {
      console.log('person 变化了', newValue, oldValue);
    }, { deep: true })

    return {
      sum, msg, person
    }
  },
}
</script>

