import React from 'react'
import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Checkbox } from './index'

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
  args: {
    isChecked: false,
    iconSize: '16px',
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const Default = Template.bind({})

export const DefaultChecked = Template.bind({})
DefaultChecked.args = {
  defaultChecked: true,
}
