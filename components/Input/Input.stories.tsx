import React from 'react'
import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Input } from './index'

export default {
  title: 'Components/Form/Input',
  component: Input,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
  args: {
    disabled: false,
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'First name',
}

export const Ghost = Template.bind({})
Ghost.args = {
  ...Default.args,
  variant: 'ghost',
}
