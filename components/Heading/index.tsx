import {
  css,
  styled,
  ComponentProps,
  VariantProps,
} from '../../stitches.config'

export type HeadingProps = ComponentProps<typeof Heading>
export type HeadingVariants = VariantProps<typeof Heading>

export const heading = css({
  fontFamily: '$body',
  fontWeight: '$bold',
  color: '$hiContrast',

  variants: {
    size: {
      xs: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      sm: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      md: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      lg: {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      xl: {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },
      '2xl': {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },
      '3xl': {
        fontSize: '$5xl',
        lineHeight: '$5xl',
      },
      '4xl': {
        fontSize: '$6xl',
        lineHeight: '$6xl',
      },
      '5xl': {
        fontSize: '$7xl',
        lineHeight: '$7xl',
      },
      '6xl': {
        fontSize: '$8xl',
        lineHeight: '$8xl',
      },
    },
  },

  defaultVariants: {
    size: '4xl',
  },
})

export const Heading = styled('h2', {
  ...heading,
})
