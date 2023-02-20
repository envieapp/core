import React from 'react';
import { BoxProps } from '../Box';

export type IconButtonProps = {
  variant?: 'standard' | 'filled' | 'tonal' | 'outlined'
  color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info'
  selected?: boolean
  children: React.ReactNode
} & BoxProps;
