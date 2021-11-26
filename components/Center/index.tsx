import { styled, ComponentProps } from '../../stitches.config'

export type CenterProps = ComponentProps<typeof Center>

export const Center = styled('div', {
  display: 'grid',
  placeItems: 'center',
})
