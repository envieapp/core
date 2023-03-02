import React from 'react';
import { block } from '@envie/bem';
import { cn } from '@envie/clsx';
import { PolymorphicProps } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Box } from '../Box';
import { FabProps } from './Fab.types';
import { useStyles } from './use-styles';

const _defaultElement: React.ElementType = 'button';
type DefaultElement = typeof _defaultElement;
type HTML = HTMLElementTagNameMap[DefaultElement];
type Props = PolymorphicProps<DefaultElement, FabProps>;

const _Fab = React.forwardRef<HTML, Props>((
  {
    size = 'medium',
    color = 'surface',
    lowered = false,
    className,
    css,
    children,
    ...rest
  },
  ref,
) => {
  const fab = block('fab', {
    size,
    color,
    lowered,
  });
  const styles = useStyles({
    size, color, lowered, children,
  });

  return (
    <Box
      as={_defaultElement}
      {...rest}
      className={cn(fab(), className)}
      ref={ref}
      css={[styles, css]}
    >
      {children}
    </Box>
  );
});

_Fab.displayName = 'Fab';

export const Fab = createPolymorphicComponent<DefaultElement, FabProps>(_Fab);
