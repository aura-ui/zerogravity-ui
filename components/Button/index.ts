import {
  css,
  styled,
  ComponentProps,
  VariantProps,
} from '../../stitches.config'

export type ButtonProps = ComponentProps<typeof Button>
export type ButtonVariants = VariantProps<typeof Button>

export const Button = styled('button', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  fontFamily: 'inherit',
  fontWeight: '$semibold',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  variants: {
    variant: {
      subtle: {
        boxShadow: 'none',
      },
      outline: {
        bg: 'transparent',
      },
      ghost: {
        boxShadow: 'none',
        bg: 'transparent',
      },
      solid: {
        bg: '$solid',
        color: '$hiContrast',
      },
    },

    colorScheme: {
      default: {
        bg: '$bg',
        boxShadow: '0 0 0 1px var(--colors-bg)',
        color: '$loContrast',
      },
    },

    size: {
      sm: {
        px: '$3',
        fontSize: '$sm',
        height: '$8',
      },
      md: {
        px: '$4',
        fontSize: '$md',
        height: '$10',
      },
      lg: {
        px: '$6',
        fontSize: '$lg',
        height: '$12',
      },
    },

    rounded: {
      none: {
        br: '0px',
      },
      xs: {
        br: '$xs',
      },
      sm: {
        br: '$sm',
      },
      md: {
        br: '$md',
      },
      lg: {
        br: '$lg',
      },
      full: {
        br: '$full',
      },
    },
  },

  defaultVariants: {
    variant: 'subtle',
    colorScheme: 'default',
    size: 'md',
    rounded: 'md',
  },
})
