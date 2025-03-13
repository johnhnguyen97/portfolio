import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
    render () {
        return(
            <Html lang= "en">
                <Head>
                    <meta name="description" content="John Nguyen's personal portfolio website" />
                    <meta name="author" content="John Nguyen" />
                    <link rel="icon" type="image/svg+xml" href="/images/contents/color_logo.svg" />
                    <link rel="icon" type="image/png" href="/images/contents/color_logo.svg" />
                    <link rel="apple-touch-icon" href="/images/contents/color_logo.svg" />
                    <meta name="theme-color" content="#2975A7" media="(prefers-color-scheme: light)" />
                    <meta name="theme-color" content="#1A202C" media="(prefers-color-scheme: dark)" />
                </Head>
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
}
