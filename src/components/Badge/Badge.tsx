import React from 'react';
import { block } from '@envie/bem';
import { cn } from '@envie/clsx';
import { ColorName } from '@envie/theme';
import { CSSObject } from '@emotion/react';
import { PolymorphicProps } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Box, BoxProps } from '../Box';
import { Typography } from '../Typography';

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

const _defaultElement: React.ElementType = 'div';
type DefaultElement = typeof _defaultElement;
type HTML = HTMLElementTagNameMap[DefaultElement];
type Props = PolymorphicProps<DefaultElement, BadgeProps>;

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

const getCurrentLabel = (label: number | undefined, labelMaxSuffix: string, max: number) => {
  if (label === undefined) return '';
  if (max < label) {
    return `${max}${labelMaxSuffix}`;
  }
  return `${label}`;
};

const _Badge = React.forwardRef<HTML, Props>((
  {
    size = 'small',
    color = 'primary',
    labelMaxSuffix = '+',
    max = 999,
    label,
    className,
    css,
    ...rest
  },
  ref,
) => {
  const badge = block('badge', {
    size,
    color,
  });
  const badgeLabel = badge('label');

  return (
    <Box
      as={_defaultElement}
      {...rest}
      className={cn(badge(), className)}
      ref={ref}
      css={[
        (theme) => {
          const colorNames = getColorNames(color);
          const sizeStyles = getSizeStyles(size);
          return {
            background: theme.sys.color[colorNames.background].hex,
            color: theme.sys.color[colorNames.color].hex,
            ...sizeStyles,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
          };
        },
        css,
      ]}
    >
      {size !== 'small'
        ? (
          <Typography as="span" variant="label" size="small" className={cn(badgeLabel)}>
            {getCurrentLabel(label, labelMaxSuffix, max)}
          </Typography>
        )
        : null}
    </Box>
  );
});

_Badge.displayName = 'Badge';

export const Badge = createPolymorphicComponent<DefaultElement, BadgeProps>(_Badge);
