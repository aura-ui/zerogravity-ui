import React from 'react'
import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { IconButton, IconButtonProps } from './index'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default {
  title: 'Components/Form/IconButton',
  component: IconButton,
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
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

const Default = Template.bind({})
Default.args = {
  icon: <MagnifyingGlassIcon />,
  label: 'Search',
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
