import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button,
    useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const NotFound = () => {
    return (
        <Layout title="404 Not Found">
            <Container pt={14}>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('rgba(218, 224, 228, 0.5)', 'rgba(218, 224, 228, 0.1)')}
                    p={6}
                    mb={6}
                    align="center"
                >
                    <Heading as="h1" mb={4}>
                        Not Found
                    </Heading>
                    <Text fontSize="lg" mb={6}>
                        The page you&apos;re looking for was not found.
                    </Text>
                    <Divider my={6} />
                    <Box align="center">
                        <NextLink href="/" passHref>
                            <Button
                                bg={useColorModeValue('#2975A7', '#2975A7')}
                                color={useColorModeValue('#DAE0E4', '#DAE0E4')}
                                _hover={{
                                    bg: useColorModeValue('#1c5a87', '#1c5a87')
                                }}
                                borderRadius="md"
                            >
                                Return to Home
                            </Button>
                        </NextLink>
                    </Box>
                </Box>
            </Container>
        </Layout>
    )
}

export default NotFound
