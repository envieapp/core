import React from 'react';
import { Component } from '../types';

export const createPolymorphicComponent = <
E extends React.ElementType,
P extends Record<string, unknown> = {},
S extends Record<string, unknown> = {},
>(component: unknown) => {
  return component as Component<E, P, S>;
};
