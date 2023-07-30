import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys,
)

export const checkboxTheme = defineMultiStyleConfig({
  defaultProps: {
    size: 'xl',
    variant: 'circular',
  },
})
