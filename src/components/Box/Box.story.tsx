/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Box } from './Box';

export default {
  title: 'UI/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => {
  return <Box {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'I am universal box',
};

export const WithCssProp = Template.bind({});
WithCssProp.args = {
  children: 'I am universal box',
  css: [
    {
      padding: '0.25rem 0.5rem',
    },
    (theme) => {
      return {
        boxShadow: theme.fn.elevation(1),
      };
    },
  ],
};

export const WithSxProp = Template.bind({});
WithSxProp.args = {
  children: 'I am universal box',
  sx: [
    {
      padding: '0.25rem 0.5rem',
    },
    (theme) => {
      return { boxShadow: theme.fn.elevation(1) };
    },
  ],
};

export const WithCssAndSxProps = Template.bind({});
WithCssAndSxProps.args = {
  children: 'I am universal box',
  css: [
    { transform: 'scale(1.5)' },
    (theme) => {
      return {
        background: theme.sys.color.primaryContainer.hex,
        color: theme.sys.color.onPrimaryContainer.hex,
      };
    }],
  sx: [
    { padding: '0.25rem 0.5rem' },
    (theme) => {
      return {
        boxShadow: theme.fn.elevation(1),
      };
    },
  ],
};
