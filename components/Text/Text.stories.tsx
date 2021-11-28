import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from './index'

export default {
  title: 'Components/Typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>

export const Text6xl: React.VFC<{}> = () => (
  <Text size="6xl">Welcome to zerogravity</Text>
)

export const Text5xl: React.VFC<{}> = () => (
  <Text size="5xl">Welcome to zerogravity</Text>
)

export const Text4xl: React.VFC<{}> = () => (
  <Text size="4xl">Welcome to zerogravity</Text>
)

export const Text3xl: React.VFC<{}> = () => (
  <Text size="3xl">Welcome to zerogravity</Text>
)

export const Text2xl: React.VFC<{}> = () => (
  <Text size="2xl">Welcome to zerogravity</Text>
)

export const TextXl: React.VFC<{}> = () => (
  <Text size="xl">Welcome to zerogravity</Text>
)

export const TextLg: React.VFC<{}> = () => (
  <Text size="lg">Welcome to zerogravity</Text>
)

export const TextMd: React.VFC<{}> = () => (
  <Text size="md">Welcome to zerogravity</Text>
)

export const TextSm: React.VFC<{}> = () => (
  <Text size="sm">Welcome to zerogravity</Text>
)

export const TextXs: React.VFC<{}> = () => (
  <Text size="xs">Welcome to zerogravity</Text>
)
