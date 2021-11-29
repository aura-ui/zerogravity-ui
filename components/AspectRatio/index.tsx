import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'
import { ComponentProps, ThemeCSS } from 'stitches.config'
import { Box } from '../Box'

type AspectRatioBaseProps = ComponentProps<typeof AspectRatioPrimitive.Root>

export interface AspectRatioProps extends AspectRatioBaseProps {
  children: React.ReactElement
  css?: ThemeCSS
  maxWidth?: string | number
}

export const AspectRatio = ({ children, ...props }: AspectRatioProps) => {
  return (
    <Box
      css={{
        overflow: 'hidden',
        maxWidth: props.maxWidth ? props.maxWidth : 300,
        ...props.css,
      }}
    >
      <AspectRatioPrimitive.Root {...props}>
        {children}
      </AspectRatioPrimitive.Root>
    </Box>
  )
}
