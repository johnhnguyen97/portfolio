import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true
    },
    styles: {
        global: (props) => ({
            body: {
                bg: props.colorMode === 'dark' ? '#121317' : '#f8f8f5',
                color: props.colorMode === 'dark' ? '#c4c3ca' : '#1f2029'
            },
            'h1, h2, h3, h4, h5, h6': {
                color: props.colorMode === 'dark' ? '#8ec5ff' : '#0751cf'
            },
            '.nav-link': {
                color: props.colorMode === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                _hover: {
                    color: props.colorMode === 'dark' ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'
                }
            }
        })
    },
    components: {
        Heading: {
            variants: {
                'section-title': {
                    textDecoration: 'underline',
                    textDecorationStyle: 'solid',
                    fontSize: 20,
                    textUnderlineOffset: 6,
                    textDecorationColor: 'currentColor',
                    textDecorationThickness: '3px',
                    marginTop: 3,
                    marginBottom: 4
                }
            }
        },
        Link: {
            baseStyle: props => ({
                color: props.colorMode === 'dark' ? '#8ec5ff' : '#0751cf',
                textUnderlineOffset: 3
            })
        }
    },
    fonts: {
        heading: "'M PLUS Rounded 1c'"
    },
    colors: {
        glassTeal: '#88ccca',
        primary: '#8167a9',
        secondary: {
            light: '#1f2029',
            dark: '#ffffff'
        }
    }
})

export default theme
