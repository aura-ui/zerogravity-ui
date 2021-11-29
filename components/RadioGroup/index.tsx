import React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { styled, ComponentProps, VariantProps } from 'stitches.config'
import { defaultColors } from '@/styles/colors'
import { Text } from '../Text'
import { Flex } from '../Flex'
import * as Label from '@radix-ui/react-label'
import { blue } from '@radix-ui/colors'

type RadioGroupRoot = ComponentProps<typeof RadioGroupPrimitive.Root>

export interface RadioGroupProps extends RadioGroupRoot {
  /**
   * A visual label for the radio group
   */
  label?: string
  gap?: string
  children: React.ReactNode
}

const RadioGroupWrapper = styled(RadioGroupPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
})

const VisualLabel = styled('span', Text)

export const RadioGroup = ({ label, gap, children }: RadioGroupProps) => {
  return (
    <form>
      <VisualLabel>{label}</VisualLabel>
      <RadioGroupWrapper css={{ gap: gap }}>{children}</RadioGroupWrapper>
    </form>
  )
}

type StyledRadioProps = ComponentProps<typeof StyledRadio>
type StyledRadioVariants = VariantProps<typeof StyledRadio>

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',

  ...defaultColors,

  br: '$full',
  bg: 'transparent',
  boxShadow: `inset 0 0 1px ${defaultColors.$$borderHover}`,

  '&:hover': {
    bg: defaultColors.$$bgHover,
  },

  variants: {
    size: {
      sm: {
        boxSize: '$3',
      },
      md: {
        boxSize: '$4',
      },
      lg: {
        boxSize: '$5',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'grid',
  placeItems: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    br: '$full',
    bg: blue.blue9,
  },

  variants: {
    size: {
      sm: {
        '&::after': {
          boxSize: '6px',
        },
      },
      md: {
        '&::after': {
          boxSize: '$2',
        },
      },
      lg: {
        '&::after': {
          boxSize: '10px',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface RadioProps extends StyledRadioProps, StyledRadioVariants {
  /**
   * The controlled value of the radio item to check.
   * Should be used in conjunction with onValueChange.
   */
  value: string
  /**
   * Adds an id for the radio and corresponding htmlFor for the label
   *
   */
  id?: string
  /**
   * Change the color of the indicator
   */
  indicatorColor?: string
  /**
   * Change the size of the indicator. Defaults to medium.
   */
  indicatorSize?: 'sm' | 'md' | 'lg'
  /**
   * Provide a visual label for the radio button.
   */
  children: string

  /**
   * Adjust the spacing between the radio button and its label
   */
  gap?: string
}

export const Radio = ({
  value,
  id,
  indicatorSize = 'md',
  indicatorColor,
  children,
  gap,
  ...props
}: RadioProps) => {
  return (
    <Flex css={{ alignItems: 'center', gap: gap }}>
      <StyledRadio value={value} id={id} {...props}>
        <StyledIndicator
          size={indicatorSize}
          css={{
            '&::after': {
              bg: indicatorColor,
            },
          }}
        />
      </StyledRadio>
      <Label.Root htmlFor={id}>{children}</Label.Root>
    </Flex>
  )
}
