import Head from 'next/head'
import Navbar from '../nav/navbar.js'
import { Box, Container } from '@chakra-ui/react'
import GlobalStyles from '../core/global-styles'
import CustomCursor from '../ui/custom-cursor'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8} position="relative">
            <GlobalStyles />
            <CustomCursor />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>John Nguyen - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main;
