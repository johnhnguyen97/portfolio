import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 32px;
line-height: 32px;
margin: 8px 0;

img {
    filter: ${props => props.isDark ? 'invert(1)' : 'none'};
}

&:hover img {
    animation: ${spin} 2s linear infinite;
}
`

const Logo = () => {
    const logoImg = '/images/contents/logo4.svg'
    const isDark = useColorModeValue(false, true)

    return (
        <Link href="/" legacyBehavior>
            <a>
                <LogoBox isDark={isDark}>
                <Image src={logoImg} width={30} height={30} alt="logo" />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight="bold"
                    ml={3}>
                        John Nguyen
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
