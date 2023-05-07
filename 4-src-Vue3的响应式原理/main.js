// 引入的不再是 Vue构造函数 了
// import Vue from 'vue'

// 引入的是 一个名为 createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


// 创建应用实例对象--app(类似于之前Vue2中的vm,但app 比 vm 更'轻')
// const app = createApp(App)
// console.log('@@@', app);

// 挂载
// app.mount('#app')

// 3秒后卸载
// setTimeout(() => {
//   app.unmount('#app')
// }, 3000)


// new Vue({
//   // render: (h) => { return h(App) }
//   render: h => h(App)
// }).$mount('#app')
