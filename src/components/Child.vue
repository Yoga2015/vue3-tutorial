<template>
  <div id="Child">
    <h3>我是Child组件</h3>
    {{ sum }}
  </div>
</template>

<script>

// ref 函数 处理基本类型

let name = ref('李四');

let age = ref(25)

console.log(name);  // RefImpl {..., _rawValue: '李四', _value: '李四'}

console.log(age);   // RefImpl {..., _rawValue: 25, _value: 25}

export default {
  name: 'myChild',
  
  // setup() {
  //   let sum = ref(0)
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({ sum })
  //     }, 3000)
  //   })
  // }

  async setup() {
    let sum = ref(0)
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum })
      }, 3000)
    })

    return await p

  }
}
</script>

<style>
#Child {
  background-color: skyblue;
  padding: 10px;
}
</style>