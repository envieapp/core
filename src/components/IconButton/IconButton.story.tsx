/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { IconButton } from './IconButton';
import { Box } from '../Box';

const icon = (
  <svg width={24} height={24} focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </svg>
);

const filledIcon = (
  <svg width={24} height={24} focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />
  </svg>
);

export default {
  title: 'UI/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return (
    <Box css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        marginRight: '1rem',
      },
      '& > *:last-child': {
        marginRight: '0',
      },
    }}
    >
      <IconButton {...args}>
        {icon}
      </IconButton>
      <IconButton {...args} selected>
        {filledIcon}
      </IconButton>
      <IconButton {...args} disabled>
        {icon}
      </IconButton>
      <IconButton {...args} selected disabled>
        {filledIcon}
      </IconButton>
    </Box>
  );
};

export const Default = Template.bind({});

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};

export const Tonal = Template.bind({});
Tonal.args = {
  variant: 'tonal',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};
