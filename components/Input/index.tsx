import { defaultColors } from '@/styles/colors'
import { styled } from '../../stitches.config'

export const Input = styled('input', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  ...defaultColors,

  // custom
  bg: 'transparent',
  color: defaultColors.$$text,
  py: '$2',
  px: '$2',
  br: '$sm',

  variants: {
    variant: {
      default: {
        boxShadow: `inset 0 0 0 1px ${defaultColors.$$border}`,

        '&::placeholder': {
          color: defaultColors.$$solid,
        },
      },
      ghost: {
        boxShadow: `none`,

        '&:hover': {
          boxShadow: `inset 0 0 0 1px ${defaultColors.$$border}`,
        },

        '&:focus': {
          boxShadow: `inset 0 0 0 1px ${defaultColors.$$border}`,
        },
      },
    },

    size: {
      sm: {
        height: '$8',
        minWidth: '$14',
      },
      md: {
        height: '$10',
        minWidth: '$16',
      },
      lg: {
        height: '$12',
        minWidth: '$16',
      },
    },

    cursor: {
      default: {
        cursor: 'default',
        ':focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
