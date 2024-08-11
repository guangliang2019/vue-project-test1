<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { TabContext, TabProps } from './interface'
import { TabInjectionKey } from './context'
import { provide, ref } from 'vue'

const { defaultValue } = defineProps<TabProps>()

// 内部持有一个 value，这个 value 可以向下分发，被 TabBarItem、TabContent 所获取

const tabValue = ref(defaultValue)

provide<TabContext>(TabInjectionKey, {
  tabValue: tabValue,
  changeTab: (value: string) => {
    tabValue.value = value
  }
})
</script>
