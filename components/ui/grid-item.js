import NextLink from 'next/link'
import Image from 'next/image'
import {Box, Text, LinkBox, LinkOverlay} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                loading="lazy"
                width={400}
                height={250}
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <NextLink href={`/works/${id}`} passHref>
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    loading="lazy"
                    width={400}
                    height={250}
                />
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </NextLink>
        </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
    `}
    />
)
