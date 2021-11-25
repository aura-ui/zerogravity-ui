import { styled, ComponentProps } from '../stitches.config'

export type FlexProps = ComponentProps<typeof Flex>

export const Flex = styled('div', {
  display: 'flex',
})
