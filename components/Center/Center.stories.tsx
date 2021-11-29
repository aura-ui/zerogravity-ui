import { ComponentMeta } from '@storybook/react'
import { Center } from './index'

export default {
  title: 'Components/Layout/Center',
  component: Center,
} as ComponentMeta<typeof Center>

const Child = () => (
  <Center css={{ boxSize: '$16', bg: '$solid', color: '$hiContrast' }}>
    Child
  </Center>
)

export const Basic = () => (
  <Center css={{ boxSize: '$32', p: '$8', bg: '$bg' }}>
    <Child />
  </Center>
)
