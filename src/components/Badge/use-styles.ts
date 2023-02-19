import { CSSObject, Interpolation } from '@emotion/react';
import { ColorName, EnvieTheme } from '@envie/theme';
import { RequiredKeys } from '@envie/utilities';
import { BadgeProps } from './Badge.types';

const getColorNames = (color: BadgeProps['color']): {
  background: ColorName
  color: ColorName
} => {
  switch (color) {
    case 'primary': return {
      background: 'primary',
      color: 'onPrimary',
    };
    case 'primary-container': return {
      background: 'primaryContainer',
      color: 'onPrimaryContainer',
    };
    case 'secondary': return {
      background: 'secondary',
      color: 'onSecondary',
    };
    case 'secondary-container': return {
      background: 'secondaryContainer',
      color: 'onSecondaryContainer',
    };
    case 'tertiary': return {
      background: 'tertiary',
      color: 'onTertiary',
    };
    case 'tertiary-container': return {
      background: 'tertiaryContainer',
      color: 'onTertiaryContainer',
    };
    case 'success': return {
      background: 'success',
      color: 'onSuccess',
    };
    case 'success-container': return {
      background: 'successContainer',
      color: 'onSuccessContainer',
    };
    case 'warning': return {
      background: 'warning',
      color: 'onWarning',
    };
    case 'warning-container': return {
      background: 'warningContainer',
      color: 'onWarningContainer',
    };
    case 'error': return {
      background: 'error',
      color: 'onError',
    };
    case 'error-container': return {
      background: 'errorContainer',
      color: 'onErrorContainer',
    };
    case 'info': return {
      background: 'info',
      color: 'onInfo',
    };
    case 'info-container': return {
      background: 'infoContainer',
      color: 'onInfoContainer',
    };
    default: throw new Error('invalid color');
  }
};

const getSizeStyles = (size: BadgeProps['size']): CSSObject => {
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
  return (theme) => {
    const colorNames = getColorNames(color);
    const sizeStyles = getSizeStyles(size);

    return {
      background: theme.sys.color[colorNames.background].hex,
      color: theme.sys.color[colorNames.color].hex,
      ...sizeStyles,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.sys.shape.full,
    };
  };
};
