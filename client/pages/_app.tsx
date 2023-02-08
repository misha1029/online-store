import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import '../app/assets/styles/globals.scss'
import { persistor, store } from '../app/store/store'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ChakraProvider>
						<Component {...pageProps} />
					</ChakraProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}

export default MyApp
