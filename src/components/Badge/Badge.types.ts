import { BoxProps } from '../Box';

export type BadgeProps = {
  size?: 'small' | 'large-single' | 'large-multiple'
  color?: 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'primary-container'
  | 'secondary-container'
  | 'tertiary-container'
  | 'success-container'
  | 'warning-container'
  | 'error-container'
  | 'info-container'
  label?: number
  labelMaxSuffix?: string
  max?: number
  children?: never
} & BoxProps;
