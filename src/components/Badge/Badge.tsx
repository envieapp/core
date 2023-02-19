import React from 'react';
import { block } from '@envie/bem';
import { cn } from '@envie/clsx';
import { PolymorphicProps } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { useStyles } from './use-styles';
import { BadgeProps } from './Badge.types';

const _defaultElement: React.ElementType = 'div';
type DefaultElement = typeof _defaultElement;
type HTML = HTMLElementTagNameMap[DefaultElement];
type Props = PolymorphicProps<DefaultElement, BadgeProps>;

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
  const styles = useStyles({ size, color });

  return (
    <Box
      as={_defaultElement}
      {...rest}
      className={cn(badge(), className)}
      ref={ref}
      css={[styles, css]}
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
