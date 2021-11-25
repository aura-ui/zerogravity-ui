import { css, styled, ComponentProps, VariantProps } from '../stitches.config'

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
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Text = styled('p', {
  ...text,
})
