import { CSSObject, Interpolation } from '@emotion/react';
import { ColorName, EnvieTheme } from '@envie/theme';
import { RequiredKeys } from '@envie/utilities';
import { BadgeProps } from './Badge.types';

const useColors = (color: BadgeProps['color']): {
  background: ColorName
  foreground: ColorName
} => {
  switch (color) {
    case 'primary': return {
      background: 'primary',
      foreground: 'onPrimary',
    };
    case 'primary-container': return {
      background: 'primaryContainer',
      foreground: 'onPrimaryContainer',
    };
    case 'secondary': return {
      background: 'secondary',
      foreground: 'onSecondary',
    };
    case 'secondary-container': return {
      background: 'secondaryContainer',
      foreground: 'onSecondaryContainer',
    };
    case 'tertiary': return {
      background: 'tertiary',
      foreground: 'onTertiary',
    };
    case 'tertiary-container': return {
      background: 'tertiaryContainer',
      foreground: 'onTertiaryContainer',
    };
    case 'success': return {
      background: 'success',
      foreground: 'onSuccess',
    };
    case 'success-container': return {
      background: 'successContainer',
      foreground: 'onSuccessContainer',
    };
    case 'warning': return {
      background: 'warning',
      foreground: 'onWarning',
    };
    case 'warning-container': return {
      background: 'warningContainer',
      foreground: 'onWarningContainer',
    };
    case 'error': return {
      background: 'error',
      foreground: 'onError',
    };
    case 'error-container': return {
      background: 'errorContainer',
      foreground: 'onErrorContainer',
    };
    case 'info': return {
      background: 'info',
      foreground: 'onInfo',
    };
    case 'info-container': return {
      background: 'infoContainer',
      foreground: 'onInfoContainer',
    };
    default: throw new Error('invalid color');
  }
};

const useSizes = (size: BadgeProps['size']): CSSObject => {
  switch (size) {
    case 'small': return {
      width: '0.375rem',
      height: '0.375rem',
    };
    case 'large-single': return {
      width: '1rem',
      height: '1rem',
    };
    case 'large-multiple': return {
      height: '1rem',
      paddingLeft: '0.25rem',
      paddingRight: '0.25rem',
    };
    default: throw new Error('invalid size');
  }
};

export const useStyles = (
  {
    color,
    size,
  }: RequiredKeys<BadgeProps, 'color' | 'size'>,
): Interpolation<EnvieTheme> => {
  const { background, foreground } = useColors(color);
  const sizes = useSizes(size);
  return (theme) => {
    return {
      ...sizes,
      background: theme.sys.color[background].hex,
      color: theme.sys.color[foreground].hex,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.sys.shape.full,
    };
  };
};
