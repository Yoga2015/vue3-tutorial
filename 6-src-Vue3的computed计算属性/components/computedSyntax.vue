<template>
  <div>
    vue3 的 computed 语法糖写法
  </div>
</template>

<script setup>

// 1、导入 computed 函数
import { computed } from 'vue'

// Pagination
const paginationValue = ref(false);
const pageSize = ref(8); // 每页显示8条信息  
const currentPage = ref(1); // 当前页码  

// 计算总条目数  
const totalItems = computed(() => whiteListArr.whitelist.length);

// 计算当前页显示的条目  
const currentPageItems = computed(() => {

  const start = (currentPage.value - 1) * pageSize.value;

  const end = start + pageSize.value;

  return whiteListArr.whitelist.slice(start, end);

});


</script>
