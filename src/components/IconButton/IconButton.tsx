import React from 'react';
import { block } from '@envie/bem';
import { cn } from '@envie/clsx';
import { PolymorphicProps } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Box } from '../Box';
import { IconButtonProps } from './IconButton.types';
import { useStyles } from './use-styles';

const _defaultElement: React.ElementType = 'button';
type DefaultElement = typeof _defaultElement;
type HTML = HTMLElementTagNameMap[DefaultElement];
type Props = PolymorphicProps<DefaultElement, IconButtonProps>;

const _IconButton = React.forwardRef<HTML, Props>((
  {
    variant = 'standard',
    color = 'primary',
    selected = false,
    className,
    css,
    children,
    ...rest
  },
  ref,
) => {
  const iconButton = block('icon-button', {
    variant,
    color,
    selected,
  });
  const styles = useStyles({
    variant, color, children, selected,
  });

  return (
    <Box
      as={_defaultElement}
      {...rest}
      className={cn(iconButton(), className)}
      ref={ref}
      css={[styles, css]}
    >
      {children}
    </Box>
  );
});

_IconButton.displayName = 'IconButton';

export const IconButton = createPolymorphicComponent<DefaultElement, IconButtonProps>(_IconButton);
