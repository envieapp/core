import React from 'react';
import { PolymorphicProps } from '../polymorphic-props';

export type Component<
  Element extends React.ElementType,
  Props extends Record<string, unknown> = {},
  Static extends Record<string, unknown> = {},
> = (<E extends React.ElementType = Element>(
  props: PolymorphicProps<E, Props>
) => React.ReactElement | null) & Static;
