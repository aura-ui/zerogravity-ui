import {
  css,
  styled,
  ComponentProps,
  VariantProps,
} from '../../stitches.config'

export type TextProps = ComponentProps<typeof Text>
export type TextVariants = VariantProps<typeof Text>

export const text = css({
  fontFamily: '$body',
  fontWeight: 'normal',
  color: '$hiContrast',

  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs',
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      md: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },
      '4xl': {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },
      '5xl': {
        fontSize: '$5xl',
        lineHeight: '$5xl',
      },
      '6xl': {
        fontSize: '$6xl',
        lineHeight: '$6xl',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Text = styled('p', {
  ...text,
})
