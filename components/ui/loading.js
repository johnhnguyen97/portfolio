import { Box, Progress, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const pulse = keyframes`
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
`

const AnimatedLogo = styled(Box)`
  animation: ${pulse} 2s ease-in-out infinite;
`

const Loading = () => {
  const bgColor = useColorModeValue('rgba(218, 224, 228, 0.5)', 'rgba(218, 224, 228, 0.1)')
  const logoImg = '/images/contents/color_logo.svg'

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue('#ffffff', '#202023')}
      zIndex={9999}
    >
      <AnimatedLogo mb={6}>
        <Image src={logoImg} width={60} height={60} alt="Loading logo" />
      </AnimatedLogo>
      <Box width="200px">
        <Progress
          size="xs"
          isIndeterminate
          bg={bgColor}
          colorScheme="teal"
          borderRadius="full"
        />
      </Box>
    </Box>
  )
}

export default Loading
