import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import '../app/assets/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
