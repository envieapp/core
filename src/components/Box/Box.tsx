import React from 'react';
import { DefaultProps, PolymorphicProps, SystemProps } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { extractSystemProps } from './extractSystemProps';

export type BoxProps = SystemProps & DefaultProps;

const _defaultElement: React.ElementType = 'div';
type DefaultElement = typeof _defaultElement;
type HTML = HTMLElementTagNameMap[DefaultElement];
type Props = PolymorphicProps<DefaultElement, BoxProps>;

const _Box = React.forwardRef<HTML, Props>((
  {
    as: AsProp,
    sx,
    css,
    ...others
  },
  ref,
) => {
  const Component = AsProp || _defaultElement;
  const { systemStyles, rest } = extractSystemProps(others);
  return (
    <Component
      {...rest}
      ref={ref}
      css={[systemStyles, css, sx]}
    />
  );
});

export const Box = createPolymorphicComponent<DefaultElement, BoxProps>(_Box);
