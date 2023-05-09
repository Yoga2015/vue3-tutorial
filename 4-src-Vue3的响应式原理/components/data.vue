<template>
  <div>我是data</div>
</template>

<script>

import { reactive } from 'vue'

export default {
  name: 'MyData'

  setup() {

    let data = reactive({
      person: {
        name: '李四',
        age: 25,
        job: {
          type: '前端工程师',
          salary: '30K'
        },
        hobby: ['篮球', '羽毛球', '排球']
      },
      student: {
        name: '张三',
        age: 33,
        job: {
          type: '后端端工程师',
          salary: '50K'
        },
        hobby: ['吃饭', '睡觉', '烫头']
      }
    })

    return {
      data
    }

  }
  
}

</script>