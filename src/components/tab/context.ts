import { inject } from 'vue'
import type { TabContext } from './interface'

export const TabInjectionKey = Symbol('tab')

export const useTabContext = () => {
  const context = inject<TabContext>(TabInjectionKey)
  console.log(context, 'context')
  if (context === undefined) {
    throw new Error('TabBarItem & TabContent must be used inside Tab')
  }
  return context
}
