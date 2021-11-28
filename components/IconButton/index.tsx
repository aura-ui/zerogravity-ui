import * as React from 'react'
import { resets } from '@/styles/resets/button'
import { slate } from '@radix-ui/colors'
import {
  styled,
  ComponentProps,
  VariantProps,
  PropertyValue,
} from '../../stitches.config'
import { Icon } from '../Icon'

export type IconButtonBaseProps = ComponentProps<typeof IconButtonBase>
export type IconButtonVariants = VariantProps<typeof IconButtonBase>

const IconButtonBase = styled('button', {
  ...resets,

  // custom
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

        '&:disabled': {
          opacity: '50%',
          cursor: 'not-allowed',
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
        boxSize: '$6',
        fontSize: '$xl',
      },
      sm: {
        boxSize: '$8',
      },
      md: {
        boxSize: '$10',
        fontSize: '$4xl',
      },
      lg: {
        boxSize: '$12',
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
    size: 'md',
    rounded: 'md',
  },
})

export interface IconButtonProps
  extends IconButtonBaseProps,
    IconButtonVariants {
  /**
   * The icon to be used in the button.
   * @type React.ReactElement
   */

  icon: React.ReactElement

  /**
   * A11y: A label that describes the button to screen readers
   */
  label: string

  /**
   * Size of the contained icon. Defaults to 16px
   */
  iconSize?: string
}

export const IconButton = ({
  icon,
  iconSize = '16px',
  label,
  ...props
}: IconButtonProps) => {
  const { children } = props
  /**
   * Passing the icon as prop or children should work
   */
  const element = icon || children
  const _children = React.isValidElement(element)
    ? React.cloneElement(element as any, {
        'aria-hidden': true,
        focusable: false,
        width: iconSize,
        height: iconSize,
      })
    : null

  return (
    <IconButtonBase {...props}>
      <Icon label={label}>{_children}</Icon>
    </IconButtonBase>
  )
}
