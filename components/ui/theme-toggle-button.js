'use client'

import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('#0751cf', '#8ec5ff')
  const borderColor = useColorModeValue('#0751cf', '#8ec5ff')
  const circleColor = useColorModeValue('#fff', '#000')

  return (
    <Box display="inline-block" position="relative">
      <Box
        as="button"
        width="60px"
        height="8px"
        bg={bgColor}
        border="2px solid"
        borderColor={borderColor}
        borderRadius="27px"
        position="relative"
        onClick={toggleColorMode}
        transition="all 300ms linear"
      >
        <Box
          position="absolute"
          top="-11px"
          left={useColorModeValue('-13px', '43px')}
          width="26px"
          height="26px"
          borderRadius="50%"
          bg={circleColor}
          boxShadow={useColorModeValue(
            '0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07)',
            'none'
          )}
          transition="all 300ms linear"
        />
      </Box>
    </Box>
  )
}

export default ThemeToggleButton
