import type { AppProps } from 'next/app'

// import FullStyleProvider from '@/providers/FullStyleProvider'
import TwinStyleProvider from '@/providers/TwinStyleProvider'
import StateProvider from '@/providers/StateProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TwinStyleProvider>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </TwinStyleProvider>
  )
}

export default MyApp
