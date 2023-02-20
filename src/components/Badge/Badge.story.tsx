/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Badge } from './Badge';
import { Box } from '../Box';

export default {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
  return <Badge {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 3,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const LargeSingle = Template.bind({});
LargeSingle.args = {
  size: 'large-single',
  label: 3,
};

export const LargeMultiple = Template.bind({});
LargeMultiple.args = {
  size: 'large-multiple',
  label: 1000,
};

const AllColorsTemplate: ComponentStory<typeof Badge> = (args) => {
  return (
    <Box sx={
      {
        display: 'grid',
        gridTemplateColumns: '1fr  1fr',
        gap: '0.5rem',
      }
  }
    >
      <Badge {...args} color="primary" />
      <Badge {...args} color="primary-container" />
      <Badge {...args} color="secondary" />
      <Badge {...args} color="secondary-container" />
      <Badge {...args} color="tertiary" />
      <Badge {...args} color="tertiary-container" />
      <Badge {...args} color="success" />
      <Badge {...args} color="success-container" />
      <Badge {...args} color="warning" />
      <Badge {...args} color="warning-container" />
      <Badge {...args} color="error" />
      <Badge {...args} color="error-container" />
      <Badge {...args} color="info" />
      <Badge {...args} color="info-container" />
    </Box>
  );
};

export const AllColors = AllColorsTemplate.bind({});
AllColors.args = {
  size: 'small',
  label: 3,
};
