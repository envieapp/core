import React from 'react';
import { block } from '@envie/bem';
import { cn } from '@envie/clsx';
import { PolymorphicProps } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Box } from '../Box';
import { TypographyProps } from './Typography.types';
import { useStyles } from './use-styles';

const _defaultElement: React.ElementType = 'p';
type DefaultElement = typeof _defaultElement;
type HTML = HTMLElementTagNameMap[DefaultElement];
type Props = PolymorphicProps<DefaultElement, TypographyProps>;

const _Typography = React.forwardRef<HTML, Props>((
  {
    variant = 'body',
    size = 'large',
    className,
    css,
    ...rest
  },
  ref,
) => {
  const typography = block('typography', {
    variant,
    size,
  });
  const styles = useStyles({ variant, size });

  return (
    <Box
      as={_defaultElement}
      {...rest}
      className={cn(typography(), className)}
      ref={ref}
      css={[styles, css]}
    />
  );
});

_Typography.displayName = 'Typography';

export const Typography = createPolymorphicComponent<DefaultElement, TypographyProps>(_Typography);
