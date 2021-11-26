import { styled, ComponentProps } from '../../stitches.config'

export type AutoLayoutProps = ComponentProps<typeof AutoLayout>

export const AutoLayout = styled('div', {
  display: 'flex',

  variants: {
    distribution: {
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceAround: {
        justifyContent: 'space-evenly',
      },
      packed: {
        justifyContent: 'start',
      },
    },
    alignment: {
      left: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      right: {
        alignItems: 'end',
      },
    },
  },
})
