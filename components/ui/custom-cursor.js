import { useEffect } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'

const CustomCursor = () => {
  const { colorMode } = useColorMode()

  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const cursor2 = document.querySelector('.cursor2')
    const cursor3 = document.querySelector('.cursor3')

    document.addEventListener('mousemove', function(e){
      cursor.style.cssText = cursor2.style.cssText = cursor3.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`
    })

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = 1
      cursor2.style.opacity = 1
      cursor3.style.opacity = 1
    })

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = 0
      cursor2.style.opacity = 0
      cursor3.style.opacity = 0
    })

    const links = document.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        cursor2.classList.add('hover')
        cursor3.classList.add('hover')
      })
      link.addEventListener('mouseleave', () => {
        cursor2.classList.remove('hover')
        cursor3.classList.remove('hover')
      })
    })
  }, [])

  return (
    <>
      <Box
        className="cursor"
        position="fixed"
        borderRadius="50%"
        transform="translateX(-50%) translateY(-50%)"
        pointerEvents="none"
        left="-100px"
        top="50%"
        mixBlendMode="difference"
        transition="all 300ms linear"
        bg={colorMode === 'light' ? '#1f2029' : '#ffffff'}
        h="0"
        w="0"
        zIndex={99999}
      />
      <Box
        className="cursor2"
        position="fixed"
        borderRadius="50%"
        transform="translateX(-50%) translateY(-50%)"
        pointerEvents="none"
        left="-100px"
        top="50%"
        mixBlendMode="difference"
        transition="all 300ms linear"
        h="36px"
        w="36px"
        border={`2px solid ${colorMode === 'light' ? '#1f2029' : '#ffffff'}`}
        boxShadow={colorMode === 'light' ? '0 0 4px rgba(0, 0, 0, 0.1)' : '0 0 22px rgba(255, 255, 255, 0.6)'}
        zIndex={99998}
        sx={{
          '&.hover': {
            transform: 'scale(2) translateX(-25%) translateY(-25%)',
            border: 'none',
            background: colorMode === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,1)',
            boxShadow: colorMode === 'light' ? '0 0 2px rgba(0, 0, 0, 0.1)' : '0 0 12px rgba(255, 255, 255, 0.2)'
          }
        }}
      />
      <Box
        className="cursor3"
        position="fixed"
        borderRadius="50%"
        transform="translateX(-50%) translateY(-50%)"
        pointerEvents="none"
        left="-100px"
        top="50%"
        mixBlendMode="difference"
        transition="all 300ms linear"
        h="36px"
        w="36px"
        zIndex={99998}
        sx={{
          '&.hover': {
            transform: 'scale(2) translateX(-25%) translateY(-25%)',
            border: 'none'
          }
        }}
      />

      <style jsx global>{`
        @media screen and (max-width: 1200px) {
          .cursor, .cursor2, .cursor3 {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default CustomCursor
