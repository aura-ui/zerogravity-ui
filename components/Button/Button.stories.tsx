import React from 'react'
import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Button, ButtonProps } from './index'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    rounded: {
      options: ['none', 'xs', 'sm', 'md', 'lg', 'full'],
      control: { type: 'radio' },
    },
  },
  args: {
    disabled: false,
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
)

const Default = Template.bind({})
Default.args = {
  children: 'Sign up',
}

export const Subtle = Template.bind({})
Subtle.args = {
  ...Default.args,
}

export const Outline = Template.bind({})
Outline.args = {
  ...Default.args,
  variant: 'outline',
}

export const Solid = Template.bind({})
Solid.args = {
  ...Default.args,
  variant: 'solid',
}

export const Ghost = Template.bind({})
Ghost.args = {
  ...Default.args,
  variant: 'ghost',
}
