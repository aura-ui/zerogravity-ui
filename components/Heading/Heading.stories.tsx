import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Heading } from './index'

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

export const Heading6xl: React.VFC<{}> = () => (
  <Heading size="6xl">Welcome to zerogravity</Heading>
)

export const Heading5xl: React.VFC<{}> = () => (
  <Heading size="5xl">Welcome to zerogravity</Heading>
)

export const Heading4xl: React.VFC<{}> = () => (
  <Heading size="4xl">Welcome to zerogravity</Heading>
)

export const Heading3xl: React.VFC<{}> = () => (
  <Heading size="3xl">Welcome to zerogravity</Heading>
)

export const Heading2xl: React.VFC<{}> = () => (
  <Heading size="2xl">Welcome to zerogravity</Heading>
)

export const HeadingXl: React.VFC<{}> = () => (
  <Heading size="xl">Welcome to zerogravity</Heading>
)

export const HeadingLg: React.VFC<{}> = () => (
  <Heading size="lg">Welcome to zerogravity</Heading>
)

export const HeadingMd: React.VFC<{}> = () => (
  <Heading size="md">Welcome to zerogravity</Heading>
)

export const HeadingSm: React.VFC<{}> = () => (
  <Heading size="sm">Welcome to zerogravity</Heading>
)

export const HeadingXs: React.VFC<{}> = () => (
  <Heading size="xs">Welcome to zerogravity</Heading>
)
