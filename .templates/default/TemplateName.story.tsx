/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TemplateName } from './TemplateName';

export default {
  title: 'UI/TemplateName',
  component: TemplateName,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof TemplateName>;

const Template: ComponentStory<typeof TemplateName> = (args) => {
  return <TemplateName {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'TemplateName',
};
