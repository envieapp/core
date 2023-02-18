import React from 'react';
import { TypescaleName, TypescaleSize } from '@envie/theme';
import { PolymorphicProps } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Box, BoxProps } from '../Box';

export type TypographyProps = {
  variant?: TypescaleName,
  size?: TypescaleSize
} & BoxProps;

const _defaultElement: React.ElementType = 'p';
type DefaultElement = typeof _defaultElement;
type HTML = HTMLElementTagNameMap[DefaultElement];
type Props = PolymorphicProps<DefaultElement, TypographyProps>;

const _Typography = React.forwardRef<HTML, Props>((
  {
    css, variant = 'body', size = 'large', ...rest
  },
  ref,
) => {
  return (
    <Box
      as={_defaultElement}
      {...rest}
      ref={ref}
      css={[
        (theme) => {
          const typescale = theme.sys.typescale[variant][size];
          return {
            fontFamily: typescale.fontFamily.join(','),
            fontStyle: typescale.fontStyle,
            fontSize: typescale.fontSize,
            fontWeight: typescale.fontWeight,
            letterSpacing: typescale.letterSpacing,
            lineHeight: typescale.lineHeight,
          };
        },
        css,
      ]}
    />
  );
});

_Typography.displayName = 'Typography';

export const Typography = createPolymorphicComponent<DefaultElement, TypographyProps>(_Typography);
