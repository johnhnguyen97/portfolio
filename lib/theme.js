import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true
    },
    styles: {
        global: (props) => ({
            body: {
                bg: props.colorMode === 'dark' ? '#202023' : '#CCC1B8'
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
                    textDecorationColor: '#525252',
                    textDecorationThickness: '3px',
                    marginTop: 3,
                    marginBottom: 4
                }
            }
        },
        Link: {
            baseStyle: (props) => ({
                color: props.colorMode === 'dark' ? '#ff63c3' : '#3d7aed',
                textUnderlineOffset: 3
            })
        }
    },
    fonts: {
        heading: "'M PLUS Rounded 1c'"
    },
    colors: {
        glassTeal: '#88ccca'
    }
})

export default theme
