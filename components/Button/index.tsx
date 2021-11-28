import { defaultColors } from '@/styles/colors'
import { resets } from '@/styles/resets/button'
import { slate } from '@radix-ui/colors'
import { styled, ComponentProps, VariantProps } from '../../stitches.config'

export type ButtonBaseProps = ComponentProps<typeof ButtonBase>
export type ButtonVariants = VariantProps<typeof ButtonBase>

const ButtonBase = styled('button', {
  ...resets,

  // overridable locally scoped tokens
  ...defaultColors,

  color: defaultColors.$$text,

  '&:disabled': {
    pointerEvents: 'none',
    opacity: '50%',
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      subtle: {
        bg: '$$bg',
        boxShadow: 'inset 0 0 0 1px $$border',

        '&:hover': {
          bg: '$$bgHover',
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },

        '&:active': {
          bg: '$$bgActive',
        },
      },
      outline: {
        bg: 'transparent',
        boxShadow: 'inset 0 0 0 1px $$border',

        '&:hover': {
          bg: '$$bgHover',
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },

        '&:active': {
          bg: '$$bgActive',
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
      },
      solid: {
        bg: '$$solid',
        color: slate.slate1,

        '&:hover': {
          bg: '$$solidHover',
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
