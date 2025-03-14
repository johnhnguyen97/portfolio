import { useState, useCallback, useEffect, useRef } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import ThemeToggleItem from './theme-toggle-item'
import NextLink from 'next/link'

const MenuIcon = ({ isOpen }) => {
  const lineColor = useColorModeValue('#1f2029', '#fff')

  return (
    <Box className="menu-icon" h="30px" w="30px" position="relative" zIndex={2} display="flex" flexDirection="column" justifyContent="center">
      <Box position="relative" width="30px" height="18px">
        {/* Top line */}
        <Box
          position="absolute"
          top="0"
          h="2px"
          w="30px"
          bg={lineColor}
          transform={isOpen ? "translateY(8px) rotate(45deg)" : "none"}
          transition="transform 0.3s ease"
          transformOrigin="center"
        />
        {/* Middle line */}
        <Box
          position="absolute"
          top="8px"
          h="2px"
          w="30px"
          bg={lineColor}
          opacity={isOpen ? 0 : 1}
          transition="opacity 0.3s ease"
        />
        {/* Bottom line */}
        <Box
          position="absolute"
          top="16px"
          h="2px"
          w="30px"
          bg={lineColor}
          transform={isOpen ? "translateY(-8px) rotate(-45deg)" : "none"}
          transition="transform 0.3s ease"
          transformOrigin="center"
        />
      </Box>
    </Box>
  )
}

const CustomDropdown = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)
  const bgColor = useColorModeValue('rgba(235, 235, 235,0.4)', 'rgba(20, 21, 26,0.6)')
  const bgColorAfter = useColorModeValue('#ffffff', '#14161a')
  const linkColor = useColorModeValue('rgba(0,0,0,0.6)', 'rgba(255,255,255,0.6)')
  const linkHoverColor = useColorModeValue('rgba(0,0,0,1)', 'rgba(255,255,255,1)')
  const accentColor = useColorModeValue('#0751cf', '#8ec5ff')
  const itemBgColor = useColorModeValue('rgba(255,255,255,0.1)', 'rgba(0,0,0,0.1)')
  const itemHoverBgColor = useColorModeValue('rgba(255,255,255,0.2)', 'rgba(0,0,0,0.2)')

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    } else {
      setContentHeight(0)
    }
  }, [isOpen, items])

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest('.nav')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', closeMenu)
    return () => document.removeEventListener('click', closeMenu)
  }, [])

  return (
    <Box className="nav" position="relative" zIndex={99}>
      <Box
        onClick={toggleMenu}
        className="nav-but-wrap"
        position="relative"
        display="inline-block"
        padding="15px"
        transition="all 0.3s ease-out"
      >
        <MenuIcon isOpen={isOpen} />
      </Box>

      <Box
        ref={contentRef}
        className="nav__content"
        position="absolute"
        top="70px"
        right="0"
        width="auto"
        minWidth="320px"
        textAlign="left"
        opacity={isOpen ? 1 : 0}
        visibility={isOpen ? 'visible' : 'hidden'}
        transition="all 0.6s cubic-bezier(0.77, 0, 0.175, 1)"
        px={8}
        py={6}
        maxHeight="80vh"
        overflowY="auto"
        css={{
          '::-webkit-scrollbar': {
            width: '4px'
          },
          '::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '::-webkit-scrollbar-thumb': {
            background: useColorModeValue('rgba(0,0,0,0.2)', 'rgba(255,255,255,0.2)'),
            borderRadius: '2px'
          }
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={5}
          p={6}
          width="100%"
          position="relative"
        >
          {items.map((item, index) => (
            <Box
              key={index}
              opacity={isOpen ? 1 : 0}
              transform={`translate(${isOpen ? '0' : '20px'}, 0%)`}
              transition={`all 0.6s cubic-bezier(0.77, 0, 0.175, 1) ${isOpen ? 0.3 + index * 0.1 : 0}s`}
              textAlign="left"
            >
              <NextLink href={item.href} passHref>
                <Box
                  as="a"
                  position="relative"
                  textDecoration="none"
                  color={linkColor}
                  cursor="pointer"
                  fontFamily="Poppins, sans-serif"
                  fontWeight={600}
                  fontSize="20px"
                  letterSpacing="2px"
                  px="24px"
                  py="14px"
                  borderRadius="md"
                  bg={itemBgColor}
                  display="block"
                  transition="all 200ms linear"
                  _hover={{
                    bg: itemHoverBgColor,
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                    color: linkHoverColor,
                    _after: {
                      height: '100%',
                      opacity: 1,
                      top: 0
                    }
                  }}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    width: '5px',
                    height: 0,
                    opacity: 0,
                    backgroundColor: accentColor,
                    transition: 'all 200ms linear'
                  }}
                >
                  {item.label}
                </Box>
              </NextLink>
            </Box>
          ))}
          <Box
            opacity={isOpen ? 1 : 0}
            transform={`translate(${isOpen ? '0' : '20px'}, 0%)`}
            transition={`all 0.6s cubic-bezier(0.77, 0, 0.175, 1) ${isOpen ? 0.3 + items.length * 0.1 : 0}s`}
            mt={6}
          >
            <ThemeToggleItem />
          </Box>
        </Box>
      </Box>

      {/* Background overlays */}
      <Box
        position="absolute"
        top="70px"
        right="0"
        width="auto"
        minWidth={isOpen ? "320px" : "0"}
        height={contentHeight}
        borderRadius={isOpen ? "15px" : "200%"}
        bg={bgColor}
        zIndex={-1}
        transition="all 0.6s cubic-bezier(0.77, 0, 0.175, 1)"
      />
      <Box
        position="absolute"
        top="70px"
        right="0"
        width="auto"
        minWidth={isOpen ? "320px" : "0"}
        height={contentHeight}
        borderRadius={isOpen ? "15px" : "200%"}
        bg={bgColorAfter}
        backgroundPosition="bottom center"
        backgroundRepeat="no-repeat"
        backgroundSize="300%"
        boxShadow="6px 7px 28px 0 rgba(16, 16, 16, 0.3)"
        zIndex={-2}
        transition="all 0.6s cubic-bezier(0.77, 0, 0.175, 1)"
      />
    </Box>
  )
}

export default CustomDropdown
