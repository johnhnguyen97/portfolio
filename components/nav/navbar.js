import Logo from './logo'
import {Container, Box, Heading, Flex, useColorModeValue} from '@chakra-ui/react'
import Head from 'next/head'
import ThemeToggleButton from '../ui/theme-toggle-button'
import CustomDropdown from './custom-dropdown'

const Navbar = props => {
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
                zIndex={2}
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

                    <Box
                        flex={1}
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        gap={4}
                        position="relative"
                        zIndex={100}
                        ml="auto"
                    >
                        <ThemeToggleButton />
                        <Box position="relative">
                            <CustomDropdown
                                items={[
                                    { href: '/', label: 'About' },
                                    { href: '/works', label: 'Works' },
                                    { href: '/posts', label: 'Posts' }
                                ]}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Navbar
