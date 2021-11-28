import { defaultColors } from '@/styles/colors'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckboxProps as CheckboxPrimitiveProps } from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import {
  styled,
  ComponentProps,
  VariantProps,
  PropertyValue,
} from '../../stitches.config'

export type StyledCheckboxProps = ComponentProps<typeof StyledCheckbox>
export type CheckboxVariants = VariantProps<typeof StyledCheckbox>

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  overflow: 'hidden',

  ...defaultColors,

  variants: {
    variant: {
      solid: {
        bg: defaultColors.$$solid,

        '&:hover': {
          bg: defaultColors.$$solidHover,
        },
      },
      subtle: {
        bg: defaultColors.$$bg,
        boxShadow: `inset 0 0 0 1px ${defaultColors.$$border}`,

        '&:hover': {
          bg: defaultColors.$$bgHover,
          boxShadow: `inset 0 0 0 1px ${defaultColors.$$borderHover}`,
        },
      },
    },

    size: {
      sm: {
        boxSize: '$3',
        br: '$xs',
      },
      md: {
        boxSize: '$4',
        br: '$sm',
      },
      lg: {
        boxSize: '$5',
        br: '$sm',
      },
    },
  },

  defaultVariants: {
    variant: 'subtle',
    size: 'md',
  },
})

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: defaultColors.$$text,
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
})

export interface CheckboxProps
  extends CheckboxPrimitiveProps,
    StyledCheckboxProps,
    CheckboxVariants {
  iconSize?: string | number
}

export const Checkbox = ({ iconSize, ...props }: CheckboxProps) => {
  return (
    <StyledCheckbox {...props}>
      <StyledIndicator>
        <CheckIcon width={iconSize} height={iconSize} />
      </StyledIndicator>
    </StyledCheckbox>
  )
}
