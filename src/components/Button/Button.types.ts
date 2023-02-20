import React from 'react';
import { BoxProps } from '../Box';

export type ButtonProps = {
  variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
} & BoxProps;
