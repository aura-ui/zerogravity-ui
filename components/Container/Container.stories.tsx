import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Container } from './index'
import { Text } from '../Text'
import aboutUs from '../../utils/data/about.json'

export default {
  title: 'Components/Layout/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: <Text>{aboutUs.text}</Text>,
}
