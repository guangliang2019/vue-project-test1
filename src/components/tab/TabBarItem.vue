<template>
  <span @click="handleClick">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { useTabContext } from './context'
import type { TabBarItemProps } from './interface'

const { value } = defineProps<TabBarItemProps>()

// 有一个点击事件，可以用于改变 Tab 内部的 value，并且只能改变成自己的 value

const { changeTab } = useTabContext()

const handleClick = () => {
  //console.log(tabValue, value)
  changeTab(value)
}
</script>
