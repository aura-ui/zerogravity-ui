import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AspectRatio } from './index'
import { styled } from 'stitches.config'

export default {
  title: 'Components/Layout/AspectRatio',
  component: AspectRatio,
} as ComponentMeta<typeof AspectRatio>

const Template: ComponentStory<typeof AspectRatio> = (args) => (
  <AspectRatio {...args} />
)

const Image = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
})

export const defaultRatio = Template.bind({})
defaultRatio.args = {
  children: (
    <Image
      src={`https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=300&dpr=2&q=80`}
      alt="3D Render by Sebastian Svenson"
    />
  ),
}

export const WideRatio = Template.bind({})
WideRatio.args = {
  ratio: 16 / 9,
  children: (
    <Image
      src={`https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=300&dpr=2&q=80`}
      alt="3D Render by Sebastian Svenson"
    />
  ),
}

export const WideCustomWidth = Template.bind({})
WideCustomWidth.args = {
  ratio: 16 / 9,
  maxWidth: 600,
  children: (
    <Image
      src={`https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=300&dpr=2&q=80`}
      alt="3D Render by Sebastian Svenson"
    />
  ),
}
