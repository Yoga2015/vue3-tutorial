<template>
  <h2>我是Vue3 , 一个人的信息</h2>
  <h3>姓名：{{ person.name }} </h3>
  <h3>年龄：{{ person.age }}</h3>
  <button @click="test">测试触发一下Demo组件的hello事件</button><hr>
  <slot></slot>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'MyDemo',
  props: ['msg', 'school'],
  emits: ['hello'],
  beforeCreate() {
    console.log('---beforeCreate---');
  },
  setup(props, context) {
    // console.log('---setup--', props); 
    // console.log('---setup--', context);  // 上下文对象
    console.log('---setup--', context.attrs); // 详情与Vue2的 $attrs
    console.log('---setup--', context.emit); // 触发自定义事件的
    console.log('---setup--', context.slots); // 插槽

    // 正常人的信息应该是下面这样的数据结构的
    let person = reactive({
      name: '李四',
      age: 25,
    })

    function test() {
      context.emit('hello', 123)
    }

    // 返回一个对象  （常用）
    return {
      person, test
    }
  },
}
</script>

