export interface HelloWorldProps {
  msg: string
}

export interface MyButton {
  onClick: () => void
  variant?: VariantType
  size?: SizeType
  disabled?: boolean

  [key: string]: any
}

type VariantType = 'primary' | 'secondary' | 'text'
type SizeType = 'small' | 'medium' | 'large'
