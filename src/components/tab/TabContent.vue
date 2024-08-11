<template>
  <span v-if="value === tabValue">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { useTabContext } from './context'
import type { TabBarContentProps } from './interface'

const { value } = defineProps<TabBarContentProps>()

const { tabValue } = useTabContext()
</script>
