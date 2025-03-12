import Logo from './logo'
import NextLink from 'next/link'
import {Container, Box, Link, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue, Stack } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Head from 'next/head'

const LinkItem = ({ href, path, children }) => {
const active = path === href
const inactiveColor = useColorModeValue('gray.900', 'whiteAlpha.900')
return (
    <NextLink href={href} legacyBehavior>
        <Link
            p={2}
            bg={active ? 'glassTeal.400' : undefined}
            color={active ? '#202023' : inactiveColor}
        >
            {children}
        </Link>
    </NextLink>
)
}

const Navbar = props => {
    const { path } = props

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>John Nguyen - Homepage</title>
            </Head>
            <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter: 'blur(10px)'}}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing="tighter" ml={3}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/about" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <Menu isLazy id="navbar-menu">
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant="outline"
                            aria-label="Options"
                            display={{ base: 'inline-block', md: 'none' }}
                        />
                        <MenuList>
                            <NextLink href="/about" passHref legacyBehavior>
                                <MenuItem as={Link}>About</MenuItem>
                            </NextLink>
                            <NextLink href="/works" passHref legacyBehavior>
                                <MenuItem as={Link}>Works</MenuItem>
                            </NextLink>
                            <NextLink href="/posts" passHref legacyBehavior>
                                <MenuItem as={Link}>Posts</MenuItem>
                            </NextLink>
                        </MenuList>
                    </Menu>
                </Box>
            </Container>
        </Box>
        </>
    )
}

export default Navbar
