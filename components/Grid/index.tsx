import { styled, ComponentProps } from '../../stitches.config'

export type GridProps = ComponentProps<typeof Grid>

export const Grid = styled('div', {
  display: 'grid',
})
