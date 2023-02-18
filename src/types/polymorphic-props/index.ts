import React from 'react';
import { AsProp } from '../as-prop';

export type PolymorphicProps<
  Element extends React.ElementType,
  Props extends Record<string, unknown> = {},
> = Props & Omit<React.ComponentProps<Element>, keyof Props> & AsProp<Element>;

export type PolymorphicRef<Element extends React.ElementType> =
  React.ComponentProps<Element>['ref'];

export type PolymorphicPropsWithRef<
  Element extends React.ElementType,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props extends Record<string, unknown> = {},
> = Props &
Omit<React.ComponentPropsWithRef<Element>, keyof Props> &
AsProp<Element>;
