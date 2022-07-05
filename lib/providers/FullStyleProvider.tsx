import type { ReactNode } from 'react'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import TwinStyleProvider from './TwinStyleProvider'

export interface StyleProviderProps {
  children: ReactNode;
}

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
})

export default function FullStyleProvider({ children }: StyleProviderProps) {
  return (
    <TwinStyleProvider>
      <ChakraProvider theme={customTheme}>
        {children}
      </ChakraProvider>
    </TwinStyleProvider>
  )
}

