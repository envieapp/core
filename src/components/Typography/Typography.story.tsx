/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => {
  return <Typography {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Typography',
};

export const DisplayLarge = Template.bind({});
DisplayLarge.args = {
  variant: 'display',
  size: 'large',
  children: 'Display Large',
};

export const DisplayMedium = Template.bind({});
DisplayMedium.args = {
  variant: 'display',
  size: 'medium',
  children: 'Display Medium',
};

export const DisplaySmall = Template.bind({});
DisplaySmall.args = {
  variant: 'display',
  size: 'small',
  children: 'Display Small',
};

export const HeadlineLarge = Template.bind({});
HeadlineLarge.args = {
  variant: 'headline',
  size: 'large',
  children: 'Headline Large',
};

export const HeadlineMedium = Template.bind({});
HeadlineMedium.args = {
  variant: 'headline',
  size: 'medium',
  children: 'Headline Medium',
};

export const HeadlineSmall = Template.bind({});
HeadlineSmall.args = {
  variant: 'headline',
  size: 'small',
  children: 'Headline Small',
};

export const TitleLarge = Template.bind({});
TitleLarge.args = {
  variant: 'title',
  size: 'large',
  children: 'Title Large',
};

export const TitleMedium = Template.bind({});
TitleMedium.args = {
  variant: 'title',
  size: 'medium',
  children: 'Title Medium',
};

export const TitleSmall = Template.bind({});
TitleSmall.args = {
  variant: 'title',
  size: 'small',
  children: 'Title Small',
};

export const LabelLarge = Template.bind({});
LabelLarge.args = {
  variant: 'label',
  size: 'large',
  children: 'Label Large',
};

export const LabelMedium = Template.bind({});
LabelMedium.args = {
  variant: 'label',
  size: 'medium',
  children: 'Label Medium',
};

export const LabelSmall = Template.bind({});
LabelSmall.args = {
  variant: 'label',
  size: 'small',
  children: 'Label Small',
};

export const BodyLarge = Template.bind({});
BodyLarge.args = {
  variant: 'body',
  size: 'large',
  children: 'Body Large',
};

export const BodyMedium = Template.bind({});
BodyMedium.args = {
  variant: 'body',
  size: 'medium',
  children: 'Body Medium',
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  variant: 'body',
  size: 'small',
  children: 'Body Small',
};
