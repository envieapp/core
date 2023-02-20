/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { Box } from '../Box';

const startIcon = (
  <svg width={18} height={18} focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </svg>
);

const endIcon = (
  <svg width={18} height={18} focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
  </svg>
);

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Box css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        marginRight: '1.5rem',
      },
      '& > *:last-child': {
        marginRight: '0',
      },
    }}
    >
      <Button {...args} />
      <Button {...args} startIcon={startIcon} />
      <Button {...args} endIcon={endIcon} />
      <Button {...args} startIcon={startIcon} endIcon={endIcon} />
      <Button {...args} startIcon={startIcon} endIcon={endIcon} disabled />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Elevated = Template.bind({});
Elevated.args = {
  variant: 'elevated',
  children: 'Button',
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  children: 'Button',
};

export const Tonal = Template.bind({});
Tonal.args = {
  variant: 'tonal',
  children: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'Button',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  children: 'Button',
};
