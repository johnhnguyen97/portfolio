import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/main.js"
import Fonts from "../components/core/fonts.js"
import theme from "../lib/theme.js"
import Loading from "../components/ui/loading.js"
import { useState, useEffect } from 'react'

const Website = ({ Component, pageProps, router }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) return <Loading />
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website
