import { slate, violet } from '@radix-ui/colors'
import { styled, ComponentProps, VariantProps } from '../../stitches.config'

export type ButtonBaseProps = ComponentProps<typeof ButtonBase>
export type ButtonVariants = VariantProps<typeof ButtonBase>

const ButtonBase = styled('button', {
  // resets
  cursor: 'pointer',
  border: 0,
  padding: 0,
  margin: 0,
  outline: 'none',
  textDecoration: 'none',
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontFamily: 'inherit',
  fontWeight: '$medium',
  lineHeight: 1,

  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // overridable locally scoped tokens
  $$bg: '$colors$bg',
  $$border: '$colors$border',
  $$bgHover: '$colors$bgHover',
  $$bgActive: '$colors$bgActive',
  $$borderHover: '$colors$borderHover',
  $$solid: '$colors$solid',
  $$solidHover: '$colors$solidHover',
  $$text: '$colors$loContrast',
  $$textHiContrast: '$colors$hiContrast',

  color: '$$text',

  variants: {
    variant: {
      subtle: {
        bg: '$$bg',
        boxShadow: '0 0 0 1px $$border',

        '&:hover': {
          bg: '$$bgHover',
          boxShadow: '0 0 0 1px $$borderHover',
        },

        '&:active': {
          bg: '$$bgActive',
        },

        '&:disabled': {
          opacity: '50%',
          cursor: 'not-allowed',
        },
      },
      outline: {
        bg: 'transparent',
        boxShadow: '0 0 0 1px $$border',

        '&:hover': {
          bg: '$$bgHover',
          boxShadow: '0 0 0 1px $$borderHover',
        },

        '&:active': {
          bg: '$$bgActive',
        },

        '&:disabled': {
          opacity: '50%',
          cursor: 'not-allowed',
        },
      },
      ghost: {
        boxShadow: 'none',
        bg: 'transparent',

        '&:hover': {
          bg: '$$bgHover',
        },

        '&:active': {
          bg: '$$bgActive',
        },

        '&:disabled': {
          opacity: '50%',
          cursor: 'not-allowed',
        },
      },
      solid: {
        bg: '$$solid',
        color: slate.slate1,

        '&:hover': {
          bg: '$$solidHover',
        },

        '&:disabled': {
          opacity: '50%',
          cursor: 'not-allowed',
        },
      },
    },

    size: {
      xs: {
        px: '10px',
        fontSize: '$xs',
        height: '$7',
      },
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

    // adding soon

    // colorScheme: {
    //   purple: {
    //     $$bg: violet.violet3,
    //     $$bgHover: violet.violet4,
    //     $$bgActive: violet.violet5,
    //     $$border: violet.violet7,
    //     $$borderHover: violet.violet8,
    //     $$solid: violet.violet9,
    //     $$solidHover: violet.violet10,
    //     $$text: violet.violet11,
    //     $$textHiContrast: violet.violet12,
    //   },
    // },

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
    size: 'md',
    rounded: 'md',
  },
})

export interface ButtonProps extends ButtonBaseProps, ButtonVariants {
  children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonBase {...props}>{children}</ButtonBase>
}
