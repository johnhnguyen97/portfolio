import { Container, Box, Heading, Image, useColorModeValue, Button, Link } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from "../components/layouts/paragraph"
import { BioSection, BioYear } from "../components/bio"

const Page = () => {
    return (
        <Container p={4} borderRadius="lg">
            <Box
                borderRadius="lg"
                bg={useColorModeValue('rgba(218, 224, 228, 0.5)', 'rgba(218, 224, 228, 0.1)')}
                style={{ backdropFilter: 'blur(10px)' }}
                p={3}
                mb={6}
                align="center"
            >
                Hello, I&apos;m a full-stack developer based in the USA!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        John Nguyen
                    </Heading>
                    <p>Digital Engineer (Artist / Developer / Designer)</p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/john3.JPG"
                        alt="Profile Image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    John Nguyen is a highly skilled IT professional with a strong background in system engineering,
                    software development, and project management. With expertise in backend and frontend technologies
                    such as Java, Spring Boot, Angular, and Python. John has a proven track record of delivering
                    high-quality software solutions to meet the needs of his clients. When he&apos;s not coding, John enjoys
                    singing, voice acting, and spending time with his family plus cat.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works" passHref>
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            bg={useColorModeValue('#2975A7', '#2975A7')}
                            color={useColorModeValue('#DAE0E4', '#DAE0E4')}
                            _hover={{
                                bg: useColorModeValue('#1c5a87', '#1c5a87')
                            }}
                            borderRadius="md"
                        >
                            View Work
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1997</BioYear>
                    Born in Houston, Texas.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Graduated from Western Kentucky University.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Worked at City of Bowling Green.
                </BioSection>
                <BioSection>
                    <BioYear>2025 - Present</BioYear>
                    Works as a freelance developer.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Hobbies
                </Heading>
                <Paragraph>
                    Singing, Voice Acting,{' '}
                    <Link href="https://www.twitch.tv/magister_rein" target="_blank">
                        Streaming
                    </Link>
                    , Exercising, Photography
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page
