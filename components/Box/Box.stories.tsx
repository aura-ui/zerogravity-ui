import { ComponentMeta } from '@storybook/react'
import { Box } from './index'

export default {
  title: 'Components/Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>

export const Basic = () => <Box css={{ boxSize: '$32', bg: '$solid' }} />

export const FullWidth = () => (
  <Box css={{ width: '100%', height: '$32', bg: '$solid' }} />
)
