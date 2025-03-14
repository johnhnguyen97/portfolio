import { useState } from 'react'
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import CogIcon from './cog-icon'

const ThemeToggleItem = () => {
  const [isSpinning, setIsSpinning] = useState(false)
  const { toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('rgba(255,255,255,0.1)', 'rgba(0,0,0,0.1)')
  const hoverBgColor = useColorModeValue('rgba(255,255,255,0.2)', 'rgba(0,0,0,0.2)')
  const textColor = useColorModeValue('rgba(0,0,0,0.6)', 'rgba(255,255,255,0.6)')
  const hoverTextColor = useColorModeValue('rgba(0,0,0,1)', 'rgba(255,255,255,1)')

  return (
    <Box
      onClick={() => {
        setIsSpinning(true)
        toggleColorMode()
        setTimeout(() => setIsSpinning(false), 1000)
      }}
      cursor="pointer"
      position="relative"
      px="20px"
      py="10px"
      borderRadius="md"
      bg={bgColor}
      color={textColor}
      display="flex"
      alignItems="center"
      fontSize="20px"
      fontWeight={600}
      letterSpacing="2px"
      transition="all 200ms linear"
      _hover={{
        bg: hoverBgColor,
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
        color: hoverTextColor
      }}
    >
      <CogIcon isOpen={isSpinning} />
      <Box ml={3}>
        {useColorModeValue('Dark', 'Light')}
      </Box>
    </Box>
  )
}

export default ThemeToggleItem
