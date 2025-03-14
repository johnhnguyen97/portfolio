import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/core/section'
import { WorkGridItem } from '../components/ui/grid-item'
import Article from '../components/layouts/article'

const Works = () => {
    return (
        <Article title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="project1"
                        title="Project Management System"
                        thumbnail="https://picsum.photos/400/250?random=1"
                    >
                        A comprehensive project management system built with React and Node.js
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="project2"
                        title="E-commerce Platform"
                        thumbnail="https://picsum.photos/400/250?random=2"
                    >
                        Modern e-commerce solution using Next.js and MongoDB
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        id="project3"
                        title="AI Chat Application"
                        thumbnail="https://picsum.photos/400/250?random=3"
                    >
                        Real-time chat application with AI integration
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        id="project4"
                        title="Portfolio Website"
                        thumbnail="https://picsum.photos/400/250?random=4"
                    >
                        Personal portfolio website built with Next.js and Chakra UI
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Collaborations
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id="collab1"
                            title="Team Project"
                            thumbnail="https://picsum.photos/400/250?random=5"
                        >
                            Collaborative development project with a remote team
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id="collab2"
                            title="Open Source"
                            thumbnail="https://picsum.photos/400/250?random=6"
                        >
                            Contributions to various open source projects
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Section>
            </Container>
        </Article>
    )
}

export default Works
