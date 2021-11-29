import {
  css,
  styled,
  ComponentProps,
  VariantProps,
} from '../../stitches.config'

export type ContainerProps = ComponentProps<typeof Container>
export type ContainerVariants = VariantProps<typeof Container>

export const Container = styled('div', {
  '& div, p': {
    mx: 'auto',
  },

  variants: {
    maxWidth: {
      default: {
        maxWidth: '60ch',
      },
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

  defaultVariants: {
    maxWidth: 'default',
  },
})
