import { BoxProps } from '../Box';

export type FabProps = {
  size?: 'small' | 'medium' | 'large'
  color?: 'surface'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  lowered?: boolean
  children: React.ReactNode
} & BoxProps;
