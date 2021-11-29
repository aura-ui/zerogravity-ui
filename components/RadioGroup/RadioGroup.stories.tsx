import React from 'react'
import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Radio, RadioGroup } from './index'
import { violet } from '@radix-ui/colors'

export default {
  title: 'Components/Form/RadioGroup',
  component: RadioGroup,
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
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>{args.children}</RadioGroup>
)

export const Default = Template.bind({})
Default.args = {
  gap: '$2',
  children: (
    <>
      <Radio size="lg" gap="$3" value="default">
        Default
      </Radio>
      <Radio size="lg" gap="$3" value="comfortable">
        Comfortable
      </Radio>
      <Radio size="lg" gap="$3" value="compact">
        Compact
      </Radio>
    </>
  ),
}
