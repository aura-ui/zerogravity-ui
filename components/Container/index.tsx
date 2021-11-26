import {
  css,
  styled,
  ComponentProps,
  VariantProps,
} from '../../stitches.config'

export type ContainerProps = ComponentProps<typeof Container>
export type ContainerVariants = VariantProps<typeof Container>

const Container = styled('div', {
  variants: {
    maxW: {
      xs: {
        maxWidth: '$xs',
      },
      sm: {
        maxWidth: '$sm',
      },
      md: {
        maxWidth: '$md',
      },
      lg: {
        maxWidth: '$lg',
      },
      xl: {
        maxWidth: '$xl',
      },
      '2xl': {
        maxWidth: '$2xl',
      },
      '3xl': {
        maxWidth: '$3xl',
      },
      '4xl': {
        maxWidth: '$4xl',
      },
      '5xl': {
        maxWidth: '$5xl',
      },
    },
    centerContent: {
      true: {
        display: 'grid',
        placeItems: 'center',
      },
    },
  },
})
