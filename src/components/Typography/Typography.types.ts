import { TypescaleName, TypescaleSize } from '@envie/theme';
import { BoxProps } from '../Box';

export type TypographyProps = {
  variant?: TypescaleName,
  size?: TypescaleSize
} & BoxProps;
