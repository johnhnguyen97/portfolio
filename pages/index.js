import { Container, Box, Heading, Text } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container p={4} borderRadius="lg">
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in the USA!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        John Nguyen
                    </Heading>
                    <p> Digital Engineer ( Artist / Developer / Designer )</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
