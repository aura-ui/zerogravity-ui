import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Basic as BoxBasic } from '../Box/Box.stories'
import { Flex } from './index'

export default {
  title: 'Components/Layout/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>{args.children}</Flex>
)

export const Basic = Template.bind({})
Basic.args = {
  css: { gap: '$4' },
  children: (
    <>
      <BoxBasic />
      <BoxBasic />
    </>
  ),
}

export const SpaceBetween = Template.bind({})
SpaceBetween.args = {
  ...Basic.args,
  css: { width: '100%' },
  space: 'between',
}

export const Vertical = Template.bind({})
Vertical.args = {
  ...SpaceBetween.args,
  css: { height: '100%' },
  direction: 'column',
}
