import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import { ReactQueryDevtools } from 'react-query/devtools'

import { QueryClientProvider, QueryClient } from 'react-query'
import { SidebarDrawerProvider } from '@/contexts/SidebarDrawerContext'
import { makeServer } from '@/services/mirage'

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
