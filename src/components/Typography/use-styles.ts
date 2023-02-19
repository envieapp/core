import { Interpolation } from '@emotion/react';
import { EnvieTheme } from '@envie/theme';
import { RequiredKeys } from '@envie/utilities';
import { TypographyProps } from './Typography.types';

export const useStyles = (
  {
    variant,
    size,
  }: RequiredKeys<TypographyProps, 'variant' | 'size'>,
): Interpolation<EnvieTheme> => {
  return (theme) => {
    const typescale = theme.sys.typescale[variant][size];
    return {
      fontFamily: typescale.fontFamily.join(','),
      fontStyle: typescale.fontStyle,
      fontSize: typescale.fontSize,
      fontWeight: typescale.fontWeight,
      letterSpacing: typescale.letterSpacing,
      lineHeight: typescale.lineHeight,
    };
  };
};
