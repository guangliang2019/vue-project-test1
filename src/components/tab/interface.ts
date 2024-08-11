import type { Ref } from 'vue'

export interface TabProps {
  defaultValue: string
}

export interface TabBarItemProps {
  value: string
}

export interface TabBarContentProps {
  value: string
}

export interface TabContext {
  tabValue: Ref<string>
  changeTab: (value: string) => void
}
