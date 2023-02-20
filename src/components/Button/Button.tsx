import React from 'react';
import { block } from '@envie/bem';
import { cn } from '@envie/clsx';
import { PolymorphicProps } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Box } from '../Box';
import { ButtonProps } from './Button.types';
import { Typography } from '../Typography';
import { useStyles } from './use-styles';

const _defaultElement: React.ElementType = 'button';
type DefaultElement = typeof _defaultElement;
type HTML = HTMLElementTagNameMap[DefaultElement];
type Props = PolymorphicProps<DefaultElement, ButtonProps>;

const _Button = React.forwardRef<HTML, Props>((
  {
    variant = 'elevated',
    color = 'primary',
    startIcon,
    endIcon,
    className,
    children,
    css,
    ...rest
  },
  ref,
) => {
  const button = block('button', {
    variant,
    color,
    'with-start-icon': Boolean(startIcon),
    'with-end-icon': Boolean(endIcon),
  });
  const stateLayer = button('state-layer');
  const label = button('label');
  const { containerStyles, stateLayerStyles, labelStyles } = useStyles({
    variant,
    color,
    startIcon,
    endIcon,
    ...rest,
  });

  return (
    <Box
      as={_defaultElement}
      {...rest}
      className={cn(button(), className)}
      ref={ref}
      css={[containerStyles, css]}
    >
      {startIcon}
      <Typography
        variant="label"
        size="large"
        className={cn(label)}
        css={labelStyles}
      >
        {children}
      </Typography>
      {endIcon}
      <Box className={cn(stateLayer)} css={stateLayerStyles} />
    </Box>
  );
});

_Button.displayName = 'Button';

export const Button = createPolymorphicComponent<DefaultElement, ButtonProps>(_Button);
