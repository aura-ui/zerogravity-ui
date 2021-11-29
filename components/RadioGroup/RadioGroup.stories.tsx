import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Radio, RadioGroup } from './index'

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

export const Solid = Template.bind({})
Solid.args = {
  gap: '$2',
  children: (
    <>
      <Radio variant="solid" size="lg" gap="$3" value="default">
        Default
      </Radio>
      <Radio variant="solid" size="lg" gap="$3" value="comfortable">
        Comfortable
      </Radio>
      <Radio variant="solid" size="lg" gap="$3" value="compact">
        Compact
      </Radio>
    </>
  ),
}

export const defaultWithColorScheme = Template.bind({})
defaultWithColorScheme.args = {
  gap: '$2',
  children: (
    <>
      <Radio colorScheme="blue" size="lg" gap="$3" value="default">
        Default
      </Radio>
      <Radio colorScheme="blue" size="lg" gap="$3" value="comfortable">
        Comfortable
      </Radio>
      <Radio colorScheme="blue" size="lg" gap="$3" value="compact">
        Compact
      </Radio>
    </>
  ),
}

export const solidWithColorScheme = Template.bind({})
solidWithColorScheme.args = {
  gap: '$2',
  children: (
    <>
      <Radio
        colorScheme="blue"
        variant="solid"
        size="lg"
        gap="$3"
        value="default"
      >
        Default
      </Radio>
      <Radio
        colorScheme="blue"
        variant="solid"
        size="lg"
        gap="$3"
        value="comfortable"
      >
        Comfortable
      </Radio>
      <Radio
        colorScheme="blue"
        variant="solid"
        size="lg"
        gap="$3"
        value="compact"
      >
        Compact
      </Radio>
    </>
  ),
}
