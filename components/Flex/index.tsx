import { styled, ComponentProps, VariantProps } from '../../stitches.config'

export type FlexProps = ComponentProps<typeof Flex>
export type FlexVariants = VariantProps<typeof Flex>

export const Flex = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      column: {
        flexDirection: 'column',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },

    space: {
      even: {
        justifyContent: 'space-evenly',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
  },
})
